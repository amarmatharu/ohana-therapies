// Simple configuration for API endpoints

const config = {
  // Backend API URL - update this based on your environment
  API_BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
  
  // API Endpoints
  ENDPOINTS: {
    CONTACT: '/api/contact',
    WAITLIST: '/api/waitlist',
    CAREERS: '/api/careers/apply'
  }
};

export default config;

