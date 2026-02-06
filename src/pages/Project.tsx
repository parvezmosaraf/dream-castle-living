import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
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
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import heroImage from '@/assets/hero-image.png';
import buildingHero from '@/assets/building-hero.jpeg';
import floorPlan1 from '@/assets/floor-plan-1.jpeg';
import floorPlan2 from '@/assets/floor-plan-2.jpeg';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import livingRoom from '@/assets/living-room.png';
import kitchen from '@/assets/kitchen.png';
import bedroomPhase2 from '@/assets/bedroom-phase2.png';
import rooftopPhase2 from '@/assets/rooftop-phase2.png';

const projectsData = [
  {
    id: 1,
    title: 'The Dream Castle',
    category: 'Ashulia Model Town',
    brandName: 'Sea Dream Construction',
    bedrooms: '3 BEDROOMS',
    status: 'ON SALE',
    image: heroImage,
    location: 'Ashulia Model Town',
    description: 'A premium residential development offering luxury living with world-class amenities and stunning lake views in Ashulia.',
    gallery: [
      { id: 1, image: livingRoom, title: 'Luxurious Living Room' },
      { id: 2, image: kitchen, title: 'Modern Modular Kitchen' },
      { id: 3, image: heroImage, title: 'Building Front View' },
    ],
    specifications: [
      { icon: Building2, label: 'Land Area', value: '10 Katha' },
      { icon: Layers, label: 'Building Type', value: 'B+G+10 Floors' },
      { icon: Home, label: 'Unit Size', value: '1550 Sqft' },
      { icon: MapPin, label: 'Location', value: 'Ashulia Model Town' },
      { icon: Calendar, label: 'EMI Period', value: '36 Months' },
      { icon: TrendingUp, label: 'Monthly Rent', value: '৳30-35K' },
    ],
    features: [
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
    ],
    floorPlans: [
      { title: 'Unit-B Layout', desc: '1080 Sqft - Typical Floor', image: floorPlan1 },
      { title: 'Full Floor Layout', desc: 'Complete floor arrangement', image: floorPlan2 },
    ],
    pricing: [
      { label: 'Base Price', value: '৳ 38,75,000' },
      { label: 'Share Price', value: '৳ 9,30,000' },
      { label: 'Down Payment', value: '৳ 6,00,000', highlight: true },
      { label: 'Monthly EMI (36 months)', value: '৳ 1,00,000/month', highlight: true },
      { label: 'Total Price', value: '৳ 48,05,000', bold: true },
    ]
  },
  {
    id: 2,
    title: 'Upcoming Project Phase II',
    category: 'Ashulia Model Town',
    brandName: 'Sea Dream Construction',
    bedrooms: '3 BEDROOMS',
    status: 'UPCOMING',
    image: buildingHero,
    location: 'Ashulia Model Town',
    description: 'Phase II of our prestigious development, offering even more premium features and modern living spaces in the heart of Ashulia.',
    gallery: [
      { id: 1, image: bedroomPhase2, title: 'Premium Smart Bedroom' },
      { id: 2, image: rooftopPhase2, title: 'Stunning Rooftop Lounge' },
      { id: 3, image: buildingHero, title: 'Phase II Concept' },
    ],
    specifications: [
      { icon: Building2, label: 'Land Area', value: '12 Katha' },
      { icon: Layers, label: 'Building Type', value: 'B+G+12 Floors' },
      { icon: Home, label: 'Unit Size', value: '1650 Sqft' },
      { icon: MapPin, label: 'Location', value: 'Ashulia (Near Zero Point)' },
      { icon: Calendar, label: 'EMI Period', value: '48 Months' },
      { icon: TrendingUp, label: 'Expected Rent', value: '৳35-40K' },
    ],
    features: [
      'Smart home integration systems',
      '3 Luxury bedrooms with walk-in closets',
      '3 Premium bathrooms with Italian fittings',
      'Expansive living and entertainment areas',
      'Large balconies with unobstructed lake views',
      'Dual high-speed premium elevators',
      'Covered parking with EV charging',
      'Sky lounge and infinity rooftop garden',
      'Advanced 3-tier security system',
      'Centralized gas and water purification',
    ],
    floorPlans: [
      { title: 'Premium Unit-A', desc: '1650 Sqft - Luxury Layout', image: floorPlan1 },
      { title: 'Typical Floor Phase II', desc: 'Optimized floor arrangement', image: floorPlan2 },
    ],
    pricing: [
      { label: 'Expected Base Price', value: '৳ 45,00,000' },
      { label: 'Booking Money', value: '৳ 5,00,000', highlight: true },
      { label: 'Down Payment', value: '৳ 10,00,000', highlight: true },
      { label: 'Flexible Monthly EMI', value: 'Negotiable', highlight: true },
      { label: 'Pre-launch Offer', value: 'Contact Sales', bold: true },
    ]
  }
];

const categories = [
  'All',
  'Ashulia Model Town'
];

const ImageGallerySection = ({ images }: { images: { id: number, image: string, title: string }[] }) => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Project Highlights
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
            Detailed <span className="text-gradient">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-border"
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-display font-bold text-lg">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectListingSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Explore More
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-4">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover other premium residential developments under Sea Dream Construction & Developments Ltd.
          </p>
        </motion.div>

        {/* Filters and Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap border ${activeCategory === category
                  ? 'bg-primary text-white border-primary shadow-lg scale-105'
                  : 'bg-card text-foreground/70 border-border hover:border-primary/50 hover:bg-muted'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="p-3 rounded-xl bg-card border border-border hover:bg-muted transition-colors shadow-sm">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-xl bg-card border border-border hover:bg-muted transition-colors shadow-sm">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="block"
                onClick={() => window.scrollTo(0, 0)}
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-card rounded-3xl overflow-hidden border border-border shadow-luxury hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md bg-opacity-90">
                      {project.status}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                      <MapPin className="w-3 h-3" />
                      {project.category}
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs mb-6">
                      <Home className="w-4 h-4" />
                      {project.bedrooms}
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between group/footer">
                      <span className="text-sm font-medium text-foreground/70 group-hover/footer:text-primary transition-colors">
                        {project.brandName}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover/footer:bg-primary group-hover/footer:text-white transition-all">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-xl">No other projects found in this category.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-4 text-primary font-bold hover:underline"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const projectId = id ? parseInt(id) : 1;
  const project = projectsData.find(p => p.id === projectId) || projectsData[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            key={project.id + '-hero'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              {project.brandName}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
              {project.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient">{project.title.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {project.specifications.map((spec, index) => (
              <motion.div
                key={spec.label + project.id}
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

      {/* Detailed Gallery Section */}
      <ImageGallerySection images={project.gallery} />

      {/* Floor Plans */}
      <section className="section-padding bg-muted/10">
        <div className="container mx-auto">
          <motion.div
            key={project.id + '-floor-header'}
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
            {project.floorPlans.map((plan, index) => (
              <motion.div
                key={plan.title + project.id}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden"
              >
                <img src={plan.image} alt={plan.title} className="w-full aspect-square object-contain" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground">{plan.title}</h3>
                  <p className="text-muted-foreground">{plan.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <motion.div
            key={project.id + '-features-header'}
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
            {project.features.map((feature, index) => (
              <motion.div
                key={feature + project.id}
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
              key={project.id + '-pricing-header'}
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
              {project.pricing.map((item) => (
                <div
                  key={item.label + project.id}
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

      {/* Projects Listing Integration at bottom */}
      <ProjectListingSection />

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Project;
