import httpClient from "./httpClient";
import { toast } from 'react-toastify';

class BaseService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    handleError(error) {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    toast.error("Yetkisiz erişim. Lütfen giriş yapın.");
                    break;
                case 500:
                    toast.error("Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
                    break;
                default:
                    toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
            }
        } else if (error.request) {
            toast.error("Sunucudan yanıt alınamıyor. Lütfen bağlantınızı kontrol edin.");
        } else {
            toast.error(`Bir hata oluştu: ${error.message}`);
        }
        return Promise.reject(error);
    }

    getAll() {
        return httpClient.get(this.apiUrl).then(response => response.data).catch(this.handleError);
    }

    getById(id) {
        return httpClient.get(`${this.apiUrl}/${id}`).then(response => response.data).catch(this.handleError);
    }

    add(request) {
        return httpClient.post(this.apiUrl, request).then(response => response.data).catch(this.handleError);
    }

    update(request) {
        return httpClient.put(this.apiUrl, request).then(response => response.data).catch(this.handleError);
    }

    delete(id) {
        return httpClient.delete(`${this.apiUrl}/${id}`).then(response => response.data).catch(this.handleError);
    }
}

export default BaseService;