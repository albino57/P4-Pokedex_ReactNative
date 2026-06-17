import axios from 'axios';

const BASE_URL = "https://6a33227ec6ca2aee4385ee09.mockapi.io/api/v1";

const mockApi = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  },
});

export default mockApi;