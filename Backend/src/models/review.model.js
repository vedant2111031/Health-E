import mongoose from "mongoose"

const reviewSchema=new mongoose.Schema({
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    reviewText:{
        type:String,
        required:ture
    },

    rating:{
        type:Number,
        required:true,
        min:0,
        max:5,
        default:0
    }
},{timestamps:true})

export const Review=mongoose.model("Review",reviewSchema)