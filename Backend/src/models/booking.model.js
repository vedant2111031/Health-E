import mongoose from "mongoose"
const bookingSchema=new mongoose.Schema({
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    ticketPrice:{
        type:Number,
        required:true
    },

    appointmentDate:{
        type:Date,
        required:true
    },

    status:{
        type:String,
        enum:["pending","approved","cancellled"],
        default:"pending"
    },

    isPaid:{
        type:Boolean,
        default:true
    }

},{timestamps:true})

export const Booking=mongoose.model("Booking",bookingSchema)