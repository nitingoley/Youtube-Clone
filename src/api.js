// src/api/index.js
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://youtube-v311.p.rapidapi.com', // ✅ use v311
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com', // ✅ updated host
  },
});

export default request;
