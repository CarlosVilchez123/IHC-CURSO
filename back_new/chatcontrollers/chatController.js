import axios from "axios";

const GROQ_API_URL = "https://api.groq.io/v1/chat";
const API_KEY = "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"; // Reemplaza con tu clave de API


export const getChatResponse = async (req, res) => {
    console.log("Iniciando el controlador del chatbot...");

    const { userInput, apiKey } = req.body;

    // Validar la clave de API
    if (apiKey !== API_KEY) {
        console.error("Clave de API inválida:", apiKey);
        return res.status(403).json({ error: "Clave de API no válida" });
    }

    // Validar entrada del usuario
    if (!userInput) {
        console.error("Input del usuario vacío.");
        return res.status(400).json({ error: "El input del usuario es obligatorio" });
    }

    console.log("Entrada del usuario:", userInput);

    try {
        // Simulación de respuesta del chatbot
        const responses = {
            "hola": "¡Hola! ¿Cómo puedo ayudarte hoy?",
            "adiós": "¡Adiós! Espero que tengas un buen día.",
            "¿cómo estás?": "Estoy aquí para ayudarte. ¿Y tú?",
        };

        const botResponse = responses[userInput.toLowerCase()] || "Lo siento, no entiendo tu pregunta.";
        console.log("Respuesta generada:", botResponse);

        // Respuesta al cliente
        return res.status(200).json({
            question: userInput,
            response: botResponse,
        });
    } catch (error) {
        console.error("Error en el controlador del chatbot:", error);
        return res.status(500).json({ error: "Error interno en el servidor" });
    }
};
