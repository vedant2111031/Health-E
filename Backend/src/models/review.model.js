import mongoose from "mongoose"
import {Doctor} from "../models/doctor.model.js"

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
        required:true
    },

    rating:{
        type:Number,
        required:true,
        min:0,
        max:5,
        default:0
    }
},{timestamps:true})

reviewSchema.pre(/^find/, function(next){
    this.populate({
        path:"user",
        select:"name photo"
    })

    next()
})

reviewSchema.statics.calcAverageRatings=async function(doctorId){
    const stats=await this.aggregate([{
        $match:{doctor:doctorId}
    },
    {
        $group:{
            _id:'$doctor',
            numOfRating:{$sum:1},
            avgRating:{$avg:'$rating'}
        }
    }
])
    await Doctor.findByIdAndUpdate(doctorId,{
        totalRating:stats[0].numOfRating,
        averageRating:stats[0].avgRating
    })
}

reviewSchema.post('save', function(){
    this.constructor.calcAverageRatings(this.doctor)
})

export const Review=mongoose.model("Review",reviewSchema)