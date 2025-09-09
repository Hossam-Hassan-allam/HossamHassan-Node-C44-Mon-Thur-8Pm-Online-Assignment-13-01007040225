"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
const enum_1 = require("../../../utils/common/enum");
const hash_1 = require("../../../utils/hash");
const otp_1 = require("../../../utils/otp");
const index_1 = __importDefault(require("../entity/index"));
class Factory {
    redisterfactory(data) {
        const User = new index_1.default();
        User.fullName = data.fullName;
        User.email = data.email;
        User.password = (0, hash_1.hashPassword)(data.password);
        User.phoneNumber = (0, hash_1.hashphoneNumber)(data.phoneNumber);
        User.gender = data.gender;
        User.role = enum_1.Role.USER;
        User.expireOtp = (0, otp_1.generateExpireOtp)();
        User.otp = (0, otp_1.generateOtp)();
        User.cradantialupdateAt = new Date();
        return User;
    }
}
exports.Factory = Factory;
