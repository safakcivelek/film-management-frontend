import axios from "axios";
import { BASE_API_URL } from "../environment/environment";

const httpClient = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default httpClient;