import { Gender, Role } from "../../../utils/common/enum/index";
interface IUser{
  fname?:string,
  lname?:string,
  email:string,
  password:string,
  otp?:string,
  expireOtp?:Date,
  isVerified?:boolean,
  role:Role,
  gender:Gender,
  cradantialupdateAt?:Date,
  phoneNumber:string,
}
export default IUser
