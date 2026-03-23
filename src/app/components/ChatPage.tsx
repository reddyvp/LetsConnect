import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Send, ArrowLeft, MoreVertical } from 'lucide-react';
import { matches, chats, currentUserId } from '../data/mockData';
import { Message } from '../types';

export function ChatPage() {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const match = matches.find(m => m.id === matchId);
  const chat = matchId ? chats[matchId] : null;

  useEffect(() => {
    if (chat) {
      setMessages(chat.messages);
    }
  }, [chat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim() || !matchId) return;

    const newMessage: Message = {
      id: `m-${Date.now()}`,
      senderId: currentUserId,
      text: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  if (!match) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Match not found</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b bg-white shadow-sm">
        <button
          onClick={() => navigate('/matches')}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => {}}
          className="flex items-center gap-3 flex-1"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={match.profile.photos[0]}
              alt={match.profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h2 className="font-medium">{match.profile.name}</h2>
          </div>
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => {
          const isOwn = message.senderId === currentUserId;
          return (
            <div
              key={message.id}
              className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                  isOwn
                    ? 'bg-gradient-to-br from-pink-500 to-orange-500 text-white'
                    : 'bg-white text-gray-900 shadow-sm'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    isOwn ? 'text-white/70' : 'text-gray-500'
                  }`}
                >
                  {formatMessageTime(message.timestamp)}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function formatMessageTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}
