"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;
exports.hashphoneNumber = hashphoneNumber;
exports.comparephoneNumber = comparephoneNumber;
const bcrypt_1 = __importDefault(require("bcrypt"));
function hashPassword(password) {
    return bcrypt_1.default.hashSync(password, 10);
}
function comparePassword(password, hash) {
    return bcrypt_1.default.compareSync(password, hash);
}
function hashphoneNumber(phoneNumber) {
    return bcrypt_1.default.hashSync(phoneNumber, 10);
}
function comparephoneNumber(phoneNumber, hash) {
    return bcrypt_1.default.compareSync(phoneNumber, hash);
}
