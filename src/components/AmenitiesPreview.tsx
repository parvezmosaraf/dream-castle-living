import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
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
} from 'lucide-react';

const amenities = [
  { icon: Bed, label: '3 Bedrooms', description: 'Spacious master suites' },
  { icon: Bath, label: '3 Bathrooms', description: 'Modern fixtures' },
  { icon: Building, label: 'Elevator', description: 'High-speed lifts' },
  { icon: Car, label: 'Parking', description: 'Dedicated spaces' },
  { icon: Flower2, label: 'Rooftop Garden', description: 'Green relaxation' },
  { icon: Shield, label: '24/7 Security', description: 'Complete safety' },
  { icon: Video, label: 'CCTV', description: 'Surveillance system' },
  { icon: Flame, label: 'Gas Supply', description: 'Pipeline connection' },
  { icon: Droplets, label: 'Water Supply', description: '24/7 availability' },
  { icon: Waves, label: 'Lake View', description: 'Scenic beauty' },
  { icon: TreePine, label: 'Park Access', description: 'Adjacent park' },
  { icon: Wifi, label: 'Internet Ready', description: 'Pre-wired units' },
];

const AmenitiesPreview = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Premium Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
              World-Class <span className="text-gradient">Amenities</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Every detail is crafted for comfort and luxury. Experience modern living 
              with premium amenities designed for your lifestyle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/amenities"
              className="btn-outline-luxury flex items-center gap-2 group whitespace-nowrap"
            >
              <span>View All Amenities</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card p-6 text-center hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <amenity.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{amenity.label}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesPreview;
