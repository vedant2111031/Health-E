import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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

    gender:{
        type:String,
        enum:["male","female","other"],
        required:true,
    },
    name:{
        type:String,
        required:true,
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

    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    
    }],

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

doctorSchema.methods.generatejwttoken=function(){
    return jwt.sign({
        id:this._id,
        email:this.email,
        role:this.role
    },
        process.env.JWT_SECRET,
    {
            expiresIn:process.env.JWT_EXPIRY
    })
}

doctorSchema.pre("findOneAndUpdate", async function(next) {
    const update = this.getUpdate();

   // Check if $set is present and if password is within $set
   if (update.$set && update.$set.password) {
    // Hash the password
    update.$set.password = await bcrypt.hash(update.$set.password, 10);
}

    next();
});

export const Doctor=mongoose.model("Doctor", doctorSchema)