import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://chow-settled-uniquely.ngrok-free.app/', // change to your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
