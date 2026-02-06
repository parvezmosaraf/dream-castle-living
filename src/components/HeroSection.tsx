import { motion } from 'framer-motion';
import { ArrowRight, Play, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-image.png';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Gradient Overlay - Reduced opacity for clearer image */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/30 rounded-full blur-3xl float-animation" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { label: t('hero.stats.landArea.label'), value: t('hero.stats.landArea.value'), unit: t('hero.stats.landArea.unit') },
              { label: t('hero.stats.buildingType.label'), value: t('hero.stats.buildingType.value'), unit: t('hero.stats.buildingType.unit') },
              { label: t('hero.stats.flatSize.label'), value: t('hero.stats.flatSize.value'), unit: t('hero.stats.flatSize.unit') },
              { label: t('hero.stats.emiPeriod.label'), value: t('hero.stats.emiPeriod.value'), unit: t('hero.stats.emiPeriod.unit') },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                <p className="text-3xl md:text-4xl font-display font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-foreground/70 text-sm">{stat.unit}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Content - Main Content */}
          <div className="space-y-8 p-8 md:p-10 rounded-3xl bg-primary/40 dark:bg-primary/50 backdrop-blur-xl border border-white/10 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border border-white/20 dark:border-gray-700/50 text-primary dark:text-white font-semibold text-sm mb-6">
                <MapPin className="w-4 h-4 text-secondary" />
                {t('hero.location')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight"
            >
              {t('hero.title')}
              <span className="block text-gradient-gold">{t('hero.titleHighlight')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground max-w-xl leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            {/* Price Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass-card-dark p-6 inline-block"
            >
              <p className="text-primary-foreground/70 text-sm mb-1">{t('hero.priceLabel')}</p>
              <p className="text-3xl md:text-4xl font-display font-bold text-secondary">
                {t('hero.price')}
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1">
                {t('hero.emi')}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                to="/project"
                className="btn-gold flex items-center gap-2 group"
              >
                <span>{t('hero.viewProject')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline-luxury !border-primary-foreground/30 !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                <span>{t('hero.bookVisit')}</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-foreground rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
