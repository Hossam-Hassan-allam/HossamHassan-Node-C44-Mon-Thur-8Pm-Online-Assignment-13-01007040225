"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_1 = require("../../../utils/common/enum/index");
const userSchema = new mongoose_1.Schema({
    fname: { type: String, required: true, trim: true, minlength: 3, maxlength: 20 },
    lname: { type: String, required: function () { return this.phoneNumber ? false : true; }, trim: true, minlength: 3, maxlength: 20 },
    email: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: function () { return this.email ? false : true; }, trim: true },
    password: { type: String, required: true, trim: true },
    otp: { type: String },
    expireOtp: { type: Date },
    isVerified: { type: Boolean },
    role: { type: String, enum: index_1.Role, default: index_1.Role.USER },
    gender: { type: String, enum: index_1.Gender, default: index_1.Gender.MALE },
    cradantialupdateAt: { type: Date },
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });
userSchema.virtual("fullName").get(function () {
    return `${this.fname} ${this.lname}`;
}).set(function (fullName) {
    this.fname = fullName.split(" ")[0];
    this.lname = fullName.split(" ")[1];
});
exports.default = userSchema;
