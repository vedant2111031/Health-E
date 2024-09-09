import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"
import axios from 'axios'

export const getNews =asyncHandler(async(req,res)=>{
    let page=1
    let pageSize=35
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${process.env.apiKey}&page=${page}&pageSize=${pageSize}`;

    
    await axios.get(url)
        .then((response)=>{
            // console.log(res )
            
           res.status(200).json(new ApiResponse(200,response.data, "success"))
        })
        .catch((error)=>{
         
            throw new ApiError(404, "erorr in new fetching url")
        })
   

})