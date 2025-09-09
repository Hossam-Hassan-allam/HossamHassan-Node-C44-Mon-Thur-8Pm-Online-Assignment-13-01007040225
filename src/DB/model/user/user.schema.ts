import {Schema} from "mongoose";
import IUser from "../../../utils/common/interface/index";
import { Gender, Role } from "../../../utils/common/enum/index";
const userSchema=new Schema<IUser>({
    fname:{type:String,required:true,trim:true,minlength:3,maxlength:20},
    lname:{type:String,required:function(){return this.phoneNumber?false:true},trim:true,minlength:3,maxlength:20},
    email:{type:String,required:true,trim:true},
    phoneNumber:{type:String,required:function(){return this.email?false:true},trim:true},
    password:{type:String,required:true,trim:true},
    otp:{type:String},
    expireOtp:{type:Date},
    isVerified:{type:Boolean},
    role:{type:String,enum:Role,default:Role.USER},
    gender:{type:String,enum:Gender,default:Gender.MALE},
    cradantialupdateAt:{type:Date},
},{timestamps:true,toJSON:{virtuals:true},toObject:{virtuals:true}})
userSchema.virtual("fullName").get(function(){
    return `${this.fname} ${this.lname}`
}).set(function(fullName){
    this.fname=fullName.split(" ")[0]
    this.lname=fullName.split(" ")[1]
})
export default userSchema
