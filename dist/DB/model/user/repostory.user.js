"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repostory_1 = __importDefault(require("../../repostory"));
const user_model_1 = __importDefault(require("./user.model"));
class userRepostory extends repostory_1.default {
    constructor() {
        super(user_model_1.default);
    }
    async findUserByEmail(email) {
        return await this.model.findOne({ email });
    }
    async findUserByPhone(phone) {
        return await this.model.findOne({ phone });
    }
    async findUserById(id) {
        return await this.model.findById(id);
    }
    async findUserByFullName(fullName) {
        return await this.model.findOne({ fullName });
    }
}
exports.default = userRepostory;
