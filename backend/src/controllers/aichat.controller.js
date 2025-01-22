import Groq from 'groq-sdk';
import Message from '../models/message.model';
const groq = new Groq({apiKey:process.env.GROQ_API_KEY});


export async function getGroqChatCompletion(text) {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: text,
        },
      ],
      model: "llama-3.1-8b-instant",
    });
}

export const getResponse = async (req, res) => {
    try {
        const { text } = req.body;
        const chatCompletion = await getGroqChatCompletion(text);
        res.status(200).json({ message: chatCompletion.choices[0]?.message?.content || "" });
    } catch (error) {
        console.log("Error in sendResponse controller: ",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

