import { motion } from 'framer-motion';
import { ArrowRight, Images, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import buildingImage from '@/assets/building-hero.jpeg';
import floorPlan1 from '@/assets/floor-plan-1.jpeg';
import floorPlan2 from '@/assets/floor-plan-2.jpeg';
import video1 from '@/assets/video/video-1.mp4';
import video2 from '@/assets/video/video-2.mp4';

type MediaItem = {
  src: string;
  label: string;
  category: string;
  type: 'image' | 'video';
};

const GalleryPreview = () => {
  const { t } = useLanguage();

  const galleryItems: MediaItem[] = [
    { src: buildingImage, label: t('gallery.items.exteriorView'), category: t('gallery.categories.exterior'), type: 'image' },
    { src: video1, label: t('gallery.items.projectOverview'), category: t('gallery.categories.videoTour'), type: 'video' },
    { src: video2, label: t('gallery.items.siteProgress'), category: t('gallery.categories.videoTour'), type: 'video' },
    { src: floorPlan1, label: t('gallery.items.unitBFloorPlan'), category: t('gallery.categories.floorPlan'), type: 'image' },
    { src: floorPlan2, label: t('gallery.items.typicalFloor'), category: t('gallery.categories.floorPlan'), type: 'image' },
  ];

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
              {t('gallery.subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
              {t('gallery.title')} <span className="text-gradient">{t('gallery.titleHighlight')}</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              {t('gallery.description')}
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
              <span>{t('gallery.viewFullGallery')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-500"
            >
              {/* Consistent aspect ratio for all cards */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  />
                )}
              </div>

              {/* Gradient Overlay - Always visible but intensifies on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent group-hover:from-primary/95 group-hover:via-primary/40 transition-all duration-300 pointer-events-none" />

              {/* Content - Always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-primary-foreground text-lg md:text-xl font-display font-bold mt-2 leading-tight">
                  {item.label}
                </h3>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 pointer-events-none">
                <span className="px-3 py-1.5 bg-card/95 backdrop-blur-sm rounded-full text-xs font-semibold text-primary shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play className="w-5 h-5 text-secondary" />
                  ) : (
                    <Images className="w-5 h-5 text-secondary" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
