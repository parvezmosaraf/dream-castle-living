import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  MapPin,
  GraduationCap,
  TreePine,
  Waves,
  Route,
  Building2,
  ShoppingBag,
  Bus,
  Check
} from 'lucide-react';

const Location = () => {
  const { t } = useLanguage();

  const locationFeatures = [
    {
      icon: GraduationCap,
      label: t('location.nearUniversities'),
      description: t('location.nearUniversitiesDesc'),
      items: t('location.universities') as unknown as string[]
    },
    {
      icon: Waves,
      label: t('location.lakeView'),
      description: t('location.lakeViewDesc'),
      items: [
        t('amenities.items.lakeView.label'),
        t('contact.whyChoose.items')[3], // Prime lake-view location
        t('pricing.features')[5] // Lake view location
      ]
    },
    {
      icon: TreePine,
      label: t('location.parkAccess'),
      description: t('location.parkAccessDesc'),
      items: [
        t('amenities.items.parkAccess.label'),
        t('amenities.items.rooftopGarden.label'),
        t('pricing.features')[4] // Balconies with views (approx)
      ]
    },
    {
      icon: Route,
      label: t('location.futureBridge'),
      description: t('location.futureBridgeDesc'),
      items: [
        t('pricing.benefits.futureBridge'),
        'Road expansion planned',
        'Metro connectivity'
      ]
    },
    {
      icon: Building2,
      label: 'Prime Location',
      description: 'Strategic position in Ashulia Model Town',
      items: ['Block-H corner plot', '50ft wide road', 'Lake view corner']
    },
    {
      icon: ShoppingBag,
      label: 'Daily Needs',
      description: 'Essential services within reach',
      items: ['Markets nearby', 'Shopping centers', 'Healthcare facilities']
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              {t('location.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
              {t('location.title')} <span className="text-gradient">{t('location.titleHighlight')}</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              {t('location.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="rounded-3xl overflow-hidden shadow-luxury-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.9999999999995!2d90.3362!3d23.9123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU0JzQ0LjMiTiA5MMKwMjAnMTAuMyJF!5e0!3m2!1sen!2sbd!4v1234567890"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Project Location"
                  className="w-full"
                />
              </div>

              {/* Address Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6 mt-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg">{t('contact.info.officeAddress')}</h3>
                    <p className="text-muted-foreground mt-2">
                      {t('location.mapSubtitle')}<br />
                      {t('contact.info.address').split('\n').pop()}
                    </p>
                    <a
                      href="https://maps.app.goo.gl/7TU1cYZCLKjLKMcXA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:underline"
                    >
                      <span>{t('common.openInMaps')}</span>
                      <Route className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Location Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
                Location Advantages
              </h2>

              {locationFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        {feature.label}
                      </h3>
                      <p className="text-muted-foreground mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                            <Check className="w-4 h-4 text-secondary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Connectivity & Access
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Bus, label: '50ft Road', description: 'Wide main road for easy access and transportation' },
              { icon: Route, label: t('location.futureBridge'), description: t('location.futureBridgeDesc') },
              { icon: Building2, label: 'Strategic Location', description: 'Central position in growing Ashulia area' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.label}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Location;
