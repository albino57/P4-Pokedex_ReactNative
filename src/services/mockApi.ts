import axios from 'axios';

const BASE_URL = "";

const mockApi = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  },
});

export default mockApi;