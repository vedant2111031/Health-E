import { asyncHandler } from "../utils/asyncHandler.js"
import {Doctor} from "../models/doctor.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import bcrypt from "bcryptjs"


// you can also take user(which can be doctor or patient) directly and call like user.generatejwttoken()
const generatetoken=async(userId, userRole)=>{
    let jwttoken=null
    if(userRole=="patient"){
        const patient=await User.findById(userId)
        if(patient){
            jwttoken=await patient.generatejwttoken()
        }
    }
    else{
        const doctor=await Doctor.findById(userId)
        if(doctor)
            jwttoken=await doctor.generatejwttoken()
    }

    return {jwttoken}
}


const signUp= asyncHandler(async(req,res)=>{
    const {email, password, name, role, gender, phone}=req.body

    //validations
    if(
        [email , password, name, role, gender].some((field)=>
        field?.trim()==="" || field?.trim()===undefined)
    ){
        throw new ApiError(400,"All field is required")
    }

    // role checking
    let existedUser=null
    if(role=='doctor'){
        existedUser=await Doctor.findOne({email})
    }
    else if(role=='patient'){
        existedUser=await User.findOne({email})
    }
    else{
        throw new ApiError(400, "role is invalid")
    }

    //checking User already present 
    if(existedUser){
        throw new ApiError(400,"User already exist")
    }

    let photoLocalPath=null
    if(req.files && Array.isArray(req.files.photo) && req.files.photo.length>0){
        photoLocalPath=req.files.photo[0].path
    }

    //   pushing photo on clodinary 
    let photo=await uploadOnCloudinary(photoLocalPath)

    // making the db input 
    let user=null
    if(role=='doctor'){
        const createdUser=await Doctor.create({
            name,
            email,
            password,
            gender,
            role,
            photo:photo?.url || "",
            phone,
            
        })
        
        user=await Doctor.findById(createdUser._id).select("-password")
    }
    else{
        const createdUser=await User.create({
            name,
            email,
            password,
            gender,
            role,
            phone,
            photo:photo?.url || "",
        })

        user=await User.findById(createdUser._id).select("-password")
    }

    res.status(200).json(new ApiResponse(200, user ,"user registered successfull"))
})



const login=asyncHandler(async(req,res)=>{
    const {email, password}=req.body

    let user=null
    // checking user exits or not 
    const patient=await User.findOne({email})
    const doctor=await Doctor.findOne({email})

    if(patient){
        user=patient
    }
    if(doctor){
        user=doctor
    }

    if(!user){
        throw new ApiError(404, "user not found")
    }

    // compare password 
    const isPasswordMatch=await bcrypt.compare(password, user.password)

    if(!isPasswordMatch){
        throw new ApiError(400, "invalid credentions`")
    }


    // creating json web token 
    const {jwttoken}=await generatetoken(user._id, user.role)

    let {password: userPassword, role, appointments, ...rest}=user._doc
    const option={
        httpOnly:true,
        secure:false,
        // sameSite: 'None',
        path: '/',
    }

    res.status(200).
        cookie("token",jwttoken, option)
        .json(new ApiResponse(
            200,{...rest, role ,token:jwttoken} , "login successful"
        ))
})

export {signUp, login}