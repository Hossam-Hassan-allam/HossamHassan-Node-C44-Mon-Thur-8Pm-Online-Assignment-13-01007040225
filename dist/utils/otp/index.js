"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtp = generateOtp;
exports.generateExpireOtp = generateExpireOtp;
function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000);
}
function generateExpireOtp() {
    return new Date(Date.now() + 10 * 60 * 1000);
}
