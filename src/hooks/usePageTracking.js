import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to track page views in Google Analytics
 * Automatically sends page view events when the route changes
 */
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is available (Google Analytics loaded)
    if (typeof window.gtag !== 'undefined') {
      // Send page view to Google Analytics
      window.gtag('config', 'G-E0ER63L8RR', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
      
      // Optional: Log for debugging (remove in production)
      console.log('Page view tracked:', location.pathname);
    }
  }, [location]);
};

export default usePageTracking;

