import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";


dotenv.config();


const apiKey = process.env.geminiApi;

export const sendGeminiRequest=async(req,res) =>{
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const symptom = req.body.messages
    const prompt=`for educational purpouse provide information about ${symptom} in 40 words`
    

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
