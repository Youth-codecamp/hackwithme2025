import React, { useState } from 'react';
import './GhostBot.css';
import ghostIcon from '../assets/ghost.png';

const GhostBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hey! I’m Ghost. Ask me anything about Hack With Me!' }
  ]);
  const [input, setInput] = useState('');

  const keywordResponses = [
    { keywords: ['who', 'join'], response: "High school students with a passion for coding are welcome! You'll need basic programming skills to participate." },
    { keywords: ['date', 'when', 'event'], response: "Hack With Me will take place on August 16th, 2025. Mark your calendar!" },
    { keywords: ['parent', 'guide'], response: "For parents, rest assured, Hack With Me is a safe and supportive environment for young coders." },
    { keywords: ['hi', 'hello'], response: "Hello there! How can I help you today?" },
    { keywords: ['thanks', 'thank you'], response: "You're welcome! Let me know if you have more questions!" },
    { keywords: ['food', 'meals'], response: "Yes! We provide meals, snacks, and drinks throughout the event to keep you fueled." },
    { keywords: ['location', 'where', 'venue'], response: "The venue is not yet confirmed. Please check back for updates soon!" },
    { keywords: ['projects', 'build'], response: "You can build web apps, mobile apps, or chatbots that help solve real-life problems!" },
    { keywords: ['founder', 'who created'], response: "Hack With Me was founded by Shyaka Chaste to help students learn and create together!" },
    { keywords: ['what', 'Hack With Me'], response: "Hack With Me is a yearly, 24-hour coding hackathon for high school students that happens on August 16th. Students join to create projects, solve problems, and improve their coding skills." },
    { keywords: ['prizes', 'awards'], response: "Prizes for Hack With Me will be announced shortly before the event starts. Stay tuned for updates!" },
  ];


  const handleSend = () => {
    if (input.trim() === '') return;
    
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);


    const userInput = input.toLowerCase();
    const matchedResponse = keywordResponses.find(({ keywords }) =>
      keywords.some(keyword => userInput.includes(keyword))
    );

    const response = matchedResponse 
      ? matchedResponse.response 
      : "I'm here to help! Here are some things you can ask me:\n- Who can join?\n- What's the event date?\n- Is food provided?\n- Where is Hack With Me?";
      
    setMessages([...newMessages, { sender: 'bot', text: response }]);
    setInput('');
  };

  return (
    <div className="ghost-bot">
      <img
        src={ghostIcon}
        alt="Ask Ghost"
        className="ghost-icon"
        onClick={() => setIsChatOpen(!isChatOpen)}
      />
      
      {isChatOpen && (
        <div className="chat-window">
          <h2>Ask Ghost</h2>
          <div className="chat-content">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GhostBot;
