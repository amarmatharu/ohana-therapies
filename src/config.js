// Automatically use local backend in development, production API in production
const config = {
  baseUrl: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:8080' 
    : 'https://api.ohanabehavioralservice.com'
};

export default config;
