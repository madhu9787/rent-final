import React, { useState } from "react";
import ChatBot from "./ChatBot";
import "./FloatingChatBot.css";

const FloatingChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {/* Floating Loopy Button - Clean & Professional */}
            {!isOpen && (
                <div
                    className="floating-bot-button"
                    onClick={() => setIsOpen(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    title="Chat with Loopy - Your AI Assistant"
                >
                    {/* Simple Chat Icon */}
                    <div className="chat-icon">💬</div>

                    {/* Name Badge on Hover */}
                    {isHovered && (
                        <div className="loopy-badge">
                            <span className="loopy-name">Loopy</span>
                            <span className="loopy-status">● Online</span>
                        </div>
                    )}

                    {/* Pulse Ring */}
                    <div className="bot-pulse"></div>
                </div>
            )}

            {/* ChatBot Modal Overlay */}
            {isOpen && (
                <div className="chatbot-overlay">
                    <div className="chatbot-modal">
                        <button className="close-chatbot" onClick={() => setIsOpen(false)}>
                            ✕
                        </button>
                        <ChatBot robotName="Loopy" />
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingChatBot;
