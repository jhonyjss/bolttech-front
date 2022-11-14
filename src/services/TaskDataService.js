import http from "../api/http-common";
class TaskDataservice {
  async create(_data) {
    try {
      return await http.post(`/task`, _data);
    } catch (error) {
      console.error("create", error);
    }
  }

  async delete(id) {
    try {
      return await http.delete(`/task/${id}`);
    } catch (error) {
      console.error("create", error);
    }
  }
}
export default new TaskDataservice();
