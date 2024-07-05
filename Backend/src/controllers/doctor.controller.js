import {Doctor} from "../models/doctor.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"
import mongoose from "mongoose"


const updateDoctor=asyncHandler(async(req,res)=>{
    const doctorId=req.params.id 

    
    if (!mongoose.Types.ObjectId.isValid(doctorId)) {
        throw new ApiError(400, "Invalid user ID format")
    }

    const doctor=await Doctor.findByIdAndUpdate(doctorId, {$set:req.body},{new:true}).select("-password")

    if(!doctor){
        throw new ApiError(400, "User not found")
    }

    res.status(200).json(new ApiResponse(200, doctor,"Data Updated successfully"))

})


const deleteDoctor=asyncHandler(async(req,res)=>{
    const doctorId=req.params.id

    if (!mongoose.Types.ObjectId.isValid(doctorId)) {
        throw new ApiError(400, "Invalid user ID format")
    }

    const doctor=await Doctor.findByIdAndDelete(doctorId).select("-password")

    if(!doctor){
        throw new ApiError(400, "User not found")
    }

    res.status(200).json(new ApiResponse(200, doctor,"User deleted successfully"))

})


const getSingleDoctor=asyncHandler(async(req,res)=>{
    const doctorId=req.params.id

    if (!mongoose.Types.ObjectId.isValid(doctorId)) {
        throw new ApiError(400, "Invalid user ID format")
    }
    // console.log(doctorId)
    const doctor=await Doctor.findById(doctorId).select("-password")

    if(!doctor){
        throw new ApiError(400, "User not found")
    }

    res.status(200).json(new ApiResponse(200, doctor,"Geting user successfuly"))

})

const getAllDoctor=asyncHandler(async(req,res)=>{

    const doctor=await Doctor.find().select("-password")

    if(!doctor){
        throw new ApiError(400, "User not found or no user exist")
    }

    res.status(200).json(new ApiResponse(200, doctor,"Geting user successfuly"))

})

export {updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctor}