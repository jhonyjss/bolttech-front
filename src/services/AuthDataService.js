import http from "../api/http-common";
import axios from "axios";
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
      axios.defaults.headers.common["Authorization"] = response.data.access_token;
      return response;
    } catch (error) {
      console.error("login", error);
    }
  }
}
export default new AuthDataService();
