import React, { useState } from 'react';
import ChatbotIcon from "../../assets/images/chatbot-icon.png";
import { BASE_URL } from '../../config';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [currentOption, setCurrentOption] = useState(null);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);

      if (currentOption === 'searchMedicine') {
        // Medicine Search Option
        const lowerCaseInput = input.toLowerCase().trim();
        const medicine = symptomMedicineMapping[lowerCaseInput] || 'Please consult a healthcare professional for accurate diagnosis and treatment.';
        setMessages(prevMessages => [...prevMessages, { text: medicine, sender: 'bot' }]);
        setInput('');
      } else {
        // General Questions / FAQs: Fetch from OpenAI GPT
        try {
          const response = await fetch(`${BASE_URL}/gemini/chat`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              messages: input
            }),
          });

          if (response.ok) {
            const data = await response.json();
            const botMessage = { text: data.botReply, sender: 'bot' };
            setMessages(prevMessages => [...prevMessages, botMessage]);
          } else {
            setMessages(prevMessages => [...prevMessages, { text: 'Error fetching GPT response', sender: 'bot' }]);
          }
        } catch (error) {
          setMessages(prevMessages => [...prevMessages, { text: 'Error connecting to GPT', sender: 'bot' }]);
        }

        setInput('');
      }
    }
  };

  const handleOptionSelect = (option) => {
    setCurrentOption(option);
    setMessages([]); // Clear previous messages
  };

  return (
    <div className={`fixed bottom-4 right-4 transition-all duration-300 ${isOpen ? 'w-80' : 'w-14 h-14 rounded-full'} bg-white border border-gray-300 rounded-lg shadow-lg z-50`}>
      {/* Options Section */}
      {isOpen && !currentOption && (
        <div className="p-2">
          <button
            onClick={() => handleOptionSelect('symptomChecker')}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg mb-2"
          >
            Symptom Checker
          </button>
          <button
            onClick={() => handleOptionSelect('searchMedicine')}
            className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg mb-2"
          >
            Search Medicine
          </button>
          <button
            onClick={() => handleOptionSelect('faqs')}
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            FAQs
          </button>
        </div>
      )}

      {/* Chat messages section */}
      {isOpen && currentOption === 'symptomChecker' && (
        <div className="h-64 overflow-y-scroll p-2 border-b border-gray-300">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 mb-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-200 text-right' : 'bg-gray-200 text-left'}`}>
              {msg.text}
            </div>
          ))}
          <div className="flex items-center p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your symptom..."
              className="flex-1 border border-gray-300 rounded-lg px-2 py-1"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-500 text-white px-4 py-1 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {isOpen && currentOption === 'searchMedicine' && (
        <div className="h-64 overflow-y-scroll p-2 border-b border-gray-300">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter medicine name..."
            className="w-full border border-gray-300 rounded-lg px-2 py-1 mb-2"
          />
          <button
            onClick={handleSend}
            className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg"
          >
            Search
          </button>
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 mb-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-200 text-right' : 'bg-gray-200 text-left'}`}>
              {msg.text}
            </div>
          ))}
        </div>
      )}

      {isOpen && currentOption === 'faqs' && (
        <div className="p-4">
          <p>Here are some frequently asked questions:</p>
          <ul>
            <li>Q: What is the purpose of this chatbot?</li>
            <li>A: The chatbot helps you with symptom checking, searching medicines, and provides FAQs.</li>
            <li>Q: How can I use the symptom checker?</li>
            <li>A: Simply describe your symptoms, and the chatbot will suggest possible treatments.</li>
          </ul>
        </div>
      )}

      {/* Chat input area */}
      {!currentOption && (
        <div className="flex items-center p-2">
          <img
            src={ChatbotIcon}
            alt="Chatbot Icon"
            className="cursor-pointer rounded-full w-10 h-10"
            onClick={() => setIsOpen(true)}
          />
        </div>
      )}

      {/* Close button */}
      {isOpen && (
        <button
          onClick={() => { setIsOpen(false); setCurrentOption(null); }}
          className="absolute -top-5 right-1 text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      )}
    </div>
  );
};

export default Chatbot;
