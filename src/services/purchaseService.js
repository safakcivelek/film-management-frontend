import apiClient from "./apiClient";
import BaseService from "./baseService";

class PurchaseService extends BaseService {
    constructor() {
        super('purchases');
    }

    purchaseFilm(filmId) {
        return apiClient.post(`${this.apiUrl}`, { filmId }) 
            .then(response => response.data)
            .catch(this.handleError);
    }

    checkIfPurchased(filmId) {
        return apiClient.get(`${this.apiUrl}/check/${filmId}`)  // Satın alma durumunu kontrol eden API çağrısı
            .then(response => response.data)
            .catch(this.handleError);
    }
}

export default new PurchaseService();
