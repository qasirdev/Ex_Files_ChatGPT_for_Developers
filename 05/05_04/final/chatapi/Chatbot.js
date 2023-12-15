import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistance" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = async () => {
    if (!inputMessage) return;

    // input HERE
    const newMessage = { role: "user", content: inputMessage };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post("http://localhost:4000/ask", {
        messages: [...messages, newMessage],
      });

      // responses HERE
      setMessages(response.data.messages);

      setInputMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={handleChange}
          placeholder="Type your message..."
        />
        &nbsp;
        <button onClick={sendMessage}>Send</button>
      </div>
      <br />
      <div>
        {messages.map((message, index) => {
          if (index === 0) return false;
          return (
            <div key={index}>
              - {message.role === "user" ? "You: " : "Bot: "}
              <span style={{ fontStyle: "italic" }}>{message.content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chatbot;
