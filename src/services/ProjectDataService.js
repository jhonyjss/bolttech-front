import http from "../api/http-common";
class ProjectDataService {
  async all() {
    try {
      return await http.get(`/project`);
    } catch (error) {
      console.error("all", error);
    }
  }

  async create(_data) {
    try {
      return await http.post(`/project`, _data);
    } catch (error) {
      console.error("create", error);
    }
  }
}
export default new ProjectDataService();
