import {User} from "../models/user.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"
import {Booking} from "../models/booking.model.js"
import {Doctor} from "../models/doctor.model.js"
import mongoose from "mongoose"


const updateUser=asyncHandler(async(req,res)=>{
    const userId=req.params.id 

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new ApiError(400, "Invalid user ID format")
    }

    const user=await User.findByIdAndUpdate(userId, {$set:req.body},{new:true}).select("-password")

    if(!user){
        throw new ApiError(400, "User not found")
    }

    res.status(200).json(new ApiResponse(200, user,"Data Updated successfully"))

})


const deleteUser=asyncHandler(async(req,res)=>{
    const userId=req.params.id

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new ApiError(400, "Invalid user ID format")
    }


    const user=await User.findByIdAndDelete(userId).select("-password")

    if(!user){
        throw new ApiError(400 , "User not found")
    }

    res.status(200).json(new ApiResponse(200, user,"User deleted successfully"))

})


const getSingleUser=asyncHandler(async(req,res)=>{
    const userId=req.params.id

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new ApiError(400, "Invalid user ID format")
    }


    const user=await User.findById(userId).select("-password")

    if(!user){
        throw new ApiError(400, "User not found")
    }

    res.status(200).json(new ApiResponse(200, user,"Geting user successfuly"))

})

const getAllUser=asyncHandler(async(req,res)=>{

    const user=await User.find().select("-password")

    if(!user){
        throw new ApiError(400, "User not found or no user exist")
    }

    res.status(200).json(new ApiResponse(200, user,"Geting user successfuly"))

})

const getUserProfile=asyncHandler(async(req,res)=>{
    const userId=req.userId

    const user=await User.findById(userId)

    if(!user){
        throw new ApiError(404, "User not found")
    }

    const {password, ...rest}=user._doc 

    res.status(200).json(new ApiResponse(200, rest, "Profile info is getting"))
})

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


const getMyAppointments=asyncHandler(async(req,res)=>{
    // retriving appointment from the specific user 
    const bookings=await Booking.find({user:req.userId})
    

    if(Object.entries(bookings).length === 0){
        res.status(200).json(new ApiResponse(200, [], "No appintments present "))
        return 
    }
    
    // extract doctorId from booking 
    const doctorIds=bookings.map(el=>el.doctor.id)
    
    // retrieve doctors using doctor ids 
    const doctors= await Doctor.find({_id:{$in:doctorIds}}).select(-password)

    res.status(200).json(new ApiResponse(200, doctors, "Appointments are getting"))

})

export {updateUser, deleteUser, getSingleUser, getAllUser, getMyAppointments, getUserProfile}