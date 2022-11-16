import http from "../api/http-common";
class AuthDataService {
  async register(_data) {
    try {
      return await http.post(`/users`, _data);
    } catch (error) {
      console.error("register", error);
    }
  }

  async login(email, password) {
    try {
      const response = await http.post(`/auth/login`, { email, password });
      http.defaults.headers.common["Authorization"] = "Bearer " + response.data.access_token;
      return response;
    } catch (error) {
      console.error("login", error);
    }
  }
}
export default new AuthDataService();
