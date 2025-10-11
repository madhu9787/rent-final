// import React, { useState } from "react";
// import "./ChatBot.css";

// const predefinedReplies = {
//   "what is rentloop": "RentLoop is a smart platform for renting and listing items easily!",
//   "how to list item": "Go to the 'Item Listing' section and fill in the details of your item.",
//   "how to become owner": "Sign up as an owner in your profile and start listing items.",
//   "how to search": "Use our smart search & filter module to find what you need.",
//   "how to request": "Just click 'Request' on the item you like and wait for approval.",
//   "what is ai support": "AI Support helps you 24/7 with smart and quick answers!",
//   "what is your project": "Our project is a full-stack rental platform with AI chatbot, smart quiz modules, and a jungle-themed UI called Talgo Arena!"
// };

// const ChatBot = () => {
//   const [chatVisible, setChatVisible] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       text: "Hey there, curious mind! Ready to chat with RentBot? 🤖",
//       sender: "bot",
//       timestamp: new Date()
//     }
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const [isBotTyping, setIsBotTyping] = useState(false);

//   const handleSend = () => {
//     if (!userInput.trim()) return;

//     const userMsg = {
//       text: userInput,
//       sender: "user",
//       timestamp: new Date()
//     };

//     setMessages((prev) => [...prev, userMsg]);
//     setUserInput("");
//     setIsBotTyping(true);

//     setTimeout(() => {
//       const lowerInput = userInput.toLowerCase();
//       let replyText = "Hmm, interesting! I’ll learn more about that soon. 🤔";

//       for (const key in predefinedReplies) {
//         if (lowerInput.includes(key)) {
//           replyText = predefinedReplies[key];
//           break;
//         }
//       }

//       const botReply = {
//         text: replyText,
//         sender: "bot",
//         timestamp: new Date()
//       };

//       setMessages((prev) => [...prev, botReply]);
//       setIsBotTyping(false);
//     }, 1200);
//   };

//   return (
//     <div className="chatbot-wrapper">
//       {!chatVisible && (
//         <div className="bot-entry-screen">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
//             alt="Bot"
//             className="bot-image"
//           />
//           <h2 className="bot-welcome">Hey, I’m RentBot 👋</h2>
//           <p className="bot-tagline">Your 24/7 rental guide is here!</p>
//           <button onClick={() => setChatVisible(true)} className="start-chat-btn">
//             💬 Chat Now
//           </button>
//         </div>
//       )}

//       {chatVisible && (
//         <div className="chat-window">
//           <div className="chat-header">🤖 RentBot - Always On</div>
//           <div className="chat-messages">
//             {messages.map((msg, index) => (
//               <div key={index} className={`chat-bubble ${msg.sender}`}>
//                 <div className="chat-text">{msg.text}</div>
//                 <div className="chat-time">
//                   {msg.timestamp.toLocaleTimeString([], {
//                     hour: "2-digit",
//                     minute: "2-digit"
//                   })}
//                 </div>
//               </div>
//             ))}
//             {isBotTyping && (
//               <div className="chat-bubble bot typing">
//                 <span className="dot"></span>
//                 <span className="dot"></span>
//                 <span className="dot"></span>
//               </div>
//             )}
//           </div>
//           <div className="chat-input-area">
//             <input
//               type="text"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               placeholder="Ask me anything..."
//             />
//             <button onClick={handleSend}>➤</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;
// import React, { useState } from "react";
// import "./ChatBot.css";

// const predefinedReplies = {
//   "what is rentloop": "RentLoop is a smart platform for renting and listing items easily!",
//   "how to list item": "Go to the 'Item Listing' section and fill in the details of your item.",
//   "how to become owner": "Sign up as an owner in your profile and start listing items.",
//   "how to search": "Use our smart search & filter module to find what you need.",
//   "how to request": "Just click 'Request' on the item you like and wait for approval.",
//   "what is ai support": "AI Support helps you 24/7 with smart and quick answers!",
//   "hi": "Hey there! I'm RentBot 🤖, your rental buddy. Ask me anything!",
//   "hello": "Hello! How can I help you today? 😊",
//   "why should i chat with you": "Because I'm smart, fast, and never sleep! 😎",
//   "who are you": "I'm RentBot, your 24/7 smart rental assistant!",
//   "what can you do": "I can help you list, find, and rent items easily!",
//   "thank you": "You're always welcome! 💜"
// };

// const quickQuestions = [
//   "What is RentLoop?",
//   "How to list item?",
//   "How to become owner?",
//   "How to search?",
//   "What is AI support?"
// ];

// const ChatBot = () => {
//   const [chatVisible, setChatVisible] = useState(false);
//   const [messages, setMessages] = useState([
//     { text: "Hey there, curious mind! Ready to chat with RentBot? 🤖", sender: "bot", timestamp: new Date() }
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const [isBotTyping, setIsBotTyping] = useState(false);

