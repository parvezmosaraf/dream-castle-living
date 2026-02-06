import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  User,
  Calendar,
  Banknote,
  Check
} from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success(t('contact.form.successMessage'));
    setFormData({ name: '', phone: '', email: '', budget: '', message: '' });
    setIsSubmitting(false);
  };

  const budgetOptions = [
    '৳ 40-45 Lakh',
    '৳ 45-50 Lakh',
    '৳ 50+ Lakh',
    'EMI Option',
  ];

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
              {t('contact.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
              {t('contact.title')} <span className="text-gradient">{t('contact.titleHighlight')}</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              {t('contact.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  Book a Visit
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 1XXX XXXXXX"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <div className="relative">
                      <Banknote className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                      >
                        <option value="">Select your budget</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury w-full flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Get in touch with our sales team for property details, site visits,
                  and booking information.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-5">
                <motion.a
                  href="tel:+8801901372340"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group glass-card p-6 flex items-center gap-6 hover:shadow-luxury-lg hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:shadow-primary/50 group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="relative flex-1">
                    <p className="text-muted-foreground text-sm font-medium mb-1">Sales Hotline</p>
                    <p className="text-foreground font-bold text-xl">+880 1901 372340</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/8801647712961"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group glass-card p-6 flex items-center gap-6 hover:shadow-luxury-lg hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#20BA5A] flex items-center justify-center shadow-lg group-hover:shadow-[#25D366]/50 group-hover:scale-110 transition-all duration-300">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="relative flex-1">
                    <p className="text-muted-foreground text-sm font-medium mb-1">WhatsApp</p>
                    <p className="text-foreground font-bold text-xl">+880 1647 712961</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:seadreamconstruction@gmail.com"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group glass-card p-6 flex items-center gap-6 hover:shadow-luxury-lg hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg group-hover:shadow-secondary/50 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <div className="relative flex-1">
                    <p className="text-muted-foreground text-sm font-medium mb-1">Email</p>
                    <p className="text-foreground font-bold text-lg break-all">seadreamconstruction@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="glass-card p-6 flex items-start gap-6 bg-gradient-to-br from-accent/5 to-transparent"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground text-sm font-medium mb-2">Office Address</p>
                    <p className="text-foreground font-semibold leading-relaxed">
                      Ashulia Model Town, 1 No Hall, Zero Point,<br />
                      Block-F, Road No 1/A (North),<br />
                      Birulia, Saver, Dhaka
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 bg-primary/5"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Why Choose Sea Dream?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Transparent pricing with no hidden costs',
                    'Flexible 36-month EMI payment plan',
                    'Premium construction quality',
                    'Prime lake-view location',
                    'Legal documentation support',
                    'Post-sale customer service',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground/80">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
