import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const { t } = useLanguage();

    const whatsappNumber = '8801647712961';
    const phoneNumber = '+8801901372340';

    const quickMessages = [
        'I want to know more about the project',
        'What is the price?',
        'Can I schedule a site visit?',
        'What are the payment options?',
    ];

    const handleSendMessage = () => {
        if (message.trim()) {
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
            setMessage('');
            setIsOpen(false);
        }
    };

    const handleQuickMessage = (quickMsg: string) => {
        const encodedMessage = encodeURIComponent(quickMsg);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        setIsOpen(false);
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
                        className="w-[350px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Dream Castle Living</h3>
                                    <p className="text-white/80 text-xs">Typically replies instantly</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="p-4 bg-muted/30 max-h-[400px] overflow-y-auto">
                            {/* Welcome Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-card p-3 rounded-lg shadow-sm mb-4"
                            >
                                <p className="text-sm text-foreground">
                                    👋 Hello! Welcome to Dream Castle Living.
                                </p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    How can we help you today?
                                </p>
                            </motion.div>

                            {/* Quick Messages */}
                            <div className="space-y-2 mb-4">
                                <p className="text-xs text-muted-foreground font-medium mb-2">Quick Messages:</p>
                                {quickMessages.map((quickMsg, index) => (
                                    <motion.button
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => handleQuickMessage(quickMsg)}
                                        className="w-full text-left p-3 bg-card hover:bg-primary/10 rounded-lg text-sm text-foreground transition-colors border border-border hover:border-primary"
                                    >
                                        {quickMsg}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-card border-t border-border">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!message.trim()}
                                    className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20BA5A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 text-center">
                                Messages will open in WhatsApp
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Buttons */}
            <div className="flex flex-col gap-3">
                {/* WhatsApp Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative"
                    aria-label="Chat on WhatsApp"
                >
                    {isOpen ? (
                        <X className="w-7 h-7" />
                    ) : (
                        <MessageCircle className="w-7 h-7" />
                    )}

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
