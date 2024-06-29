import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const doctorSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number
    },
    photo:{
        type:String,
    },

    phone:{
        type:String
    },
    
    ticketPrice:{
        type:Number
    },
    role:{
        type:String
    },

    //field for doctor only

    specialization:{
        type:String,
    },
    qualifications:{
        type:Array
    },

    experiences:{
        type:Array
    },

    bio:{
        type:String,
        maxlength:100
        },
    
    about:{
        type:String
    },

    timeSlots:{
        type:Array
    },

    reviews:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    },

    averageRating:{
        type:Number,
        default:0
    },

    totalRating:{
        type:Number,
        default:0
    },

    isApproved:{
        type:String,
        enum:["pending", "approved", "cancelled"],
        default:"pending"
    },

    appointments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Appointment"
        }
    ]

})

doctorSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()

    this.password=await bcrypt.hash(this.password, 10)
    next()
})

export const Doctor=mongoose.model("Doctor", doctorSchema)