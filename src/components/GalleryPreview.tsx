import { motion } from 'framer-motion';
import { ArrowRight, Images } from 'lucide-react';
import { Link } from 'react-router-dom';
import buildingImage from '@/assets/building-hero.jpeg';
import floorPlan1 from '@/assets/floor-plan-1.jpeg';
import floorPlan2 from '@/assets/floor-plan-2.jpeg';

const galleryImages = [
  { src: buildingImage, label: 'Exterior View', category: 'Exterior' },
  { src: floorPlan1, label: 'Unit-B Floor Plan', category: 'Floor Plan' },
  { src: floorPlan2, label: 'Typical Floor', category: 'Floor Plan' },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Visual Tour
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
              Project <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Explore our stunning designs and spacious floor plans. See the quality 
              and craftsmanship that defines The Dream Castle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/gallery"
              className="btn-outline-luxury flex items-center gap-2 group whitespace-nowrap"
            >
              <Images className="w-5 h-5" />
              <span>View Full Gallery</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <div className={`${index === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'} w-full`}>
                <img
                  src={image.src}
                  alt={image.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-secondary text-sm font-medium">{image.category}</span>
                <h3 className="text-primary-foreground text-xl font-display font-bold mt-1">
                  {image.label}
                </h3>
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
