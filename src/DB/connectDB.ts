import mongoose from "mongoose";
const connectDB=async()=>{
 await mongoose.connect(process.env.URL_DB as string).then(()=>console.log("connected to mongoDB"))
 .catch((error)=>console.log(error))
}
export default connectDB

