import React, { useState, useRef, useEffect } from "react";
import "./ChatBot.css";

const ChatBot = ({ robotName = "Loopy" }) => {
  const [chatVisible, setChatVisible] = useState(true); // Always visible when opened
  const [messages, setMessages] = useState([
    { text: `Hey there! I'm ${robotName} 🤖, your AI rental assistant. Ask me anything!`, sender: "bot", timestamp: new Date() }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Call AI API
  const callAI = async (message) => {
    try {
      // Build conversation history for context
      const conversationHistory = messages
        .slice(-6) // Last 6 messages
        .map(msg => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.text
        }));

      const response = await fetch("http://localhost:5000/api/chatbot/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message,
          conversationHistory
        })
      });

      const data = await response.json();

      if (data.success && data.reply) {
        return data.reply;
      } else if (data.fallback) {
        return data.fallback;
      } else {
        return "Hmm, I'm having trouble thinking right now. Try asking again! 🧠";
      }
    } catch (error) {
      console.error("AI Error:", error);
      return "Oops! I couldn't connect to my brain. Please check if the server is running! 😅";
    }
  };

  const handleSend = async (inputText = userInput) => {
    if (!inputText.trim()) return;

    const userMsg = { text: inputText, sender: "user", timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setUserInput("");
    setIsBotTyping(true);

    // Get AI response
    const aiReply = await callAI(inputText);

    setTimeout(() => {
      const botReply = {
        text: aiReply,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botReply]);
      setIsBotTyping(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice recognition not supported in this browser.");
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = (event) => {
      const speechText = event.results[0][0].transcript;
      handleSend(speechText);
    };
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chat-window">
        <div className="chat-header">
          <i className="fas fa-robot"></i> {robotName} - Your AI Assistant
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-bubble ${msg.sender}`}>
              <div className="chat-text">{msg.text}</div>
              <div className="chat-time">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          {isBotTyping && (
            <div className="chat-bubble bot typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            style={{ color: "white", backgroundColor: "#2c1f4a", border: "1px solid #6a0dad" }}
          />
          <button onClick={() => handleSend()}>➤</button>
          <button
            onClick={handleVoiceInput}
            title="Voice Input"
            style={{
              marginLeft: "8px",
              background: "#6f42c1",
              color: "white",
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              fontSize: "18px",
              cursor: "pointer"
            }}
          >
            🎤
          </button>
        </div>

        <div className="chat-footer" style={{ color: "#fff", textAlign: "center", padding: "10px", fontSize: "13px" }}>
          💡 Powered by AI - Ask anything about RentLoop! 🚀
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
