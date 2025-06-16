import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mic, MicOff, Volume2, VolumeX, Brain, User, Sparkles, ThumbsUp, ThumbsDown, Copy, Download } from 'lucide-react';
import toast from 'react-hot-toast';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  isVoice?: boolean;
  hasAudio?: boolean;
}

const AIDoubtSolver: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm your AI tutor. I can help you understand any concept, solve problems, or answer questions. What would you like to learn today?",
      timestamp: new Date(),
      hasAudio: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMode, setSelectedMode] = useState<'simple' | 'detailed'>('simple');
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'hindi'>('english');
  const [audioEnabled, setAudioEnabled] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great question! Let me break this down for you step by step...",
        "I understand what you're asking. Here's a simple explanation...",
        "Excellent! This is a fundamental concept. Let me explain it clearly...",
        "Perfect question! This topic is really important for your learning journey...",
        "I can help you with that! Here's what you need to know..."
      ];

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: `${randomResponse}\n\n${generateDetailedResponse(inputMessage)}`,
        timestamp: new Date(),
        hasAudio: true
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const generateDetailedResponse = (question: string): string => {
    const responses = {
      python: "Python is a high-level programming language known for its simplicity and readability. Here are the key points:\n\n• **Syntax**: Clean and easy to understand\n• **Applications**: Web development, data science, AI/ML\n• **Libraries**: NumPy, Pandas, Django, Flask\n• **Learning curve**: Beginner-friendly\n\nWould you like me to show you some Python examples?",
      
      javascript: "JavaScript is the language of the web! Here's what makes it special:\n\n• **Client-side**: Runs in browsers to make websites interactive\n• **Server-side**: Node.js allows backend development\n• **Frameworks**: React, Vue, Angular for modern web apps\n• **Versatile**: Can build web apps, mobile apps, and desktop apps\n\nWhat specific JavaScript concept would you like to explore?",
      
      react: "React is a powerful JavaScript library for building user interfaces:\n\n• **Components**: Reusable UI building blocks\n• **Virtual DOM**: Efficient rendering and updates\n• **JSX**: HTML-like syntax in JavaScript\n• **Hooks**: Modern way to manage state and lifecycle\n• **Ecosystem**: Huge community and library support\n\nWant to see a simple React component example?",
      
      default: "I'd be happy to help you understand this better! Could you provide more specific details about what you'd like to learn? The more context you give me, the better I can tailor my explanation to your needs.\n\nI can help with:\n• Programming concepts\n• Math and science topics\n• Career guidance\n• Study strategies\n• Project ideas"
    };

    const lowerQuestion = question.toLowerCase();
    if (lowerQuestion.includes('python')) return responses.python;
    if (lowerQuestion.includes('javascript') || lowerQuestion.includes('js')) return responses.javascript;
    if (lowerQuestion.includes('react')) return responses.react;
    return responses.default;
  };

  const handleVoiceInput = () => {
    if (!isListening) {
      setIsListening(true);
      toast.success('Listening... Speak now!');
      
      // Simulate voice recognition
      setTimeout(() => {
        setIsListening(false);
        setInputMessage("What is machine learning?");
        toast.success('Voice captured!');
      }, 3000);
    } else {
      setIsListening(false);
      toast.error('Stopped listening');
    }
  };

  const playAudio = (messageId: string) => {
    toast.success('Playing audio response...');
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
    toast.success('Copied to clipboard!');
  };

  const downloadTranscript = () => {
    const transcript = messages
      .map(msg => `${msg.type.toUpperCase()}: ${msg.content}`)
      .join('\n\n');
    
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-tutor-conversation.txt';
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Transcript downloaded!');
  };

  const quickQuestions = [
    "Explain Python basics",
    "What is machine learning?",
    "How does React work?",
    "Data structures overview",
    "Web development roadmap",
    "AI career guidance"
  ];

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-850 border-b border-gray-750 p-6"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center animate-pulse-slow">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">AI Tutor</h1>
              <p className="text-gray-400">Your personal learning assistant</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Mode Selector */}
            <div className="flex bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setSelectedMode('simple')}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  selectedMode === 'simple' 
                    ? 'bg-accent text-primary font-semibold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Simple
              </button>
              <button
                onClick={() => setSelectedMode('detailed')}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  selectedMode === 'detailed' 
                    ? 'bg-accent text-primary font-semibold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Detailed
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setSelectedLanguage('english')}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  selectedLanguage === 'english' 
                    ? 'bg-accent text-primary font-semibold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setSelectedLanguage('hindi')}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  selectedLanguage === 'hindi' 
                    ? 'bg-accent text-primary font-semibold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                हिंदी
              </button>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              className={`p-2 rounded-lg transition-colors ${
                audioEnabled ? 'bg-accent text-primary' : 'bg-gray-700 text-gray-400 hover:text-white'
              }`}
            >
              {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>

            {/* Download Transcript */}
            <button
              onClick={downloadTranscript}
              className="p-2 bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Messages Area */}
      <div className="flex-1 overflow-hidden flex">
        <div className="flex-1 max-w-4xl mx-auto p-6">
          <div className="h-full flex flex-col">
            {/* Quick Questions */}
            {messages.length <= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Quick Questions to Get Started:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setInputMessage(question)}
                      className="p-3 bg-gray-850 rounded-lg text-left text-sm hover:bg-gray-750 transition-colors border border-gray-700 hover:border-accent/50"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-6">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar */}
                    <div className={`flex-shrink-0 ${message.type === 'user' ? 'ml-3' : 'mr-3'}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        message.type === 'user' 
                          ? 'bg-accent text-primary' 
                          : 'bg-gradient-to-br from-purple-500 to-pink-500'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-5 h-5" />
                        ) : (
                          <Brain className="w-5 h-5" />
                        )}
                      </div>
                    </div>

                    {/* Message Content */}
                    <div className={`p-4 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-accent text-primary'
                        : 'bg-gray-850 text-white'
                    }`}>
                      <div className="whitespace-pre-line">{message.content}</div>
                      
                      {/* Message Actions */}
                      {message.type === 'ai' && (
                        <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-gray-700">
                          {message.hasAudio && (
                            <button
                              onClick={() => playAudio(message.id)}
                              className="p-1 text-gray-400 hover:text-accent transition-colors"
                              title="Play audio"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => copyMessage(message.content)}
                            className="p-1 text-gray-400 hover:text-accent transition-colors"
                            title="Copy message"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          <div className="flex space-x-1 ml-auto">
                            <button className="p-1 text-gray-400 hover:text-green-400 transition-colors">
                              <ThumbsUp className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                              <ThumbsDown className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div className="bg-gray-850 p-4 rounded-2xl">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-850 border-t border-gray-750 p-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask anything... (e.g., 'Explain Python functions' or 'What is machine learning?')"
                  className="w-full p-4 pr-12 bg-gray-700 rounded-xl border border-gray-600 focus:border-accent focus:outline-none text-white placeholder-gray-400"
                  disabled={isLoading}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleVoiceInput}
                    className={`p-2 rounded-lg transition-colors ${
                      isListening 
                        ? 'bg-red-500 text-white animate-pulse' 
                        : 'text-gray-400 hover:text-accent'
                    }`}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </motion.button>
                </div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="px-6 py-4 bg-accent text-primary font-semibold rounded-xl hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send</span>
            </motion.button>
          </div>
          
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI responses are generated for educational purposes. Always verify important information.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AIDoubtSolver;