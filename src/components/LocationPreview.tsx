import { motion } from 'framer-motion';
import { MapPin, ArrowRight, GraduationCap, TreePine, Waves, Route } from 'lucide-react';
import { Link } from 'react-router-dom';

const locationFeatures = [
  { icon: GraduationCap, label: 'Near Universities', description: 'Multiple educational institutions nearby' },
  { icon: Waves, label: 'Lake View', description: 'Beautiful lakeside location' },
  { icon: TreePine, label: 'Park Access', description: 'Adjacent to green park' },
  { icon: Route, label: 'Future Bridge', description: 'Upcoming Uttara connection' },
];

const LocationPreview = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-luxury-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.9999999999995!2d90.3362!3d23.9123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU0JzQ0LjMiTiA5MMKwMjAnMTAuMyJF!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Project Location"
                className="w-full"
              />
            </div>
            
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 left-6 right-6 glass-card p-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">The Dream Castle</h4>
                <p className="text-sm text-muted-foreground">
                  Ashulia Model Town, Block-H, Lake View Corner
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Prime Location
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
                Strategic <span className="text-gradient">Location</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Situated in the heart of Ashulia, The Dream Castle offers unparalleled 
                connectivity and lifestyle. Enjoy the perfect blend of urban convenience 
                and natural beauty.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {locationFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.label}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://maps.app.goo.gl/7TU1cYZCLKjLKMcXA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                <span>Open in Maps</span>
              </a>
              <Link
                to="/location"
                className="btn-outline-luxury flex items-center gap-2 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationPreview;
