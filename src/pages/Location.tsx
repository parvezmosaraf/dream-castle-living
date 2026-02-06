import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
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

const locationFeatures = [
  {
    icon: GraduationCap,
    label: 'Educational Hub',
    description: 'Multiple universities and colleges within close proximity',
    items: ['BRAC University', 'North South University Area', 'Various Schools']
  },
  {
    icon: Waves,
    label: 'Lake View',
    description: 'Beautiful lakeside location with serene views',
    items: ['Direct lake view from apartments', 'Peaceful environment', 'Natural beauty']
  },
  {
    icon: TreePine,
    label: 'Green Spaces',
    description: 'Adjacent park and lush surroundings',
    items: ['Public park access', 'Rooftop garden', 'Tree-lined streets']
  },
  {
    icon: Route,
    label: 'Future Connectivity',
    description: 'Upcoming infrastructure developments',
    items: ['Future bridge to Uttara', 'Road expansion planned', 'Metro connectivity']
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

const Location = () => {
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
              Prime Location
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
              Strategic <span className="text-gradient">Location</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              Situated in the heart of Ashulia, The Dream Castle offers unparalleled
              connectivity and a perfect blend of urban convenience and natural beauty.
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
                    <h3 className="font-display font-bold text-foreground text-lg">Project Address</h3>
                    <p className="text-muted-foreground mt-2">
                      Ashulia Model Town, Block-H, Lake View Corner<br />
                      Amin Model Town, Birulia, Saver, Dhaka
                    </p>
                    <a
                      href="https://maps.app.goo.gl/7TU1cYZCLKjLKMcXA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:underline"
                    >
                      <span>Open in Google Maps</span>
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
              { icon: Route, label: 'Future Bridge', description: 'Upcoming bridge connecting directly to Uttara' },
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
