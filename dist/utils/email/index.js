"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
class sentEmail {
    async sentEmail({ to, subject, text }) {
        console.log("Email:", process.env.EMAIL_USER);
        console.log("Password:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");
        const transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        await transporter.sendMail({
            from: `sochail-app <${process.env.EMAIL_USER}>`,
            to: to,
            subject: subject,
            text: text
        });
    }
}
exports.default = sentEmail;
