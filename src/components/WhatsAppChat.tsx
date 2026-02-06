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

// Comprehensive knowledge base about Dream Castle Living
const knowledgeBase = {
    project: {
        name: 'Dream Castle Living',
        developer: 'Sea Dream Construction & Developments Ltd',
        type: 'Premium Lake View Apartments',
        status: 'Under Construction',
    },
    pricing: {
        basePrice: 'BDT 38,75,000',
        basePriceWords: 'Thirty-Eight Lakh Seventy-Five Thousand Taka',
        sharePrice: 'BDT 9,30,000',
        downPayment: 'BDT 6,00,000',
        monthlyEMI: 'BDT 1,00,000',
        emiTenure: '36 months',
        totalInvestment: 'BDT 48,05,000',
        rentalIncome: 'BDT 30,000 - 35,000 per month',
    },
    apartment: {
        size: '1550 sqft',
        bedrooms: 3,
        bathrooms: 3,
        balconies: 'Lake view balconies',
        parking: 'Dedicated parking space',
        kitchen: 'Modern modular kitchen',
    },
    building: {
        structure: 'B+G+10 Floors',
        landArea: '10 Katha',
        elevators: 'High-speed elevators',
        security: '24/7 CCTV surveillance',
        power: 'Backup generator',
    },
    location: {
        address: 'Ashulia Model Town, Block-H, Lake View Corner, Amin Model Town, Birulia, Savar, Dhaka - 1344',
        landmarks: [
            'Adjacent to Ashulia Lake',
            '5 minutes from Ashulia Bus Stand',
            'Near BRAC University area',
            'Near North South University area',
            'Easy access to Dhaka-Aricha Highway',
        ],
        connectivity: 'Future Uttara bridge proximity for excellent connectivity',
    },
    amenities: [
        '24/7 Security & CCTV',
        'Backup Power Supply',
        'High-Speed Elevators',
        'Modern Intercom System',
        'Landscaped Gardens',
        "Children's Play Area",
        'Community Hall',
        'Rooftop Terrace',
        'Water Treatment Plant',
        'Dedicated Parking',
    ],
    contact: {
        phone1: '+880 1901 372340',
        phone2: '+880 1647 712961',
        email: 'seadreamconstruction@gmail.com',
        website: 'seadreamdevelopment.vercel.app',
        hours: '9 AM - 9 PM daily',
    },
    siteVisit: {
        availability: 'Every day 10 AM - 6 PM',
        transportation: 'Free transportation available',
        guidance: 'Expert guidance provided',
    },
};

