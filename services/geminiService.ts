import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `You are "Mewar Guide", a knowledgeable, polite, and royal AI travel assistant for Udaipur, Rajasthan. 
Your tone should be welcoming, slightly formal but warm, reflecting the Rajasthani hospitality (Padharo Mhare Desh).
- Provide prices strictly in Indian Rupees (₹).
- Recommend local hidden gems as well as popular spots.
- If asked about itineraries, suggest logical routes based on geography (e.g., Old City spots together).
- Keep answers concise but informative (under 150 words unless asked for details).
- Format lists clearly using bullet points.
- If the user asks about something outside of Udaipur or travel, politely steer them back to Udaipur.
`;

export const getChatResponseStream = async (
  history: { role: 'user' | 'model'; text: string }[],
  message: string
): Promise<AsyncIterable<GenerateContentResponse>> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const resultStream = await chat.sendMessageStream({ message });
    return resultStream;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
