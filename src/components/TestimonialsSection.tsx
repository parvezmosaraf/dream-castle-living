import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
    id: number;
    name: string;
    profession: string;
    location: string;
    rating: number;
    review: string;
    apartment: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Mohammad Karim',
        profession: 'Business Owner',
        location: 'Dhaka',
        rating: 5,
        review: 'Dream Castle Living exceeded all my expectations. The lake view is breathtaking, and the quality of construction is outstanding. Best investment decision I made!',
        apartment: 'Unit B-501',
    },
    {
        id: 2,
        name: 'Fatema Rahman',
        profession: 'University Professor',
        location: 'Ashulia',
        rating: 5,
        review: 'Perfect location for my family. Close to universities, peaceful environment, and excellent amenities. The team was very professional throughout the process.',
        apartment: 'Unit A-302',
    },
    {
        id: 3,
        name: 'Abdul Jabbar',
        profession: 'Engineer',
        location: 'Savar',
        rating: 5,
        review: 'The spacious 1550 sqft layout is perfect for my growing family. The lake view from the balcony is simply amazing. Highly recommended!',
        apartment: 'Unit C-701',
    },
    {
        id: 4,
        name: 'Nasrin Akter',
        profession: 'Doctor',
        location: 'Mirpur',
        rating: 5,
        review: 'Excellent investment opportunity. The EMI plan made it very affordable, and the rental income potential is great. Very satisfied with my purchase.',
        apartment: 'Unit B-402',
    },
    {
        id: 5,
        name: 'Rafiqul Islam',
        profession: 'Businessman',
        location: 'Uttara',
        rating: 5,
        review: 'Sea Dream Construction delivered on all their promises. The quality, location, and amenities are top-notch. Worth every taka!',
        apartment: 'Unit A-601',
    },
    {
        id: 6,
        name: 'Shahana Begum',
        profession: 'Banker',
        location: 'Dhanmondi',
        rating: 5,
        review: 'Beautiful apartment with modern amenities. The security system and backup power are excellent. My family feels safe and comfortable here.',
        apartment: 'Unit C-303',
    },
    {
        id: 7,
        name: 'Aminul Haque',
        profession: 'IT Professional',
        location: 'Gulshan',
        rating: 5,
        review: 'Great value for money! The location is strategic, and the future bridge to Uttara will make it even more valuable. Smart investment!',
        apartment: 'Unit B-801',
    },
    {
        id: 8,
        name: 'Roksana Khatun',
        profession: 'Teacher',
        location: 'Ashulia',
        rating: 5,
        review: 'The peaceful lakeside environment is perfect for my children. Excellent educational institutions nearby. Very happy with our new home!',
        apartment: 'Unit A-404',
    },
    {
        id: 9,
        name: 'Jahangir Alam',
        profession: 'Architect',
        location: 'Banani',
        rating: 5,
        review: 'As an architect, I appreciate the thoughtful design and quality construction. The floor plan is very efficient and practical.',
        apartment: 'Unit C-502',
    },
    {
        id: 10,
        name: 'Taslima Nasrin',
        profession: 'Entrepreneur',
        location: 'Mohammadpur',
        rating: 5,
        review: 'Fantastic project! The team was very helpful, and the payment plan was flexible. The apartment quality is exceptional.',
        apartment: 'Unit B-203',
    },
    {
        id: 11,
        name: 'Habibur Rahman',
        profession: 'Government Officer',
        location: 'Mirpur',
        rating: 5,
        review: 'Excellent location with great connectivity. The lake view adds tremendous value. Very professional developer team.',
        apartment: 'Unit A-705',
    },
    {
        id: 12,
        name: 'Sultana Razia',
        profession: 'Pharmacist',
        location: 'Uttara',
        rating: 5,
        review: 'Beautiful apartment in a serene location. The amenities are world-class, and the construction quality is superb.',
        apartment: 'Unit C-604',
    },
    {
        id: 13,
        name: 'Mizanur Rahman',
        profession: 'Lawyer',
        location: 'Dhanmondi',
        rating: 5,
        review: 'Transparent dealings and quality construction. The legal documentation was smooth. Highly recommend Sea Dream!',
        apartment: 'Unit B-901',
    },
    {
        id: 14,
        name: 'Ayesha Siddika',
        profession: 'Journalist',
        location: 'Savar',
        rating: 5,
        review: 'Perfect blend of modern living and natural beauty. The lake view is therapeutic. Best decision for my family!',
        apartment: 'Unit A-503',
    },
    {
        id: 15,
        name: 'Nurul Islam',
        profession: 'Accountant',
        location: 'Ashulia',
        rating: 5,
        review: 'Great investment with excellent ROI potential. The rental demand in this area is very high. Very satisfied!',
        apartment: 'Unit C-402',
    },
    {
        id: 16,
        name: 'Parveen Akhter',
        profession: 'Homemaker',
        location: 'Gulshan',
        rating: 5,
        review: 'Spacious rooms, beautiful views, and safe environment for children. The community is very friendly. Love our new home!',
        apartment: 'Unit B-304',
    },
    {
        id: 17,
        name: 'Shamsul Huda',
        profession: 'Consultant',
        location: 'Banani',
        rating: 5,
        review: 'Premium quality at a reasonable price. The EMI plan made it very affordable. Excellent project management!',
        apartment: 'Unit A-802',
    },
    {
        id: 18,
        name: 'Monira Begum',
        profession: 'NGO Worker',
        location: 'Mirpur',
        rating: 5,
        review: 'Peaceful location with all modern facilities. The backup power and security are excellent. Very happy with the purchase!',
        apartment: 'Unit C-205',
    },
    {
        id: 19,
        name: 'Delwar Hossain',
        profession: 'Pharmacist',
        location: 'Uttara',
        rating: 5,
        review: 'Strategic location near universities. Perfect for rental investment. The construction quality is top-notch!',
        apartment: 'Unit B-603',
    },
    {
        id: 20,
        name: 'Rehana Khatun',
        profession: 'Social Worker',
        location: 'Ashulia',
        rating: 5,
        review: 'Beautiful apartment with lake view. The natural environment is perfect for family living. Highly recommended!',
        apartment: 'Unit A-404',
    },
    {
        id: 21,
        name: 'Kamrul Islam',
        profession: 'Sales Manager',
        location: 'Savar',
        rating: 5,
        review: 'Excellent value for money. The location will appreciate significantly with the upcoming bridge. Smart investment!',
        apartment: 'Unit C-801',
    },
    {
        id: 22,
        name: 'Nasima Akter',
        profession: 'Designer',
        location: 'Dhanmondi',
        rating: 5,
        review: 'Modern design with practical layout. The 3-bedroom setup is perfect for our family. Very satisfied!',
        apartment: 'Unit B-502',
    },
    {
        id: 23,
        name: 'Azizul Haque',
        profession: 'Retailer',
        location: 'Mohammadpur',
        rating: 5,
        review: 'Great project with transparent dealings. The team was very supportive throughout. Excellent apartment quality!',
        apartment: 'Unit A-903',
    },
    {
        id: 24,
        name: 'Rowshan Ara',
        profession: 'Lecturer',
        location: 'Ashulia',
        rating: 5,
        review: 'Perfect location for academics. Close to universities, peaceful environment. The lake view is a bonus!',
        apartment: 'Unit C-306',
    },
    {
        id: 25,
        name: 'Mahbubur Rahman',
        profession: 'Project Manager',
        location: 'Gulshan',
        rating: 5,
        review: 'Professional team, quality construction, and excellent location. The investment potential is very high!',
        apartment: 'Unit B-704',
    },
    {
        id: 26,
        name: 'Salma Khatun',
        profession: 'Nurse',
        location: 'Mirpur',
        rating: 5,
        review: 'Safe and secure environment. The amenities are excellent, and the maintenance is top-notch. Very happy!',
        apartment: 'Unit A-605',
    },
    {
        id: 27,
        name: 'Iqbal Hossain',
        profession: 'Trader',
        location: 'Uttara',
        rating: 5,
        review: 'Excellent rental income potential. The location is strategic, and the quality is outstanding. Great investment!',
        apartment: 'Unit C-503',
    },
    {
        id: 28,
        name: 'Farida Yasmin',
        profession: 'HR Manager',
        location: 'Banani',
        rating: 5,
        review: 'Beautiful apartment with modern amenities. The lake view makes it feel like a resort. Love it!',
        apartment: 'Unit B-405',
    },
    {
        id: 29,
        name: 'Sirajul Islam',
        profession: 'Contractor',
        location: 'Savar',
        rating: 5,
        review: 'As a contractor, I can appreciate the quality of construction. Excellent workmanship and materials used!',
        apartment: 'Unit A-702',
    },
    {
        id: 30,
        name: 'Hasina Begum',
        profession: 'Beautician',
        location: 'Ashulia',
        rating: 5,
        review: 'Spacious and beautiful apartment. The community is very friendly. Perfect place to call home!',
        apartment: 'Unit C-404',
    },
    {
        id: 31,
        name: 'Zakir Hossain',
        profession: 'Marketing Executive',
        location: 'Dhanmondi',
        rating: 5,
        review: 'Great location with future growth potential. The flexible payment plan made it easy to purchase. Highly satisfied!',
        apartment: 'Unit B-806',
    },
    {
        id: 32,
        name: 'Laila Rahman',
        profession: 'Researcher',
        location: 'Gulshan',
        rating: 5,
        review: 'Peaceful lakeside living with modern facilities. Perfect for research and relaxation. Excellent investment!',
        apartment: 'Unit A-504',
    },
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const { t } = useLanguage();

    const itemsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const currentTestimonials = testimonials.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section className="section-padding bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                        Customer Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
                        What Our <span className="text-gradient">Happy Customers</span> Say
                    </h2>
                    <p className="text-muted-foreground text-lg mt-6">
                        Join 32 satisfied families who have already made Dream Castle Living their home
                    </p>

                    {/* Stats Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-primary/10 rounded-full border border-primary/20"
                    >
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-semibold">
                            32 of 50 Apartments Sold
                        </span>
                        <span className="px-3 py-1 bg-secondary text-white text-sm rounded-full font-bold">
                            64% Sold
                        </span>
                    </motion.div>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Testimonials Grid */}
                    <div className="overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {currentTestimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="glass-card p-6 hover:shadow-luxury-lg transition-all duration-300 group"
                                    >
                                        {/* Quote Icon */}
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                            <Quote className="w-6 h-6 text-primary" />
                                        </div>

                                        {/* Rating */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-secondary text-secondary"
                                                />
                                            ))}
                                        </div>

                                        {/* Review */}
                                        <p className="text-foreground/80 text-sm leading-relaxed mb-6 line-clamp-4">
                                            "{testimonial.review}"
                                        </p>

                                        {/* Customer Info */}
                                        <div className="border-t border-border pt-4">
                                            <h4 className="font-display font-bold text-foreground">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.profession}
                                            </p>
                                            <div className="flex items-center justify-between mt-2">
                                                <p className="text-xs text-muted-foreground">
                                                    {testimonial.location}
                                                </p>
                                                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                                                    {testimonial.apartment}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-12">
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'w-8 bg-primary'
                                        : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                    }`}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground mb-6">
                        Only 18 apartments remaining! Secure your dream home today.
                    </p>
                    <a
                        href="/contact"
                        className="btn-gold inline-flex items-center gap-2"
                    >
                        <span>Book Your Apartment Now</span>
                        <ChevronRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
