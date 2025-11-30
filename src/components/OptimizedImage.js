import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/optimized-image.css';

/**
 * OptimizedImage Component
 * - Lazy loading with Intersection Observer
 * - Smooth fade-in effect
 * - Progressive loading
 */

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  onLoad = () => {},
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Skip observer if priority loading
    if (priority) {
      setIsInView(true);
      return;
    }

    // Check if IntersectionObserver is available
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true); // Fallback: load immediately if no support
      return;
    }

    // Intersection Observer for lazy loading
    const options = {
      root: null,
      rootMargin: '50px', // Start loading 50px before entering viewport
      threshold: 0.01
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Disconnect after loading
          if (observerRef.current && imgRef.current) {
            observerRef.current.unobserve(imgRef.current);
          }
        }
      });
    }, options);

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad();
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', src);
    setIsLoaded(true); // Still remove skeleton even on error
  };

  return (
    <div
      ref={imgRef}
      className={`optimized-image-wrapper ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        height: 'auto'
      }}
    >
      {/* Loading skeleton */}
      {!isLoaded && isInView && (
        <div 
          className="image-skeleton"
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : '200px'
          }}
        />
      )}

      {/* Actual image - only render when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`optimized-image ${isLoaded ? 'loaded' : 'loading'}`}
          loading={priority ? 'eager' : loading}
          width={width}
          height={height}
          onLoad={handleImageLoad}
          onError={handleImageError}
          decoding="async"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto'
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;

