import jwt from "jsonwebtoken"
import {Doctor} from "../models/doctor.model.js"
import {User} from "../models/user.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"

export const authenticate= asyncHandler(async(req,res, next)=>{

    const authToken=req.headers.authorization 
    if(authToken==undefined || !authToken || !authToken.startsWith("Bearer")){
        throw new ApiError(401, "No token , authorization denied")
    }

    const token=authToken.split(" ")[1]
    const decoded=jwt.verify(token, process.env.JWT_SECRET)
    
    req.userId=decoded.id
    req.role=decoded.role

    next()
})

export const restrict= (roles)=>asyncHandler(async(req,res,next)=>{
    const userId=req.userId

    let user;
    const patient=await User.findById(userId)
    const doctor=await Doctor.findById(userId)
    if(patient){
        user=patient
    }
    else{
    user=doctor
    }

    if(!roles.includes(user.role)){
        throw new ApiError(401, "You are not authorized")
    }

    next()
})