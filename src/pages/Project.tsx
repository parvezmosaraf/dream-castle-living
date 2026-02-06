import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import { generateBrochure } from '@/utils/brochureGenerator';
import {
  Check,
  ArrowRight,
  FileText,
  Building2,
  Layers,
  MapPin,
  Calendar,
  TrendingUp,
  Shield,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.png';
import floorPlan1 from '@/assets/floor-plan-1.jpeg';
import floorPlan2 from '@/assets/floor-plan-2.jpeg';

const Project = () => {
  const specifications = [
    { icon: Building2, label: 'Land Area', value: '10 Katha' },
    { icon: Layers, label: 'Building Type', value: 'B+G+10 Floors' },
    { icon: Home, label: 'Unit Size', value: '1550 Sqft' },
    { icon: MapPin, label: 'Location', value: 'Ashulia Model Town' },
    { icon: Calendar, label: 'EMI Period', value: '36 Months' },
    { icon: TrendingUp, label: 'Monthly Rent', value: '৳30-35K' },
  ];

  const features = [
    '3 Spacious bedrooms with attached balconies',
    '3 Modern bathrooms with premium fittings',
    'Large drawing and dining area',
    'Modern kitchen with utility space',
    '3 Balconies with panoramic views',
    'High-speed elevators',
    'Dedicated parking space',
    'Rooftop garden with prayer space',
    '24/7 CCTV surveillance',
    'Professional security team',
    'Gas, water, electricity supply',
    'Lake view from living areas',
    'Adjacent park access',
    '50ft wide road frontage',
    'Near future Uttara bridge',
    'Close to universities',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="The Dream Castle" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Sea Dream Developments Ltd.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
              The Dream <span className="text-gradient">Castle</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              A premium residential development offering luxury living with world-class
              amenities and stunning lake views in Ashulia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">{spec.label}</p>
                <p className="font-display font-bold text-lg text-foreground">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Flat Layout
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
              Floor <span className="text-gradient">Plans</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
            >
              <img src={floorPlan1} alt="Unit-B Floor Plan" className="w-full aspect-square object-contain" />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">Unit-B Layout</h3>
                <p className="text-muted-foreground">1080 Sqft - Typical Floor</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
            >
              <img src={floorPlan2} alt="Typical Floor Plan" className="w-full aspect-square object-contain" />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">Full Floor Layout</h3>
                <p className="text-muted-foreground">Complete floor arrangement</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
              Features & Benefits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex items-start gap-3 p-4 bg-primary-foreground/5 rounded-xl"
              >
                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-secondary" />
                </div>
                <span className="text-primary-foreground/90">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto glass-card p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Investment Details
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                Pricing & Payment Plan
              </h2>
            </motion.div>

            <div className="space-y-4 mb-8">
              {[
                { label: 'Base Price', value: '৳ 38,75,000' },
                { label: 'Share Price', value: '৳ 9,30,000' },
                { label: 'Down Payment', value: '৳ 6,00,000', highlight: true },
                { label: 'Monthly EMI (36 months)', value: '৳ 1,00,000/month', highlight: true },
                { label: 'Total Price', value: '৳ 48,05,000', bold: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex justify-between items-center py-4 border-b border-border ${item.bold ? 'border-none pt-6' : ''
                    }`}
                >
                  <span className={`${item.bold ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                    {item.label}
                  </span>
                  <span className={`${item.bold
                    ? 'text-2xl font-display font-bold text-gradient'
                    : item.highlight
                      ? 'font-bold text-primary text-lg'
                      : 'font-semibold text-foreground text-lg'
                    }`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-luxury flex items-center gap-2">
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button onClick={generateBrochure} className="btn-outline-luxury flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Project;