//   const handleSend = (inputText = userInput) => {
//     if (!inputText.trim()) return;

//     const userMsg = { text: inputText, sender: "user", timestamp: new Date() };
//     setMessages((prev) => [...prev, userMsg]);
//     setUserInput("");
//     setIsBotTyping(true);

//     setTimeout(() => {
//       const lowerInput = inputText.toLowerCase();
//       let replyText = "Hmm, I didn’t get that yet... but I’m learning every day! 🧠";

//       for (const key in predefinedReplies) {
//         if (lowerInput.includes(key)) {
//           replyText = predefinedReplies[key];
//           break;
//         }
//       }

//       const botReply = {
//         text: replyText,
//         sender: "bot",
//         timestamp: new Date()
//       };

//       setMessages((prev) => [...prev, botReply]);
//       setIsBotTyping(false);
//     }, 1000);
//   };

//   return (
//     <div className="chatbot-wrapper">
//       {!chatVisible && (
//         <div className="bot-entry-screen">
//      <img
//             src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
//             alt="Bot"
//             className="bot-image"
//          />

          
//           <h2 className="bot-welcome">Hey, I’m RentBot 👋</h2>
//           <p className="bot-tagline">Your 24/7 rental guide is here!</p>
//           <button onClick={() => setChatVisible(true)} className="start-chat-btn">💬 Chat Now</button>
//         </div>
//       )}

//       {chatVisible && (
//         <div className="chat-window">
//           <div className="chat-header">🤖 RentBot - Always On</div>

//           <div className="quick-questions">
//             {quickQuestions.map((q, idx) => (
//               <button key={idx} onClick={() => handleSend(q)}>{q}</button>
//             ))}
//           </div>

//           <div className="chat-messages">
//             {messages.map((msg, index) => (
//               <div key={index} className={`chat-bubble ${msg.sender}`}>
//                 <div className="chat-text">{msg.text}</div>
//                 <div className="chat-time">
//                   {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </div>
//               </div>
//             ))}
//             {isBotTyping && (
//               <div className="chat-bubble bot typing">
//                 <span className="dot"></span>
//                 <span className="dot"></span>
//                 <span className="dot"></span>
//               </div>
//             )}
//           </div>

//           <div className="chat-input-area">
//             <input
//               type="text"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               placeholder="Ask me anything..."
//               style={{ color: "black" }} // ✅ Text now visible
//             />
//             <button onClick={() => handleSend()}>➤</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;
// import React, { useState } from "react";
// import "./ChatBot.css";

// const predefinedReplies = {
//   "what is rentloop": "RentLoop is a smart platform for renting and listing items easily! 💜",
//   "how to list item": "Go to the 'Item Listing' section and fill in the details of your item. 📝",
//   "how to become owner": "Sign up as an owner in your profile and start listing items. 🏠",
//   "how to search": "Use our smart search & filter module to find what you need. 🔍",
//   "how to request": "Just click 'Request' on the item you like and wait for approval. ✅",
//   "what is ai support": "AI Support helps you 24/7 with smart and quick answers! 🤖",
//   "hi": "Hey there! I'm RentBot 🤖, your rental buddy. Ask me anything!",
//   "hello": "Hello! How can I help you today? 😊",
//   "why should i chat with you": "Because I'm smart, fast, and never sleep! 😎",
//   "who are you": "I'm RentBot, your 24/7 smart rental assistant! 🚀",
//   "what can you do": "I can help you list, find, and rent items easily! 🌟",
//   "thank you": "You're always welcome! 💜"
// };

// const quickQuestions = [
//   "What is RentLoop?",
//   "How to list item?",
//   "How to become owner?",
//   "How to search?",
//   "What is AI support?"
// ];

// const ChatBot = () => {
//   const [chatVisible, setChatVisible] = useState(false);
//   const [messages, setMessages] = useState([
//     { text: "Hey there, curious mind! Ready to chat with RentBot? 🤖", sender: "bot", timestamp: new Date() }
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const [isBotTyping, setIsBotTyping] = useState(false);

//   const handleSend = (inputText = userInput) => {
//     if (!inputText.trim()) return;

//     const userMsg = { text: inputText, sender: "user", timestamp: new Date() };
//     setMessages((prev) => [...prev, userMsg]);
//     setUserInput("");
//     setIsBotTyping(true);

//     setTimeout(() => {
//       const lowerInput = inputText.toLowerCase();
//       let replyText = "Hmm, I didn’t get that yet... but I’m learning every day! 🧠";

//       for (const key in predefinedReplies) {
//         if (lowerInput.includes(key)) {
//           replyText = predefinedReplies[key];
//           break;
//         }
//       }

//       const botReply = {
//         text: replyText,
//         sender: "bot",
//         timestamp: new Date()
//       };

