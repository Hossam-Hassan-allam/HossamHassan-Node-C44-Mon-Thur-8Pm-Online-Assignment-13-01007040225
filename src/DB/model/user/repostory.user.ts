import abstrctRepostory from "../../repostory";
import IUser from "../../../utils/common/interface/index";
import User from "./user.model";
class userRepostory extends abstrctRepostory<IUser>{
    constructor(){
        super(User)
    }
    async findUserByEmail(email:string){
        return await this.model.findOne({email})
    }
    async findUserByPhone(phone:string){
        return await this.model.findOne({phone})
    }
    async findUserById(id:string){
        return await this.model.findById(id)
    }
    async findUserByFullName(fullName:string){
        return await this.model.findOne({fullName})
    }
}
export default userRepostory