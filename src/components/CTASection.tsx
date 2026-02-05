import { motion } from 'framer-motion';
import { Phone, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-2xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-secondary text-sm font-medium mb-6"
          >
            {t('cta.subtitle')}
          </motion.span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            {t('cta.title')} <br />
            <span className="text-gradient-gold">{t('cta.titleHighlight')}</span>
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-10">
            {t('cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="btn-gold flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              <span>{t('common.scheduleVisit')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+8801901372340"
              className="btn-outline-luxury !border-primary-foreground/30 !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>{t('common.callNow')}</span>
            </a>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <motion.a
              href="tel:+8801901372340"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl hover:bg-primary-foreground/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Phone className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-left">
                <p className="text-primary-foreground/70 text-sm">{t('cta.salesHotline')}</p>
                <p className="text-primary-foreground font-semibold">+880 1901 372340</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+8801647712961"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl hover:bg-primary-foreground/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-left">
                <p className="text-primary-foreground/70 text-sm">{t('cta.whatsapp')}</p>
                <p className="text-primary-foreground font-semibold">+880 1647 712961</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