//       setMessages((prev) => [...prev, botReply]);
//       setIsBotTyping(false);
//     }, 1000);
//   };

//   return (
//     <div className="chatbot-wrapper">
//       {!chatVisible && (
//         <div className="bot-entry-screen">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
//             alt="Bot"
//             className="bot-image"
//           />
//           <h2 className="bot-welcome">Hey, I’m RentBot 👋</h2>
//           <p className="bot-tagline">Your 24/7 rental guide is here!</p>
//           <button onClick={() => setChatVisible(true)} className="start-chat-btn">💬 Chat Now</button>
//         </div>
//       )}

//       {chatVisible && (
//         <div className="chat-window">
//           <div className="chat-header">🤖 RentBot - Always On</div>

//           {/* Quick clickable questions */}
//           <div className="quick-questions">
//             {quickQuestions.map((q, idx) => (
//               <button key={idx} onClick={() => handleSend(q)}>{q}</button>
//             ))}
//           </div>

//           <div className="chat-messages">
//             {messages.map((msg, index) => (
//               <div key={index} className={`chat-bubble ${msg.sender}`}>
//                 <div className="chat-text">{msg.text}</div>
//                 <div className="chat-time">
//                   {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </div>
//               </div>
//             ))}
//             {isBotTyping && (
//               <div className="chat-bubble bot typing">
//                 <span className="dot"></span>
//                 <span className="dot"></span>
//                 <span className="dot"></span>
//               </div>
//             )}
//           </div>

//           <div className="chat-input-area">
//             <input
//               type="text"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               placeholder="Ask me anything..."
//               style={{ color: "white", backgroundColor: "#2c1f4a", border: "1px solid #6a0dad" }} // Dark type area
//             />
//             <button onClick={() => handleSend()}>➤</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;


//new



import React, { useState } from "react";
import "./ChatBot.css";

const predefinedReplies = {
  "what is rentloop": "RentLoop is a smart platform for renting and listing items easily! 💜",
  "how to list item": "Go to the 'Item Listing' section and fill in the details of your item. 📝",
  "how to become owner": "Sign up as an owner in your profile and start listing items. 🏠",
  "how to search": "Use our smart search & filter module to find what you need. 🔍",
  "how to request": "Just click 'Request' on the item you like and wait for approval. ✅",
  "what is ai support": "AI Support helps you 24/7 with smart and quick answers! 🤖",
  "hi": "Hey there! I'm RentBot 🤖, your rental buddy. Ask me anything!",
  "hello": "Hello! How can I help you today? 😊",
  "why should i chat with you": "Because I'm smart, fast, and never sleep! 😎",
  "who are you": "I'm RentBot, your 24/7 smart rental assistant! 🚀",
  "what can you do": "I can help you list, find, and rent items easily! 🌟",
  "thank you": "You're always welcome! 💜"
};

const ChatBot = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey there, curious mind! Ready to chat with RentBot? 🤖", sender: "bot", timestamp: new Date() }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSend = (inputText = userInput) => {
    if (!inputText.trim()) return;

    const userMsg = { text: inputText, sender: "user", timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setUserInput("");
    setIsBotTyping(true);

    setTimeout(() => {
      const lowerInput = inputText.toLowerCase();
      let replyText = "Hmm, I didn’t get that yet... but I’m learning every day! 🧠";

      for (const key in predefinedReplies) {
        if (lowerInput.includes(key)) {
          replyText = predefinedReplies[key];
          break;
        }
      }

      const botReply = {
        text: replyText,
        sender: "bot",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botReply]);
      setIsBotTyping(false);
    }, 1000);
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
      {!chatVisible && (
        <div className="bot-entry-screen">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            alt="Bot"
            className="bot-image"
          />
          <h2 className="bot-welcome">Hey, I’m RentBot 👋</h2>
          <p className="bot-tagline">Your 24/7 rental guide is here!</p>
          <button onClick={() => setChatVisible(true)} className="start-chat-btn">💬 Chat Now</button>
        </div>
      )}

      {chatVisible && (
        <div className="chat-window">
          <div className="chat-header">🤖 RentBot - Always On</div>

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
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask me anything..."
              style={{ color: "white", backgroundColor: "#2c1f4a", border: "1px solid #6a0dad" }}
            />
            <button onClick={() => handleSend()}>➤</button>
            <button onClick={handleVoiceInput} title="Voice Input" style={{ marginLeft: "8px", background: "#6f42c1", color: "white", borderRadius: "50%", width: "45px", height: "45px", fontSize: "18px", cursor: "pointer" }}>🎤</button>
          </div>

          <div className="chat-footer" style={{ color: "#fff", textAlign: "center", padding: "10px", fontSize: "13px" }}>
            💡 You can ask anything about RentLoop! Use text or voice. 👍
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
