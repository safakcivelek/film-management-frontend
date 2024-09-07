import BaseService from "./baseService";
//import httpClient from "./httpClient";
import apiClient from "./apiClient";

export class FilmService extends BaseService {
    constructor() {
        super('films')
    }

    getFilteredFilms(data) {
        return apiClient.post(`${this.apiUrl}/filtered-list`, data)
            .then(response => response.data)
            .catch(error => {
                console.error("API Hatası:", error.response ? error.response.data : error.message);
                return Promise.reject(error);
            });
    }
}

export default new FilmService();

