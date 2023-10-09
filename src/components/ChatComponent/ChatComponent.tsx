import React, { useState, ChangeEvent } from "react";
import "./ChatComponent.scss";

interface Message {
  text: string;
  user: string;
}

const messageResponses: string[] = [
  "Мы свяжемся с вами позже по поводу вашего вопроса",
  "Спасибо за ваше сообщение, постараемся как можно быстрее с вами связаться",
  "Здравстуйте, ваш запрос принят",
  "Доброго времени суток, ваш вопрос на рассмотрении",
];

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      return;
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, user: "Вы" },
    ]);
    setNewMessage("");
    handleAssistantResponse();
  };

  const handleAssistantResponse = () => {
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: messageResponses[Math.floor(Math.random() * 5)],
          user: "Ассистент",
        },
      ]);
    }, 1500);
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.user == "Ассистент" ? "assistant" : "user"
            }`}
          >
            <span className="message-sender">{message.user}</span>
            <span className="message-text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Введите сообщение..."
        />
        <button onClick={handleSendMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default ChatComponent;
