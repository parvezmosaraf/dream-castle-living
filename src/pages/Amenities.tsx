import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Bed,
  Bath,
  Building,
  Car,
  Wifi,
  Shield,
  Flower2,
  Droplets,
  Waves,
  TreePine,
  Flame,
  Video,
  Zap,
  Wind,
  UtensilsCrossed,
  Sofa,
  LayoutGrid,
  Sun,
} from 'lucide-react';

const Amenities = () => {
  const { t } = useLanguage();

  const amenities = [
    { icon: Bed, label: t('amenities.items.bedrooms.label'), description: t('amenities.items.bedrooms.description') },
    { icon: Bath, label: t('amenities.items.bathrooms.label'), description: t('amenities.items.bathrooms.description') },
    { icon: Sofa, label: t('amenities.items.drawingRoom.label'), description: t('amenities.items.drawingRoom.description') },
    { icon: UtensilsCrossed, label: t('amenities.items.diningSpace.label'), description: t('amenities.items.diningSpace.description') },
    { icon: LayoutGrid, label: t('amenities.items.kitchen.label'), description: t('amenities.items.kitchen.description') },
    { icon: Sun, label: t('amenities.items.balconies.label'), description: t('amenities.items.balconies.description') },
    { icon: Building, label: t('amenities.items.lift.label'), description: t('amenities.items.lift.description') },
    { icon: Car, label: t('amenities.items.parking.label'), description: t('amenities.items.parking.description') },
    { icon: Flower2, label: t('amenities.items.rooftopGarden.label'), description: t('amenities.items.rooftopGarden.description') },
    { icon: Wind, label: t('amenities.items.prayerSpace.label'), description: t('amenities.items.prayerSpace.description') },
    { icon: Video, label: t('amenities.items.cctv.label'), description: t('amenities.items.cctv.description') },
    { icon: Shield, label: t('amenities.items.security.label'), description: t('amenities.items.security.description') },
    { icon: Flame, label: t('amenities.items.gas.label'), description: t('amenities.items.gas.description') },
    { icon: Droplets, label: t('amenities.items.water.label'), description: t('amenities.items.water.description') },
    { icon: Zap, label: t('amenities.items.power.label'), description: t('amenities.items.power.description') },
    { icon: Waves, label: t('amenities.items.lakeView.label'), description: t('amenities.items.lakeView.description') },
    { icon: TreePine, label: t('amenities.items.parkAccess.label'), description: t('amenities.items.parkAccess.description') },
    { icon: Wifi, label: t('amenities.items.internet.label'), description: t('amenities.items.internet.description') },
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
              {t('amenities.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
              {t('amenities.title')} <span className="text-gradient">{t('amenities.titleHighlight')}</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              {t('amenities.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-8 hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <amenity.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {amenity.label}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              {t('amenities.ctaTitle')}
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              {t('amenities.ctaDescription')}
            </p>
            <a href="/contact" className="btn-gold inline-flex items-center gap-2">
              {t('common.scheduleVisit')}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Amenities;