// Advanced NLP-like response system
const getNLPResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase().trim();

    // Greeting detection
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'];
    if (greetings.some(g => msg.startsWith(g)) || msg === 'hi' || msg === 'hello') {
        return `Hello! 👋 Welcome to ${knowledgeBase.project.name}. I'm your virtual assistant, here to help you with any questions about our premium lake view apartments. What would you like to know?`;
    }

    // Thank you detection
    if (msg.includes('thank') || msg.includes('thanks') || msg.includes('appreciate')) {
        return "You're very welcome! 😊 I'm here to help. Feel free to ask anything else about Dream Castle Living, or call us at +880 1901 372340 for personal assistance.";
    }

    // Pricing queries - comprehensive detection
    if (
        msg.includes('price') || msg.includes('cost') || msg.includes('payment') ||
        msg.includes('pay') || msg.includes('afford') || msg.includes('budget') ||
        msg.includes('expensive') || msg.includes('cheap') || msg.includes('emi') ||
        msg.includes('installment') || msg.includes('down payment') || msg.includes('invest')
    ) {
        return `💰 **Pricing & Payment Details:**

**Base Price:** ${knowledgeBase.pricing.basePrice}
(${knowledgeBase.pricing.basePriceWords})

**Flexible Payment Plan:**
• Share Price: ${knowledgeBase.pricing.sharePrice}
• Down Payment: ${knowledgeBase.pricing.downPayment}
• Monthly EMI: ${knowledgeBase.pricing.monthlyEMI}
• EMI Tenure: ${knowledgeBase.pricing.emiTenure}

**Total Investment:** ${knowledgeBase.pricing.totalInvestment}

**Investment Benefits:**
✓ High rental income potential (${knowledgeBase.pricing.rentalIncome})
✓ Prime location with future appreciation
✓ Easy EMI plans available

Would you like to discuss a customized payment plan? Call us at ${knowledgeBase.contact.phone1}`;
    }

    // Size/Area/Apartment details
    if (
        msg.includes('size') || msg.includes('sqft') || msg.includes('square') ||
        msg.includes('area') || msg.includes('big') || msg.includes('spacious') ||
        msg.includes('room') || msg.includes('bedroom') || msg.includes('bathroom') ||
        msg.includes('apartment') || msg.includes('unit') || msg.includes('flat')
    ) {
        return `🏠 **Apartment Specifications:**

**Size:** ${knowledgeBase.apartment.size} (Spacious Units)

**Layout:**
• ${knowledgeBase.apartment.bedrooms} Bedrooms (Master bedroom with attached bath)
• ${knowledgeBase.apartment.bathrooms} Modern Bathrooms
• ${knowledgeBase.apartment.balconies}
• ${knowledgeBase.apartment.kitchen}
• Dining area
• Living room

**Additional Features:**
• ${knowledgeBase.apartment.parking}
• Ample natural light
• Cross ventilation
• Premium fixtures

Would you like to see the floor plans? Call ${knowledgeBase.contact.phone1} or visit our site!`;
    }

    // Location queries
    if (
        msg.includes('location') || msg.includes('where') || msg.includes('address') ||
        msg.includes('place') || msg.includes('area') || msg.includes('direction') ||
        msg.includes('map') || msg.includes('find') || msg.includes('reach') ||
        msg.includes('ashulia') || msg.includes('savar') || msg.includes('dhaka')
    ) {
        return `📍 **Prime Location:**

**Address:**
${knowledgeBase.location.address}

**Nearby Landmarks:**
${knowledgeBase.location.landmarks.map(l => `• ${l}`).join('\n')}

**Connectivity:**
${knowledgeBase.location.connectivity}

**Why This Location?**
✓ Peaceful lakeside environment
✓ Educational hub nearby
✓ Excellent future growth potential
✓ Easy access to Dhaka city

📱 Get directions: ${knowledgeBase.contact.phone1}
🌐 View on map: ${knowledgeBase.contact.website}`;
    }

    // Site visit queries
    if (
        msg.includes('visit') || msg.includes('see') || msg.includes('tour') ||
        msg.includes('show') || msg.includes('inspection') || msg.includes('viewing') ||
        msg.includes('check') || msg.includes('look')
    ) {
        return `🏗️ **Site Visit Information:**

We'd love to show you around Dream Castle Living!

**Visit Schedule:**
${knowledgeBase.siteVisit.availability}

**What We Provide:**
✓ ${knowledgeBase.siteVisit.transportation}
✓ ${knowledgeBase.siteVisit.guidance}
✓ Detailed project walkthrough
✓ Floor plan viewing
✓ Location tour

**Book Your Visit:**
📞 Call: ${knowledgeBase.contact.phone1}
📱 WhatsApp: ${knowledgeBase.contact.phone2}

Our team will arrange everything for you!`;
    }

    // Amenities/Facilities queries
    if (
        msg.includes('amenity') || msg.includes('amenities') || msg.includes('facility') ||
        msg.includes('facilities') || msg.includes('feature') || msg.includes('service') ||
        msg.includes('gym') || msg.includes('pool') || msg.includes('garden') ||
        msg.includes('security') || msg.includes('parking') || msg.includes('elevator') ||
        msg.includes('lift') || msg.includes('playground') || msg.includes('rooftop')
    ) {
        return `✨ **Premium Amenities & Facilities:**

${knowledgeBase.amenities.map((a, i) => `${i + 1}. ${a}`).join('\n')}

**Building Features:**
• ${knowledgeBase.building.structure}
• ${knowledgeBase.building.landArea} land area
• ${knowledgeBase.building.elevators}
• ${knowledgeBase.building.security}
• ${knowledgeBase.building.power}

**Lifestyle Benefits:**
✓ Safe & secure environment
✓ Family-friendly community
✓ Modern living standards
✓ Well-maintained premises

What specific amenity would you like to know more about?`;
    }

    // Contact information queries
    if (
        msg.includes('contact') || msg.includes('call') || msg.includes('phone') ||
        msg.includes('number') || msg.includes('email') || msg.includes('reach') ||
        msg.includes('talk') || msg.includes('speak') || msg.includes('connect')
    ) {
        return `📞 **Contact Information:**

**Phone Numbers:**
• Primary: ${knowledgeBase.contact.phone1}
• WhatsApp: ${knowledgeBase.contact.phone2}

**Email:**
${knowledgeBase.contact.email}

**Website:**
${knowledgeBase.contact.website}

**Office Hours:**
${knowledgeBase.contact.hours}

**Developer:**
${knowledgeBase.project.developer}

Feel free to reach out anytime! Our team is ready to assist you.`;
    }

    // Investment/ROI queries
    if (
        msg.includes('invest') || msg.includes('return') || msg.includes('profit') ||
        msg.includes('roi') || msg.includes('rental') || msg.includes('rent') ||
        msg.includes('income') || msg.includes('worth')
    ) {
        return `💼 **Investment Opportunity:**

**Why Invest in Dream Castle Living?**

✓ **Prime Location:** Ashulia Model Town - rapidly developing area
✓ **Lake View:** Unique selling point with premium value
✓ **Rental Income:** ${knowledgeBase.pricing.rentalIncome}
✓ **Future Growth:** Upcoming Uttara bridge connectivity
✓ **Educational Hub:** High demand from students & faculty
✓ **Flexible Payment:** Easy ${knowledgeBase.pricing.emiTenure} EMI plan

**Investment Breakdown:**
• Base Price: ${knowledgeBase.pricing.basePrice}
• Total Investment: ${knowledgeBase.pricing.totalInvestment}
• Expected Rental: ${knowledgeBase.pricing.rentalIncome}

**ROI Factors:**
✓ Property value appreciation
✓ Steady rental income
✓ Premium location advantage
✓ Trusted developer

Want to discuss investment details? Call ${knowledgeBase.contact.phone1}`;
    }

    // Developer/Company queries
    if (
        msg.includes('developer') || msg.includes('company') || msg.includes('builder') ||
        msg.includes('who built') || msg.includes('trust') || msg.includes('reliable') ||
        msg.includes('sea dream')
    ) {
        return `🏢 **About the Developer:**

**${knowledgeBase.project.developer}**

We are a trusted real estate developer committed to delivering quality residential projects in Dhaka.

**Our Promise:**
✓ Quality construction
✓ Timely delivery
✓ Transparent dealings
✓ Customer satisfaction
✓ Legal compliance

**Current Project:**
${knowledgeBase.project.name} - ${knowledgeBase.project.type}

**Contact Us:**
📞 ${knowledgeBase.contact.phone1}
📧 ${knowledgeBase.contact.email}

We build trust, one home at a time.`;
    }

    // Handover/Completion queries
    if (
        msg.includes('handover') || msg.includes('completion') || msg.includes('ready') ||
        msg.includes('when') || msg.includes('complete') || msg.includes('finish') ||
        msg.includes('delivery')
    ) {
        return `🏗️ **Project Status:**

**Current Status:** ${knowledgeBase.project.status}

**What This Means:**
• Construction is actively progressing
• Quality checks at every stage
• Regular site updates available
• Booking open with flexible payment

**Next Steps:**
1. Book your apartment with down payment
2. Easy EMI for ${knowledgeBase.pricing.emiTenure}
3. Track construction progress
4. Handover upon completion

For detailed timeline and booking:
📞 Call: ${knowledgeBase.contact.phone1}
🏗️ Site Visit: Available daily

Book now to secure the best units!`;
    }

    // Floor plan queries
    if (
        msg.includes('floor plan') || msg.includes('layout') || msg.includes('design') ||
        msg.includes('blueprint') || msg.includes('plan')
    ) {
        return `📐 **Floor Plans & Layout:**

Our ${knowledgeBase.apartment.size} apartments feature thoughtfully designed layouts:

**Space Distribution:**
• 3 Spacious Bedrooms
• 3 Modern Bathrooms
• Living & Dining Area
• Modern Kitchen
• Lake View Balconies
• Utility Space

**Design Features:**
✓ Optimal space utilization
✓ Natural light & ventilation
✓ Privacy-focused layout
✓ Functional design

**View Floor Plans:**
📞 Call ${knowledgeBase.contact.phone1} for detailed plans
🏗️ Visit our site for physical viewing

We'll be happy to show you the complete layout!`;
    }

    // Default intelligent response
    return `I'd be happy to help you with that! 

I can provide detailed information about:

💰 **Pricing & Payment** - EMI plans, costs, investment
🏠 **Apartment Details** - Size, rooms, features
📍 **Location** - Address, landmarks, connectivity
✨ **Amenities** - All facilities and services
🏗️ **Site Visits** - Schedule and arrangements
📞 **Contact** - Phone, email, office hours
💼 **Investment** - ROI, rental income

**Quick Contact:**
📞 ${knowledgeBase.contact.phone1}
📧 ${knowledgeBase.contact.email}

What specific information would you like to know about Dream Castle Living?`;
};

