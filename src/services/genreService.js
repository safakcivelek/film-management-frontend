import BaseService from "./baseService";

export class GenreService extends BaseService {
    constructor() {
        super('genres')
    }
}

export default new GenreService();

