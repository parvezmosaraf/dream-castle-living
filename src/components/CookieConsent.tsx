import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check, Settings } from 'lucide-react';

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true, // Always true, can't be disabled
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Show banner after 1 second delay
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        setPreferences(allAccepted);
        saveCookiePreferences(allAccepted);
        setShowBanner(false);
    };

    const handleRejectAll = () => {
        const onlyNecessary = {
            necessary: true,
            analytics: false,
            marketing: false,
        };
        setPreferences(onlyNecessary);
        saveCookiePreferences(onlyNecessary);
        setShowBanner(false);
    };

    const handleSavePreferences = () => {
        saveCookiePreferences(preferences);
        setShowBanner(false);
        setShowSettings(false);
    };

    const saveCookiePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem('cookieConsent', JSON.stringify(prefs));
        localStorage.setItem('cookieConsentDate', new Date().toISOString());

        // Here you would typically initialize analytics/marketing scripts based on preferences
        if (prefs.analytics) {
            // Initialize Google Analytics
            console.log('Analytics enabled');
        }
        if (prefs.marketing) {
            // Initialize marketing pixels
            console.log('Marketing enabled');
        }
    };

    const togglePreference = (key: keyof CookiePreferences) => {
        if (key === 'necessary') return; // Can't disable necessary cookies
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    if (!showBanner) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
            >
                <div className="container mx-auto max-w-6xl">
                    <div className="glass-card-dark border border-white/10 shadow-2xl">
                        {!showSettings ? (
                            // Simple Banner
                            <div className="p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <Cookie className="w-8 h-8 text-secondary" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-display font-bold text-white mb-2">
                                            We Value Your Privacy
                                        </h3>
                                        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
                                            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                                            By clicking "Accept All", you consent to our use of cookies.
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                onClick={handleAcceptAll}
                                                className="btn-gold flex items-center gap-2 !py-2 !px-6"
                                            >
                                                <Check className="w-4 h-4" />
                                                Accept All
                                            </button>

                                            <button
                                                onClick={handleRejectAll}
                                                className="btn-outline-luxury !border-white/30 !text-white hover:!bg-white/10 !py-2 !px-6"
                                            >
                                                Reject All
                                            </button>

                                            <button
                                                onClick={() => setShowSettings(true)}
                                                className="btn-outline-luxury !border-white/30 !text-white hover:!bg-white/10 flex items-center gap-2 !py-2 !px-6"
                                            >
                                                <Settings className="w-4 h-4" />
                                                Customize
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleRejectAll}
                                        className="flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-colors"
                                        aria-label="Close"
                                    >
                                        <X className="w-5 h-5 text-white/60" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            // Settings Panel
                            <div className="p-6 md:p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-display font-bold text-white">
                                        Cookie Preferences
                                    </h3>
                                    <button
                                        onClick={() => setShowSettings(false)}
                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                    >
                                        <X className="w-5 h-5 text-white/60" />
                                    </button>
                                </div>

                                <div className="space-y-4 mb-6">
                                    {/* Necessary Cookies */}
                                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-semibold text-white">Necessary Cookies</h4>
                                                <div className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full">
                                                    Always Active
                                                </div>
                                            </div>
                                            <p className="text-white/70 text-sm">
                                                Essential for the website to function properly. These cookies enable basic features like page navigation and access to secure areas.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Analytics Cookies */}
                                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-semibold text-white">Analytics Cookies</h4>
                                                <button
                                                    onClick={() => togglePreference('analytics')}
                                                    className={`relative w-12 h-6 rounded-full transition-colors ${preferences.analytics ? 'bg-secondary' : 'bg-white/20'
                                                        }`}
                                                >
                                                    <span
                                                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                            <p className="text-white/70 text-sm">
                                                Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Marketing Cookies */}
                                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-semibold text-white">Marketing Cookies</h4>
                                                <button
                                                    onClick={() => togglePreference('marketing')}
                                                    className={`relative w-12 h-6 rounded-full transition-colors ${preferences.marketing ? 'bg-secondary' : 'bg-white/20'
                                                        }`}
                                                >
                                                    <span
                                                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                            <p className="text-white/70 text-sm">
                                                Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <button
                                        onClick={handleSavePreferences}
                                        className="btn-gold flex items-center gap-2 !py-2 !px-6"
                                    >
                                        <Check className="w-4 h-4" />
                                        Save Preferences
                                    </button>

                                    <button
                                        onClick={handleAcceptAll}
                                        className="btn-outline-luxury !border-white/30 !text-white hover:!bg-white/10 !py-2 !px-6"
                                    >
                                        Accept All
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CookieConsent;
