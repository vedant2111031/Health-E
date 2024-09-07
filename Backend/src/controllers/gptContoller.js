import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export const handleGPTRequest = async (req, res) => {

    
  const { message } = req.body;
 

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // Change the model if needed
        messages: [{ role: 'user', content: message }],
      }),
    });
    console.log(response)
    
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error ? data.error.message : 'Failed to fetch from OpenAI');
    }

    res.json({
      success: true,
      botReply: data.choices[0].message.content,
    });
  } catch (error) {
    
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Failed to connect to OpenAI API' });
  }
};
