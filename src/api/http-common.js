import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
});
apiClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  function (error) {
    switch (error.response.status) {
      case 403:
        location.href = "/";

        break;
      case 401:
        location.href = "/";

        break;

      default:
        break;
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default apiClient;
