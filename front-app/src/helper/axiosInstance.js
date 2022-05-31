import axios from 'axios';

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: "http://localhost:4000/api"
  };
  // Create instance
  const axiosInstance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  axiosInstance.interceptors.request.use(function (config) {
    const token = "";
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

export default axiosInstance;