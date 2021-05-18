import React, { useState } from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(messages);

  const sendMessage = (event) => {
    //logic to send msg
    setMessages([...messages, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1> Hello World</h1>

      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>
      
      {/* messages */}

    </div>
  );
}

export default App;
