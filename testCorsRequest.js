// testCorsRequest.js
import axios from 'axios';

axios.get('http://192.168.0.6:8082') // Reemplaza 'your-endpoint' con el endpoint real
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
