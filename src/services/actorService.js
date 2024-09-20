import BaseService from "./baseService";

export class ActorService extends BaseService {
    constructor() {
        super('actors')
    }
}

export default new ActorService();

