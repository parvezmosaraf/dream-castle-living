import { motion } from 'framer-motion';
import { Check, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateBrochure } from '@/utils/brochureGenerator';
import { useLanguage } from '@/contexts/LanguageContext';

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            {t('pricing.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mt-4">
            {t('pricing.title')}
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            {t('pricing.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 glass-card p-8 md:p-10 bg-card"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left - Price Breakdown */}
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  {t('pricing.paymentStructure')}
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">{t('pricing.basePrice')}</span>
                    <span className="font-bold text-foreground text-lg">৳ 38,75,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">{t('pricing.sharePrice')}</span>
                    <span className="font-bold text-foreground text-lg">৳ 9,30,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">{t('pricing.downPayment')}</span>
                    <span className="font-bold text-secondary text-lg">৳ 6,00,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">{t('pricing.emi')}</span>
                    <span className="font-bold text-primary text-lg">৳ 1,00,000/mo</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-semibold text-foreground">{t('pricing.totalPrice')}</span>
                    <span className="font-bold text-2xl text-gradient">৳ 48,05,000</span>
                  </div>
                </div>
              </div>

              {/* Right - Features */}
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  {t('pricing.whatsIncluded')}
                </h3>
                <ul className="space-y-3">
                  {t('pricing.features').map((feature: string, index: number) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-border">
              <Link to="/contact" className="btn-luxury flex items-center gap-2">
                <span>{t('common.bookNow')}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button onClick={generateBrochure} className="btn-outline-luxury flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>{t('common.downloadBrochure')}</span>
              </button>
            </div>
          </motion.div>

          {/* ROI Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card-dark p-8 bg-secondary/10 backdrop-blur-xl border border-secondary/20"
          >
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                {t('pricing.investmentReturns')}
              </h3>

              <div className="py-8 border-y border-primary-foreground/20 my-6">
                <p className="text-primary-foreground/70 text-sm mb-2">{t('pricing.monthlyRental')}</p>
                <p className="text-5xl font-display font-bold text-secondary">
                  ৳30-35K
                </p>
                <p className="text-primary-foreground/70 text-sm mt-2">{t('pricing.perMonth')}</p>
              </div>

              <ul className="space-y-4 text-left">
                <li className="flex items-center gap-3 text-primary-foreground/80">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>{t('pricing.benefits.highDemand')}</span>
                </li>
                <li className="flex items-center gap-3 text-primary-foreground/80">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>{t('pricing.benefits.nearUniversities')}</span>
                </li>
                <li className="flex items-center gap-3 text-primary-foreground/80">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>{t('pricing.benefits.growingValue')}</span>
                </li>
                <li className="flex items-center gap-3 text-primary-foreground/80">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>{t('pricing.benefits.futureBridge')}</span>
                </li>
              </ul>

              <Link
                to="/project"
                className="btn-gold w-full flex items-center justify-center gap-2 mt-8"
              >
                <span>{t('common.learnMore')}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
