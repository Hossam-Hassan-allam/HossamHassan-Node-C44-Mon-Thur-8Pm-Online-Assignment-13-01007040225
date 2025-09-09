import { Gender, Role } from "../../../utils/common/enum"

 class user{
     public fullName!:string
      public email!:string
      public password!:string
      public otp!:string
      public expireOtp!:Date
      public isVerified!:boolean
      public role!:Role.USER
      public gender!:Gender.MALE
      public cradantialupdateAt!:Date
      public phoneNumber!:string
}
export default user
