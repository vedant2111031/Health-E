
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();


const apiKey = process.env.geminiApi;

export const sendGeminiRequest=async(req,res) =>{
  try {
   
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const symptom = req.body.messages
    const prompt=`i am using you as a symptom checker,what it could be ${symptom}`
    // console.log(prompt)

    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    
    
    
    return res.json({
      success: true,
      botReply: result.response.text(),
    });
 
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
