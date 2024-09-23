import FindOneEmployeeResponse from "./FindOneEmployeeResponse.js";

export default class FindAllEmployeeResponse {
    constructor (dataCollection) {
        this.items = dataCollection.map(data => new FindOneEmployeeResponse(data));
        this.count = dataCollection.length;
    }
}