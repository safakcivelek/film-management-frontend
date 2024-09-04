import BaseService from "./baseService";
import apiClient from "./apiClient";

export class FilmRatingService extends BaseService {
    constructor() {
        super('filmRatings')
    }
    
    submitRating(ratingData) {
        return apiClient.post(`${this.apiUrl}`, ratingData)
    }
}

export default new FilmRatingService();

