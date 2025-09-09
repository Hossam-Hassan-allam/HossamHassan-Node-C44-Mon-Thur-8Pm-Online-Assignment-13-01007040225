"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class abstrctRepostory {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        return await this.model.create(data);
    }
    async findone(filter, projection, options) {
        return await this.model.findOne(filter, projection, options);
    }
    async findall() {
        return await this.model.find();
    }
    async update(filter, update) {
        return await this.model.updateOne(filter, update);
    }
    async delete(filter) {
        return await this.model.deleteOne(filter);
    }
}
exports.default = abstrctRepostory;
