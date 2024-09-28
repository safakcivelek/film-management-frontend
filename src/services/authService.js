import apiClient from "./apiClient";
import BaseService from "./baseService";
//import httpClient from "./httpClient";

class AuthService extends BaseService {
    constructor() {
        super('auth');
    }

    login(email, password) {
        return apiClient.post(`${this.apiUrl}/login`, { email, password })
            .then(response => response.data)
            .catch((error) => {
                // Eğer 401 hatası varsa, baseService'deki hatayı engelle
                if (error.response && error.response.status === 401) {
                    // Bu durumda sadece Login bileşeninden toast mesajı gösterilir
                    throw error; // Login bileşeni tarafından işlenmesi için hatayı fırlat
                }
                // Diğer hataları baseService handleError ile yönet
                return this.handleError(error);
            });
    }

    // Register metodu
    register(firstName, lastName, email, password, confirmPassword) {
        const data = { firstName, lastName, email, password, confirmPassword };
        return apiClient.post(`${this.apiUrl}/register`, data)
            .then(response => response.data)
            .catch(this.handleError);
    }  
}

export default new AuthService();
