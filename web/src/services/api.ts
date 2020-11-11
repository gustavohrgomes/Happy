import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3333' Node web api
  baseURL: 'https://localhost:5001', // Dotnet Core web api
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default api;