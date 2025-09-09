import {model} from "mongoose";
import userSchema from "./user.schema";
import IUser from "../../../utils/common/interface/index";
const User=model<IUser>("User",userSchema)
export default User
