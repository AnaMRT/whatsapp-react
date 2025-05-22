
import './App.css'

import { useState } from "react";
import Button from "./components/Button.jsx";
import Message from "./components/Message.jsx";
import messagesData from "./data/message.js";


function App() {
  const [messages] = useState(messagesData);

  return (
    <div className="chat">
      <div className="header">
        <Button  />
        <h3>Meu Chat</h3>
      </div>
      <div className="content">
        <ul>
          {messages.map((msg) => (
            <Message key={msg.id} {...msg} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
