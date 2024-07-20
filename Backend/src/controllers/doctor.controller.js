import {Doctor} from "../models/doctor.model.js"
import { User } from "../models/user.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"
import {Booking} from "../models/booking.model.js"
import mongoose from "mongoose"
import { uploadOnCloudinary } from "../utils/cloudinary.js"



const updateDoctor=asyncHandler(async(req,res)=>{
    const doctorId=req.params.id 

    
    if (!mongoose.Types.ObjectId.isValid(doctorId)) {
        throw new ApiError(400, "Invalid doctor ID format")
    }

    const doctorPresent=await Doctor.findById(doctorId)
    if(!doctorPresent){
        throw new ApiError(400, "Doctor not found")
    }

    req.body.qualifications = JSON.parse(req.body.qualifications);
    req.body.experiences = JSON.parse(req.body.experiences);
    req.body.timeSlots = JSON.parse(req.body.timeSlots);
    
    let photoLocalPath=null
    
    if(req.files && Array.isArray(req.files.photo) && req.files.photo.length>0){
        photoLocalPath=req.files.photo[0].path
    }
    if(photoLocalPath!=null){
        let p=await uploadOnCloudinary(photoLocalPath)
        req.body.photo=p.url
    }

    const doctor = await Doctor.findOneAndUpdate(
        { _id:doctorId },
        { $set: req.body },
        { new: true }
    ).select("-password");

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
    const doctor=await Doctor.findById(doctorId).populate("reviews").select("-password")

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
            $or:[{name:{$regex:query, $options:"i"}}, {specialization:{$regex:query, $options:"i"}}],
        }).select("-password")
    }
    else{
        doctor=await Doctor.find({isApproved:'approved'}).select("-password")
    }

    if(!doctor){
        throw new ApiError(400, "Doctor not found or no doctor exist")
    }

    res.status(200).json(new ApiResponse(200, doctor,"Geting doctor successfuly"))

})

const getDoctorProfile=asyncHandler(async(req,res)=>{
    const doctorId=req.userId

    if (!mongoose.Types.ObjectId.isValid(doctorId)) {
        throw new ApiError(400, "Invalid docotr ID format")
    }

    const doctor=await Doctor.findById(doctorId)

    if(!doctor){
        throw new ApiError(404, "Doctor not found")
    }

    const {password, ...rest}=doctor._doc 
    const appointments=await Booking.find({doctor:doctorId})

    res.status(200).json(new ApiResponse(200, {...rest,appointments}, "Profile info is getting"))
})




export {updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctor, getDoctorProfile}