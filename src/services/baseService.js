import apiClient from "./apiClient";
//import httpClient from "./httpClient";
import { toast } from 'react-toastify';

class BaseService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    handleError(error) {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    toast.error("Yetkisiz erişim. Lütfen giriş yapın.(baseService)");
                    break;
                case 500:
                    toast.error("Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin.(baseService)");
                    break;
                default:
                    toast.error("Bir hata oluştu. Lütfen tekrar deneyin.(baseService)");
            }
        } else if (error.request) {
            toast.error("Sunucudan yanıt alınamıyor. Lütfen bağlantınızı kontrol edin.(baseService)");
        } else {
            toast.error(`Bir hata oluştu(baseService): ${error.message}`);          
        }
        return Promise.reject(error);
    }

    getAll(start, limit) {
        const params = { start, limit }
        return apiClient.get(this.apiUrl, { params }).then(response => response.data).catch(this.handleError);
    }

    getById(id) {
        return apiClient.get(`${this.apiUrl}/${id}`).then(response => response.data).catch(this.handleError);
    }

    add(request) {
        return apiClient.post(this.apiUrl, request).then(response => response.data).catch(this.handleError);
    }

    update(request) {
        return apiClient.put(this.apiUrl, request).then(response => response.data).catch(this.handleError);
    }

    delete(id) {
        return apiClient.delete(`${this.apiUrl}/${id}`).then(response => response.data).catch(this.handleError);
    }
}

export default BaseService;