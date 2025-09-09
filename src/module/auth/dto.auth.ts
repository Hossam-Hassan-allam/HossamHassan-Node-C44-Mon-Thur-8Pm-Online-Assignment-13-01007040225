import { Gender } from "../../utils/common/enum/index";
export interface RegisterDto{
  fullName:string,
  email:string,
  password:string,
  gender:Gender,
  phoneNumber:string,
}

