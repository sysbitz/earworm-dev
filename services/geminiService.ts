import { GoogleGenAI, Type } from "@google/genai";
import { SongConcept } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const songSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "A catchy title for the song." },
    genre: { type: Type.STRING, description: "The musical genre." },
    mood: { type: Type.STRING, description: "The emotional atmosphere of the track." },
    tempo: { type: Type.STRING, description: "BPM and feel (e.g., '120 BPM, Driving')." },
    lyrics: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A short verse and chorus. Minimum 4 lines."
    },
    chords: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Chord progression for the chorus."
    },
    description: { type: Type.STRING, description: "A short marketing blurb for the song." }
  },
  required: ["title", "genre", "mood", "tempo", "lyrics", "chords", "description"]
};

export const generateSongConcept = async (prompt: string): Promise<SongConcept> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Create a unique song concept based on this user idea: "${prompt}". Make it sound modern, professional, and catchy (an 'earworm').`,
      config: {
        responseMimeType: "application/json",
        responseSchema: songSchema,
        thinkingConfig: { thinkingBudget: 0 } // Speed over deep reasoning for this demo
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as SongConcept;
    }
    throw new Error("No content generated");
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback mock data if API fails or key is missing
    return {
      title: "Neon Dreams (Simulation)",
      genre: "Synthwave",
      mood: "Nostalgic",
      tempo: "105 BPM",
      lyrics: ["API Error or Key Missing", "Check your configuration", "But the music plays on", "In the silence of code"],
      chords: ["Am", "F", "C", "G"],
      description: "An fallback track generated because the AI connection was interrupted."
    };
  }
};