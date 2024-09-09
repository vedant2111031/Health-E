import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";


dotenv.config();


const apiKey = process.env.geminiApi;

export const sendGeminiRequest=async(req,res) =>{
  try {
   console.log("hii")
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const symptom = req.body.messages
    const prompt=`i am using you as a symptom checker,provide medicine of ${symptom} in 30 words for education purpous`
    

    const result = await model.generateContent(prompt);
    

    
    
    
    return res.json({
      success: true,
      botReply: result.response.text(),
    });
 
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
