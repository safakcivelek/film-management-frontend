import BaseService from "./baseService";

export class DirectorService extends BaseService {
    constructor() {
        super('directors')
    }
}

export default new DirectorService();

