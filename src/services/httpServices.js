import axios from "axios";
import Cookies from "js-cookie";

export const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    let token = null;
    try {
      if (typeof window !== "undefined") {
        const cookieValue = Cookies.get("userInfo");
        if (cookieValue) {
          const parsed = JSON.parse(cookieValue);
          token = parsed?.token || null;
        }
      }
    } catch (err) {
      console.warn("Unable to parse userInfo cookie", err.message);
    }

    if (!config.headers) {
      config.headers = {};
    }

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    } else {
      delete config.headers.authorization;
    }

    // ensure json defaults remain when headers object was missing
    if (!config.headers.Accept) {
      config.headers.Accept = "application/json";
    }
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// console.log(process.env.API_BASE_URL);
const responseBody = (response) => response.data;

const requests = {
  get: (url, config) => instance.get(url, config).then(responseBody),

  post: (url, body, config) =>
    instance.post(url, body, config).then(responseBody),

  put: (url, body, config) =>
    instance.put(url, body, config).then(responseBody),

  patch: (url, body, config) =>
    instance.patch(url, body, config).then(responseBody),

  delete: (url, config) => instance.delete(url, config).then(responseBody),
};

export default requests;
