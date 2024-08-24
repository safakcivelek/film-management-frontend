import BaseService from "./baseService";
import httpClient from "./httpClient";

export class FilmService extends BaseService {
    constructor() {
        super('films')
    }

    getPopularFilms() {
        return this.httpClient.get(`${this.apiUrl}/popular`)
            .then(response => response.data)
            .catch(this.handleError);
    }

    getBestFilms() {
        return this.httpClient.get(`${this.apiUrl}/best`)
            .then(response => response.data)
            .catch(this.handleError);
    }

    getFilteredFilms(data) {
        return httpClient.post(`${this.apiUrl}/filtered-list`, data)
            .then(response => response.data)
            .catch(error => {
                console.error("API Hatası:", error.response ? error.response.data : error.message);
                return Promise.reject(error);
            });
    }
}

export default new FilmService();

