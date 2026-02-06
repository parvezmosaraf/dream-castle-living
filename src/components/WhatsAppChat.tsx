import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, User, Bot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: '👋 Hello! Welcome to Dream Castle Living. How can I help you today?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    const phoneNumber = '+8801901372340';

    const quickMessages = [
        'Tell me about the project',
        'What is the price?',
        'Schedule a site visit',
        'Payment options',
    ];

    // Bot responses based on keywords
    const getBotResponse = (userMessage: string): string => {
        const msg = userMessage.toLowerCase();

        if (msg.includes('price') || msg.includes('cost') || msg.includes('payment')) {
            return "💰 Our apartments start from BDT 38,75,000 with flexible payment options:\n\n• Down Payment: BDT 6,00,000\n• Monthly EMI: BDT 1,00,000 (36 months)\n• Total Investment: BDT 48,05,000\n\nWould you like to know more about our payment plans?";
        }

        if (msg.includes('size') || msg.includes('sqft') || msg.includes('area')) {
            return "📐 Our spacious apartments are 1550 sqft with:\n\n• 3 Bedrooms\n• 3 Bathrooms\n• Lake view balconies\n• Modern kitchen\n\nWould you like to see the floor plans?";
        }

        if (msg.includes('location') || msg.includes('where') || msg.includes('address')) {
            return "📍 We're located at:\n\nAshulia Model Town, Block-H\nLake View Corner, Birulia\nSaver, Dhaka - 1344\n\n✨ Features:\n• Adjacent to Ashulia Lake\n• 5 min from bus stand\n• Near universities\n• Future Uttara bridge connectivity\n\nWould you like directions?";
        }

        if (msg.includes('visit') || msg.includes('site') || msg.includes('tour')) {
            return "🏗️ We'd love to show you around!\n\nOur site visits are available:\n• Every day 10 AM - 6 PM\n• Free transportation available\n• Expert guidance provided\n\nPlease call us at +880 1901 372340 to schedule your visit!";
        }

        if (msg.includes('amenities') || msg.includes('facilities') || msg.includes('features')) {
            return "✨ Premium Amenities:\n\n• 24/7 Security & CCTV\n• Backup Power Supply\n• High-Speed Elevators\n• Rooftop Terrace\n• Children's Play Area\n• Landscaped Gardens\n• Community Hall\n• Water Treatment Plant\n\nWhat specific amenity interests you?";
        }

        if (msg.includes('contact') || msg.includes('call') || msg.includes('phone')) {
            return "📞 Contact Us:\n\nPhone: +880 1901 372340\nWhatsApp: +880 1647 712961\nEmail: seadreamconstruction@gmail.com\n\nOur team is available 9 AM - 9 PM daily. Feel free to call anytime!";
        }

        if (msg.includes('thank') || msg.includes('thanks')) {
            return "You're welcome! 😊 Is there anything else you'd like to know about Dream Castle Living?";
        }

        if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
            return "Hello! 👋 I'm here to help you learn about Dream Castle Living. What would you like to know?";
        }

        // Default response
        return "I'd be happy to help you with that! For detailed information, please:\n\n📞 Call: +880 1901 372340\n📧 Email: seadreamconstruction@gmail.com\n\nOr ask me about:\n• Pricing & Payment\n• Location & Amenities\n• Site Visits\n• Floor Plans";
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            // Add user message
            const userMessage: Message = {
                id: Date.now().toString(),
                text: inputMessage,
                sender: 'user',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, userMessage]);
            setInputMessage('');
            setIsTyping(true);

            // Simulate bot typing and response
            setTimeout(() => {
                const botResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    text: getBotResponse(inputMessage),
                    sender: 'bot',
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, botResponse]);
                setIsTyping(false);
            }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
        }
    };

    const handleQuickMessage = (quickMsg: string) => {
        setInputMessage(quickMsg);
        setTimeout(() => {
            handleSendMessage();
        }, 100);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="w-[380px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#25D366] to-[#20BA5A] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <Bot className="w-6 h-6 text-[#25D366]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Dream Castle Assistant</h3>
                                    <p className="text-white/90 text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="h-[400px] overflow-y-auto p-4 bg-muted/20 space-y-4">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {message.sender === 'bot' && (
                                        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                                            <Bot className="w-5 h-5 text-white" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[75%] rounded-2xl px-4 py-2 ${message.sender === 'user'
                                                ? 'bg-primary text-primary-foreground rounded-br-sm'
                                                : 'bg-card text-foreground rounded-bl-sm shadow-sm border border-border'
                                            }`}
                                    >
                                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                                        <p className="text-xs opacity-60 mt-1">
                                            {message.timestamp.toLocaleTimeString('en-US', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </p>
                                    </div>
                                    {message.sender === 'user' && (
                                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                            <User className="w-5 h-5 text-primary-foreground" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-2 items-center"
                                >
                                    <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                                        <Bot className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="bg-card px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-border">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></span>
                                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Messages */}
                        {messages.length === 1 && (
                            <div className="p-3 bg-muted/10 border-t border-border">
                                <p className="text-xs text-muted-foreground font-medium mb-2">Quick Questions:</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {quickMessages.map((quickMsg, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleQuickMessage(quickMsg)}
                                            className="text-xs p-2 bg-card hover:bg-primary/10 rounded-lg text-foreground transition-colors border border-border hover:border-primary"
                                        >
                                            {quickMsg}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-4 bg-card border-t border-border">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!inputMessage.trim()}
                                    className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20BA5A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Buttons */}
            <div className="flex flex-col gap-3">
                {/* Chat Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative"
                    aria-label="Chat with us"
                >
                    {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}

                    {/* Pulse Animation Ring */}
                    {!isOpen && (
                        <motion.div
                            className="absolute inset-0 rounded-full bg-[#25D366]/30"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    )}

                    {/* Unread Badge */}
                    {!isOpen && messages.length > 1 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                            !
                        </span>
                    )}
                </motion.button>

                {/* Call Button */}
                <motion.a
                    href={`tel:${phoneNumber}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 1.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                    aria-label="Call us"
                >
                    <Phone className="w-7 h-7" />
                </motion.a>
            </div>
        </div>
    );
};

export default WhatsAppChat;
