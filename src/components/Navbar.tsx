import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import logoWhite from '@/assets/logo-white.png';
import logoDark from '@/assets/logo.png';

const navLinks = [
  { name: 'nav.home', href: '/' },
  { name: 'nav.project', href: '/project' },
  { name: 'nav.amenities', href: '/amenities' },
  { name: 'nav.gallery', href: '/gallery' },
  { name: 'nav.location', href: '/location' },
  { name: 'nav.contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar background based on page and scroll state
  const getNavbarClasses = () => {
    if (isHomePage) {
      // Homepage: glassmorphism effect
      return isScrolled
        ? 'bg-card/80 backdrop-blur-2xl shadow-luxury py-3 border-b border-white/10'
        : 'bg-primary/20 backdrop-blur-xl py-5 border-b border-white/5';
    } else {
      // Other pages: solid background
      return 'bg-card shadow-luxury py-3 border-b border-border';
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavbarClasses()}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={isHomePage ? logoWhite : logoDark}
              alt="Sea Dream Developments"
              className="h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative font-medium transition-colors duration-300 ${isHomePage
                    ? (isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-secondary')
                    : 'text-foreground/80 hover:text-primary'
                    } ${!isActive ? 'animated-underline' : ''}`}
                >
                  {t(link.name)}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className={`px-3 py-1.5 rounded-lg font-semibold text-sm transition-all ${isHomePage
                ? (isScrolled ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'bg-white/10 text-white hover:bg-white/20')
                : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
            >
              {language === 'en' ? 'বাং' : 'EN'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${isHomePage
                ? (isScrolled ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'bg-white/10 text-white hover:bg-white/20')
                : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="tel:+8801901372340"
              className={`flex items-center gap-2 transition-colors ${isHomePage
                ? (isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-secondary')
                : 'text-foreground/80 hover:text-primary'
                }`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{t('nav.phone')}</span>
            </a>
            <Link
              to="/contact"
              className="btn-luxury flex items-center gap-2 !py-3 !px-6"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('nav.bookVisit')}</span>
            </Link>
          </div>

          {/* Mobile Menu Button + Toggles */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Language Toggle - Mobile */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className={`px-2.5 py-1.5 rounded-lg font-semibold text-xs transition-all ${isHomePage
                ? (isScrolled ? 'bg-primary/10 text-primary' : 'bg-white/10 text-white')
                : 'bg-primary/10 text-primary'
                }`}
            >
              {language === 'en' ? 'বাং' : 'EN'}
            </button>

            {/* Theme Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-lg transition-all ${isHomePage
                ? (isScrolled ? 'bg-primary/10 text-primary' : 'bg-white/10 text-white')
                : 'bg-primary/10 text-primary'
                }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${isHomePage
                ? (isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-secondary')
                : 'text-foreground hover:text-primary'
                }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card/98 backdrop-blur-xl border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-lg font-medium text-foreground/80 hover:text-primary transition-colors border-b border-border/50"
                  >
                    {t(link.name)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 space-y-3"
              >
                <a
                  href="tel:+8801901372340"
                  className="flex items-center justify-center gap-2 py-3 text-primary font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>+880 1901 372340</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-luxury flex items-center justify-center gap-2 w-full"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Visit</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
