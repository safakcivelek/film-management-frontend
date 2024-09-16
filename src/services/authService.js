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
            .catch(this.handleError);
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
