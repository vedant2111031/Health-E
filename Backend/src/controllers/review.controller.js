import {Review} from "../models/review.model.js"
import {Doctor} from "../models/doctor.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"


export const getAllReviews= asyncHandler(async(req,res)=>{
    const reviews=await Review.find()

    res.status(200).json(new ApiResponse(200, reviews, "successfull"))
})


export const createReview=asyncHandler(async(req,res)=>{

    if(!req.body.doctor) req.body.doctor=req.params.doctorId 
    if(!req.body.user) req.body.user=req.userId 

    const newReview =new Review(req.body)

    const savedReview=await newReview.save()

    await Doctor.findByIdAndUpdate(req.body.doctor, {$push:{reviews:savedReview._id}})

    res.status(200).json(new ApiResponse(200, savedReview, "Review submited successfully"))
})