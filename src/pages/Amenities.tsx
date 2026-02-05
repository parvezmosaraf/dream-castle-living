import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
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

const amenities = [
  { icon: Bed, label: '3 Bedrooms', description: 'Spacious master and guest bedrooms with ample natural light and ventilation.' },
  { icon: Bath, label: '3 Bathrooms', description: 'Modern bathrooms with premium fittings and high-quality tiles.' },
  { icon: Sofa, label: 'Drawing Room', description: 'Elegant drawing room for hosting guests and family gatherings.' },
  { icon: UtensilsCrossed, label: 'Dining Space', description: 'Dedicated dining area connected to living spaces.' },
  { icon: LayoutGrid, label: 'Modern Kitchen', description: 'Well-designed kitchen with utility space and storage.' },
  { icon: Sun, label: '3 Balconies', description: 'Multiple balconies with panoramic views of the surroundings.' },
  { icon: Building, label: 'High-Speed Lift', description: 'Premium elevators for convenient access to all floors.' },
  { icon: Car, label: 'Parking Space', description: 'Dedicated parking spaces for residents.' },
  { icon: Flower2, label: 'Rooftop Garden', description: 'Beautifully landscaped rooftop for relaxation and gatherings.' },
  { icon: Wind, label: 'Prayer Space', description: 'Dedicated prayer area on the rooftop for spiritual activities.' },
  { icon: Video, label: 'CCTV Surveillance', description: '24/7 CCTV monitoring throughout the premises.' },
  { icon: Shield, label: '24/7 Security', description: 'Professional security team ensuring complete safety.' },
  { icon: Flame, label: 'Gas Supply', description: 'Pipeline gas connection for convenient cooking.' },
  { icon: Droplets, label: 'Water Supply', description: 'Round-the-clock water availability with backup.' },
  { icon: Zap, label: 'Power Backup', description: 'Reliable electricity with emergency backup systems.' },
  { icon: Waves, label: 'Lake View', description: 'Stunning views of the adjacent lake from your apartment.' },
  { icon: TreePine, label: 'Park Access', description: 'Direct access to the adjacent park for outdoor activities.' },
  { icon: Wifi, label: 'Internet Ready', description: 'Pre-wired units for high-speed internet connectivity.' },
];

const Amenities = () => {
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
              Premium Features
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
              World-Class <span className="text-gradient">Amenities</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              Every detail of The Dream Castle is designed for your comfort and luxury. 
              Experience modern living with premium amenities crafted for your lifestyle.
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
              Experience Luxury Living
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Schedule a visit to see these amenities in person and discover your future home.
            </p>
            <a href="/contact" className="btn-gold inline-flex items-center gap-2">
              Schedule a Visit
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Amenities;
