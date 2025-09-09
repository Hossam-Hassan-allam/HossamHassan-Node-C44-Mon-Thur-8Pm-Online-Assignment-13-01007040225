"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_conroler_1 = __importDefault(require("./app.conroler"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: "./config/local.env" });
const app = (0, express_1.default)();
const port = process.env.PORT;
app.listen(port, () => {
    console.log("app is running in ", port);
});
(0, app_conroler_1.default)(app, express_1.default);
