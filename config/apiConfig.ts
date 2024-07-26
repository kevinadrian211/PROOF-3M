// apiConfig.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.6:8082',
  timeout: 10000,
});

instance.interceptors.request.use(
  config => {
    const token = 'your_token_here'; // Si necesitas un token de autenticación
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('API error:', error.response.data);
      if (error.response.status === 401) {
        // Redirigir al login si el usuario no está autorizado
        // Considera usar un servicio de navegación o un contexto para manejar esto
      }
    } else if (error.request) {
      console.error('Network error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;
