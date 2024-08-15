import BaseService from "./baseService";

export class FilmService extends BaseService {
    constructor() {
        super('films')
    }

    getPopularFilms() {
        return this.httpClient.get(`${this.apiUrl}/popular`)
            .then(response => response.data)
            .catch(this.handleError);
    }
}

export default new FilmService();

