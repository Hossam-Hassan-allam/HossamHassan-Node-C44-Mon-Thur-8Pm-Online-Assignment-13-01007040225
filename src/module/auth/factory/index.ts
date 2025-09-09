import { Gender,Role } from "../../../utils/common/enum";
import { hashPassword,hashphoneNumber } from "../../../utils/hash";
import { generateExpireOtp,generateOtp } from "../../../utils/otp";
import { RegisterDto } from "../dto.auth";
import user from "../entity/index";

export class Factory{
    redisterfactory(data:RegisterDto){
        const User=new user()
        User.fullName=data.fullName
        User.email=data.email
        User.password=hashPassword(data.password)
        User.phoneNumber=hashphoneNumber(data.phoneNumber)
        User.gender=data.gender as Gender.MALE
        User.role=Role.USER
        User.expireOtp=generateExpireOtp()
        User.otp=generateOtp() as unknown as string
        User.cradantialupdateAt=new Date()
        return User
    }
}