import http from "../http-common";

class PlaceDataService {
  getAll() {
    return http.get("/places");
  }

  get(id) {
    return http.get(`/places/${id}`);
  }

  create(data) {
    return http.post("/places", data);
  }

  update(id, data) {
    return http.put(`/places/${id}`, data);
  }

  delete(id) {
    return http.delete(`/places/${id}`);
  }

  deleteAll() {
    return http.delete(`/places`);
  }

  findByName(name) {
    return http.get(`/places?name=${name}`);
  }

  getUnavailablePlaces() {
    return http.get(`/places/unavailable`);
  }

  // findByIsland() and findByAvailable()
}

export default new PlaceDataService();