import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const Config=async(req,res)=>
{
  try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("~ Database connected successfully ~");
    
  }
  catch(err){
    console.log("error in connecting to server",err);
    process.exit(1);
  }
}
// Config();
export default Config;