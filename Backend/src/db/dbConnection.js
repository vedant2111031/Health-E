import mongoose from "mongoose"


const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.DATABASE_URI}/${process.env.DB_NAME}`)
        console.log(`database is connected at host ${connectionInstance.connection.host}`)
    }catch(err){
        console.log("Database connection error: ",err)
        process.exit(1)
    }
}

export default connectDB