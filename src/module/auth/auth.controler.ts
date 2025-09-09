import { Router } from "express";
import AuthService from "./auth.serveice";
const router=Router()
router.post("/register",AuthService.register)
export default router