const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: `👋 Hello! Welcome to ${knowledgeBase.project.name}.\n\nI'm your AI assistant, ready to answer any questions about our premium lake view apartments in Ashulia. How can I help you today?`,
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
        'What is the price?',
        'Tell me about location',
        'Schedule a site visit',
        'What amenities do you offer?',
    ];

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
            const currentInput = inputMessage;
            setInputMessage('');
            setIsTyping(true);

            // Simulate realistic typing delay based on response length
            const response = getNLPResponse(currentInput);
            const typingDelay = Math.min(1500 + response.length * 10, 3000);

            setTimeout(() => {
                const botResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    text: response,
                    sender: 'bot',
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, botResponse]);
                setIsTyping(false);
            }, typingDelay);
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
                        className="w-[400px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#25D366] to-[#20BA5A] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <Bot className="w-6 h-6 text-[#25D366]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Dream Castle AI</h3>
                                    <p className="text-white/90 text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        Always Online
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
                        <div className="h-[450px] overflow-y-auto p-4 bg-muted/20 space-y-4">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {message.sender === 'bot' && (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#25D366] to-[#20BA5A] flex items-center justify-center flex-shrink-0">
                                            <Bot className="w-5 h-5 text-white" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.sender === 'user'
                                            ? 'bg-primary text-primary-foreground rounded-br-sm'
                                            : 'bg-card text-foreground rounded-bl-sm shadow-sm border border-border'
                                            }`}
                                    >
                                        <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                                        <p className="text-xs opacity-60 mt-1.5">
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
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#25D366] to-[#20BA5A] flex items-center justify-center">
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
                                            className="text-xs p-2.5 bg-card hover:bg-primary/10 rounded-lg text-foreground transition-colors border border-border hover:border-primary text-left"
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
                                    placeholder="Ask me anything..."
                                    className="flex-1 px-4 py-2.5 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!inputMessage.trim() || isTyping}
                                    className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20BA5A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 text-center">
                                Powered by AI • Instant responses
                            </p>
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
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#20BA5A] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all relative"
                    aria-label="Chat with AI"
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

                    {/* AI Badge */}
                    {!isOpen && (
                        <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] rounded-full font-bold">
                            AI
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
                    className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                    aria-label="Call us"
                >
                    <Phone className="w-7 h-7" />
                </motion.a>
            </div>
        </div>
    );
};

export default WhatsAppChat;
