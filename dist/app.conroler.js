"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectDB_1 = __importDefault(require("./DB/connectDB"));
const auth_controler_1 = __importDefault(require("./module/auth/auth.controler"));
function applcation(app, express) {
    (0, connectDB_1.default)();
    //barse data from row body
    app.use(express.json());
    app.use("/auth", auth_controler_1.default);
    app.use("/{*dummy}", (req, res, next) => {
        res.status(404).json({ mesage: "page not found", success: false });
    });
}
exports.default = applcation;
