import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },

    phone:{
        type:String
    },

    role:{
        type:String,
        enum:["patient","admin"],
        default:"patient"
    },

    gender:{
        type:String,
        enum:["male","female","other"]
    },

    bloodType:{
        type:String
    },
    
    photo:{
        type:String
    },
    
    appointments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Appointment"
        }]
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()

    this.password=await bcrypt.hash(this.password, 10)
    next()
})

export const User=mongoose.model("User",userSchema)