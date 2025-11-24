import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  structuredData,
  breadcrumbs,
  image,
  type = 'website'
}) => {
  const location = useLocation();
  const canonicalUrl = `https://ohanatherapies.com${location.pathname}`;

  // Construct breadcrumb schema if provided
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  // Core LocalBusiness Schema for San Jose & Santa Clara
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ohanatherapies.com/#organization",
    "name": "Ohana Therapies",
    "alternateName": "Ohana ABA Therapy",
    "description": "Leading ABA therapy provider serving San Jose and Santa Clara, CA. Expert autism therapy services, in-home ABA therapy, and family support programs.",
    "url": "https://ohanatherapies.com",
    "logo": "https://ohanatherapies.com/logo.png",
    "image": "https://ohanatherapies.com/logo.png",
    "priceRange": "$$",
    "telephone": "+1-408-123-4567",
    "email": "info@ohanatherapies.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santa Clara",
      "addressRegion": "CA",
      "postalCode": "95050",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "San Jose",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "City",
        "name": "Santa Clara",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.3382",
      "longitude": "-121.8863"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/ohanatherapies/",
      "https://www.linkedin.com/company/ohana-therapies"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ABA Therapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "In-Home ABA Therapy",
            "description": "Personalized applied behavior analysis therapy conducted in your home in San Jose and Santa Clara"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Autism Therapy Services",
            "description": "Comprehensive autism spectrum disorder therapy and support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Training & Support",
            "description": "Training programs for families to support child development"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Ohana Therapies" />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={title} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={title} />}
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Ohana Therapies" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="San Jose, Santa Clara" />
      <meta name="geo.position" content="37.3382;-121.8863" />
      <meta name="ICBM" content="37.3382, -121.8863" />
      
      {/* Core LocalBusiness Schema - Always Include */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Additional Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 