const api = axios.create({
  baseURL: "http://127.0.0.1:3005/api/v1", 
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      } else {
        console.warn("Interceptor: token tidak ditemukan di localStorage");
      }

      return config;
    } catch (err) {
      console.error("Interceptor error:", err);
      return config; // tetap kirim request walau ada error di interceptor
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);


window.api = api;