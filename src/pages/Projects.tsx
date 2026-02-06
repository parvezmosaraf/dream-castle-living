import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, MapPin, Home, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-image.png';
import buildingHero from '@/assets/building-hero.jpeg';

interface ProjectItem {
    id: number;
    title: string;
    category: string;
    brandName: string;
    bedrooms: string;
    status: string;
    image: string;
    location: string;
}

const projectsData: ProjectItem[] = [
    {
        id: 1,
        title: 'The Premium Legacy Residence',
        category: 'Ashulia Model Town',
        brandName: 'The Premium Smart City',
        bedrooms: '3 BEDROOMS',
        status: 'ON SALE',
        image: heroImage,
        location: 'Ashulia Model Town',
    },
    {
        id: 2,
        title: 'The Premium Nobel Court',
        category: 'Ashulia Model Town',
        brandName: 'The Premium Smart City',
        bedrooms: '1, 2 BEDROOMS & PENTHOUSE',
        status: 'ON SALE',
        image: buildingHero,
        location: 'Ashulia Model Town',
    },
    {
        id: 3,
        title: 'The Maple Heights Apartment',
        category: 'The Premium Smart City',
        brandName: 'The Premium Smart City',
        bedrooms: '4 BEDROOMS',
        status: 'ON SALE',
        image: heroImage,
        location: 'The Premium Smart City',
    },
    {
        id: 4,
        title: 'The Premium Lakeview Terrace',
        category: 'Ashulia Model Town',
        brandName: 'Ashulia Model Town',
        bedrooms: '3 BEDROOMS',
        status: 'ON SALE',
        image: buildingHero,
        location: 'Ashulia Model Town',
    },
    {
        id: 5,
        title: 'The Premium Royal Palace',
        category: 'The Premium Royal City',
        brandName: 'The Premium Royal City',
        bedrooms: '3, 4 BEDROOMS',
        status: 'ON SALE',
        image: heroImage,
        location: 'The Premium Royal City',
    },
    {
        id: 6,
        title: 'Bashundhara Elite Living',
        category: 'Bashundhara Residencial Area',
        brandName: 'Bashundhara Group',
        bedrooms: '4 BEDROOMS',
        status: 'ON SALE',
        image: buildingHero,
        location: 'Bashundhara Residencial Area',
    }
];

const categories = [
    'All',
    'The Premium Smart City',
    'Ashulia Model Town',
    'The Premium Royal City',
    'Bashundhara Residencial Area'
];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const { t } = useLanguage();

    const filteredProjects = activeCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 md:px-8">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                            Our <span className="text-gradient">Projects</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Explore our premium range of residential developments across the most prime locations in the city.
                        </p>
                    </div>

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
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group bg-card rounded-3xl overflow-hidden border border-border shadow-luxury hover:shadow-2xl transition-all duration-500"
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

                                        <div className="pt-4 border-t border-border flex items-center justify-between group/footer cursor-pointer">
                                            <span className="text-sm font-medium text-foreground/70 group-hover/footer:text-primary transition-colors">
                                                {project.brandName}
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover/footer:bg-primary group-hover/footer:text-white transition-all">
                                                <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground text-xl">No projects found in this category.</p>
                            <button
                                onClick={() => setActiveCategory('All')}
                                className="mt-4 text-primary font-bold hover:underline"
                            >
                                Show all projects
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
            <WhatsAppChat />
        </div>
    );
};

export default Projects;
