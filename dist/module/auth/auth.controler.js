"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_serveice_1 = __importDefault(require("./auth.serveice"));
const router = (0, express_1.Router)();
router.post("/register", auth_serveice_1.default.register);
exports.default = router;
