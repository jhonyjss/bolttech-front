import http from "../api/http-common";
class ProjectDataService {
  async all() {
    try {
      return await http.get(`/project`);
    } catch (error) {
      console.error("all", error);
    }
  }
}
export default new ProjectDataService();
