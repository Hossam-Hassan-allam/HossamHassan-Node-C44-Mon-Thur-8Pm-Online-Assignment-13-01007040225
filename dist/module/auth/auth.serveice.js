"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../utils/error/index");
const repostory_user_1 = __importDefault(require("../../DB/model/user/repostory.user"));
const factory_1 = require("./factory");
const index_2 = __importDefault(require("../../utils/email/index"));
class AuthService {
    constructor() {
        this.userRepostory = new repostory_user_1.default();
        this.factory = new factory_1.Factory();
        this.sentEmail = new index_2.default();
        this.register = async (req, res, next) => {
            const registerDto = req.body;
            const userexcit = await this.userRepostory.findUserByEmail(registerDto.email);
            if (userexcit) {
                throw new index_1.conflict("user alryde excit");
            }
            const user = this.factory.redisterfactory(registerDto);
            await this.userRepostory.create(user);
            this.sentEmail.sentEmail({ to: user.email, subject: `your otp is ${user.otp}`, text: "register success" }); //send otp to user email and make api for conform it
            res.status(200).json({ message: "sent otp to your email", success: true });
        };
    }
}
exports.default = new AuthService();
