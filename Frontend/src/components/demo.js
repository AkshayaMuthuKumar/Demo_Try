import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';

const SimpleChatbot = () => {
  const [userInput, setUserInput] = useState({ name: '', age: '' });
  const [finalMessage, setFinalMessage] = useState('');

  useEffect(() => {
    setFinalMessage(`Thank you ${userInput.name} for sharing your information. You are ${userInput.age} years old.`);
  }, [userInput]);

  const handleEnd = (steps) => {
    const { name, age } = steps;
    setUserInput({
      ...userInput,
      name: name ? name.value : '',
      age: age ? age.value : '',
    });
  };

  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'How old are you?',
      trigger: 'age',
    },
    {
      id: 'age',
      user: true,
      trigger: 'end-message',
    },
    {
      id: 'end-message',
      message: finalMessage,
      end: true,
    },
  ];

  return (
    <div>
      <ChatBot steps={steps} handleEnd={handleEnd} />
    </div>
  );
};

export default SimpleChatbot;
