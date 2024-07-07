import {Doctor} from "../models/doctor.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"
import mongoose from "mongoose"


const updateDoctor=asyncHandler(async(req,res)=>{
    const doctorId=req.params.id 

    
    if (!mongoose.Types.ObjectId.isValid(doctorId)) {
        throw new ApiError(400, "Invalid doctor ID format")
    }

    const doctor=await Doctor.findByIdAndUpdate(doctorId, {$set:req.body},{new:true}).select("-password")

    if(!doctor){
        throw new ApiError(400, "Doctor not found")
    }

    res.status(200).json(new ApiResponse(200, doctor,"Data Updated successfully"))

})


const deleteDoctor=asyncHandler(async(req,res)=>{
    const doctorId=req.params.id

    if (!mongoose.Types.ObjectId.isValid(doctorId)) {
        throw new ApiError(400, "Invalid doctor ID format")
    }

    const doctor=await Doctor.findByIdAndDelete(doctorId).select("-password")

    if(!doctor){
        throw new ApiError(400, "Doctor not found")
    }

    res.status(200).json(new ApiResponse(200, doctor,"Doctor deleted successfully"))

})


const getSingleDoctor=asyncHandler(async(req,res)=>{
    const doctorId=req.params.id

    if (!mongoose.Types.ObjectId.isValid(doctorId)) {
        throw new ApiError(400, "Invalid docotr ID format")
    }
    // console.log(doctorId)
    const doctor=await Doctor.findById(doctorId).select("-password")

    if(!doctor){
        throw new ApiError(400, "Doctor not found")
    }

    res.status(200).json(new ApiResponse(200, doctor,"Geting doctor successfuly"))

})

const getAllDoctor=asyncHandler(async(req,res)=>{

    const {query}=req.query

    let doctor

    if(query){
        doctor=await Doctor.find({
            isApproved:'approved',
            $or:[{name:{$regex:query, $options:"i"}}],
            $or:[{specialization:{$regex:query, $options:"i"}}]
        })
    }
    else{
        doctor=await Doctor.find().select("-password")
    }

    if(!doctor){
        throw new ApiError(400, "Doctor not found or no doctor exist")
    }

    res.status(200).json(new ApiResponse(200, doctor,"Geting doctor successfuly"))

})

export {updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctor}