import { Request, Response, NextFunction } from "express";
import {RegisterDto} from "./dto.auth";
import {conflict, notfound} from "../../utils/error/index"
import userRepostory from "../../DB/model/user/repostory.user";
import {Factory} from "./factory";
import sentEmail from "../../utils/email/index";
class AuthService{
  private userRepostory=new userRepostory()
  private factory=new Factory()
  private sentEmail=new sentEmail()
   constructor(){
   }
     register =async(req:Request,res:Response,next:NextFunction)=>{
    const registerDto:RegisterDto=req.body
    const userexcit=await this.userRepostory.findUserByEmail(registerDto.email)
    if(userexcit){
      throw new conflict("user alryde excit")
    }
const user=this.factory.redisterfactory(registerDto)
    await this.userRepostory.create(user)
    this.sentEmail.sentEmail({to:user.email,subject:`your otp is ${user.otp}`,text:"register success"})//send otp to user email and make api for conform it
    res.status(200).json({message:"sent otp to your email",success:true})
   }
}
export default new AuthService()
