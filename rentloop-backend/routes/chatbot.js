const express = require("express");
const router = express.Router();

// SambaNova API configuration
const SAMBANOVA_API_KEY = process.env.SAMBANOVA_API_KEY;
const SAMBANOVA_API_URL = "https://api.sambanova.ai/v1/chat/completions";

// System context about RentLoop
const RENTLOOP_CONTEXT = `You are RentBot, a friendly AI assistant for RentLoop - a smart platform for renting and listing items easily. 
You help users with:
- Understanding how RentLoop works
- Listing items for rent
- Finding and requesting items
- Managing their rental requests
- Using features like search, calendar, reviews, etc.

Be helpful, friendly, and concise. Use emojis occasionally to be engaging. If asked about topics unrelated to RentLoop, politely redirect to rental-related help.`;

// POST /api/chatbot/query - Get AI response
router.post("/query", async (req, res) => {
    try {
        const { message, conversationHistory = [] } = req.body;

        if (!message || message.trim() === "") {
            return res.status(400).json({ error: "Message is required" });
        }

        if (!SAMBANOVA_API_KEY) {
            return res.status(500).json({
                error: "SambaNova API key not configured",
                fallback: "I'm currently offline. Please try again later! 🤖"
            });
        }

        // Build messages array with context
        const messages = [
            { role: "system", content: RENTLOOP_CONTEXT },
            ...conversationHistory.slice(-6), // Keep last 6 messages for context
            { role: "user", content: message }
        ];

        // Call SambaNova API
        const response = await fetch(SAMBANOVA_API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${SAMBANOVA_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "Meta-Llama-3.1-8B-Instruct",
                messages: messages,
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("SambaNova API Error:", errorData);
            return res.status(response.status).json({
                error: "AI service error",
                fallback: "Hmm, I'm having trouble thinking right now. Try asking again! 🧠"
            });
        }

        const data = await response.json();
        const aiReply = data.choices?.[0]?.message?.content || "I didn't quite catch that. Could you rephrase? 🤔";

        res.json({
            reply: aiReply,
            success: true
        });

    } catch (error) {
        console.error("Chatbot Error:", error);
        res.status(500).json({
            error: "Internal server error",
            fallback: "Oops! Something went wrong. Please try again! 😅"
        });
    }
});

module.exports = router;
