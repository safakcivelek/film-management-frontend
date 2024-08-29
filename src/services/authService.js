import BaseService from "./baseService";
import httpClient from "./httpClient";

class AuthService extends BaseService {
    constructor() {
        super('auth');
    }

    login(email, password) {
        return httpClient.post(`${this.apiUrl}/login`, { email, password })
            .then(response => response.data)
            .catch(this.handleError);
    }

    testAuthorize() {
        return httpClient.get(`${this.apiUrl}/test-authorize`)
            .then(response => response.data)
            .catch(this.handleError);
    }
}

export default new AuthService();
