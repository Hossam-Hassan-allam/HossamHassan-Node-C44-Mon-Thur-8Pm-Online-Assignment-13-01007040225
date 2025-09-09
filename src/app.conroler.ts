import { Router } from "express";
import { type Express } from "express";
import connectDB from "./DB/connectDB";
import authControler from "./module/auth/auth.controler";
function applcation(app:Express,express:any){
connectDB()
//barse data from row body
app.use(express.json())
app.use("/auth",authControler)
app.use("/{*dummy}",(req,res,next)=>{
    res.status(404).json({mesage:"page not found",success:false})
})
}
export default applcation
