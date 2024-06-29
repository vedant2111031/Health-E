import { asyncHandler } from "../utils/asyncHandler.js"
import {Doctor} from "../models/doctor.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"
import {User} from "../models/user.model.js"


const signUp= asyncHandler(async(req,res)=>{
    const {email, password, name, role, gender, photo, phone}=req.body

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


    // making the db input 
    let user=null

    if(role=='doctor'){
        const createdUser=await Doctor.create({
            name,
            email,
            password,
            gender,
            role,
            photo,
            phone
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
            photo
        })

        user=await User.findById(createdUser._id).select("-password")
    }

    res.status(200).json(new ApiResponse(200, user ,"user created successfull"))
})



const login=asyncHandler(async(req,res)=>{

})

export {signUp, login}