import {User} from "../models/user.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"
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

export {updateUser, deleteUser, getSingleUser, getAllUser}