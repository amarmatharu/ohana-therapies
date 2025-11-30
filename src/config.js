// Simple configuration for API endpoints

// Determine the base URL based on environment
const getApiBaseUrl = () => {
  // If environment variable is set, use it
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // In production, use relative path (same domain as frontend)
  if (process.env.NODE_ENV === 'production') {
    return ''; // Empty string means relative URLs
  }
  
  // In development, use localhost
  return 'http://localhost:8080';
};

const config = {
  // Backend API URL - determined by environment
  baseUrl: getApiBaseUrl(), // Using same property name as Contact form
  API_BASE_URL: getApiBaseUrl(), // Keep this for backward compatibility
  
  // API Endpoints
  ENDPOINTS: {
    CONTACT: '/api/contact',
    WAITLIST: '/api/waitlist',
    CAREERS: '/api/careers/apply'
  }
};

export default config;

