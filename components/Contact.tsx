'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle, FiUser, FiMessageSquare, FiLinkedin, FiGithub, FiTwitter, FiGlobe, FiAlertCircle } from 'react-icons/fi';
import { FaWhatsapp, FaTelegram, FaDiscord } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  link: string;
  color: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
  color: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: FiMail,
    title: "Email",
    value: "730551rinku@gmail.com",
    link: "mailto:730551rinku@gmail.com",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "+91 8449872248",
    link: "tel:+918449872248",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "Naraina Vihar, Delhi, India",
    link: "https://www.google.com/maps/place/Naraina+Vihar,+Naraina,+New+Delhi,+Delhi/@28.6292934,77.1289912,2685m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390d03245972a8ff:0x22f0733cd9d891f3!8m2!3d28.6289883!4d77.1413259!16s%2Fg%2F1tg7qdbw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    color: "from-purple-500 to-pink-500",
  },
];

const socialLinks: SocialLink[] = [
  { icon: FiLinkedin, href: "https://in.linkedin.com/in/rinku-kumar-6a611a311", label: "LinkedIn", color: "hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50" },
  { icon: FiGithub, href: "https://github.com/Mr-Rinku-Kumar", label: "GitHub", color: "hover:bg-gray-700 hover:text-white hover:border-gray-600" },
  { icon: FaWhatsapp, href: "https://wa.me/918449872248", label: "WhatsApp", color: "hover:bg-green-500/20 hover:text-green-400 hover:border-green-500/50" },
  { icon: FaTelegram, href: "https://t.me/Rinku_71", label: "Telegram", color: "hover:bg-blue-400/20 hover:text-blue-300 hover:border-blue-400/50" },
];

// Email.js Configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmailConfigured, setIsEmailConfigured] = useState(true);
  
  // Fixed: Added initial value for useRef
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Check EmailJS configuration on mount
  useEffect(() => {
    const checkEmailConfig = () => {
      const missingVars = [];
      
      if (!EMAILJS_SERVICE_ID) missingVars.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID');
      if (!EMAILJS_TEMPLATE_ID) missingVars.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID');
      if (!EMAILJS_PUBLIC_KEY) missingVars.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');
      
      if (missingVars.length > 0) {
        console.warn(`Missing EmailJS environment variables: ${missingVars.join(', ')}`);
        setIsEmailConfigured(false);
      }
    };
    
    checkEmailConfig();
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError(null);
  }, [error]);

  const validateForm = useCallback((): boolean => {
    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    return true;
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!isEmailConfigured) {
      setError('Email service is currently unavailable. Please contact me directly at 730551rinku@gmail.com');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || `Portfolio Contact from ${formData.name}`,
        message: formData.message,
        to_name: 'Rinku Kumar',
        to_email: '730551rinku@gmail.com',
        date: new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'short'
        }),
        reply_to: formData.email,
        timestamp: new Date().toISOString()
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Auto-reset success message after 5 seconds
        timeoutRef.current = setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error: any) {
      console.error('Email sending error:', error);
      setError(
        error.text ||
        'Failed to send message. Please try again or contact me directly at 730551rinku@gmail.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isEmailConfigured, validateForm]);

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-3">
            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500" />
            <span className="text-sm font-medium text-cyan-400 tracking-wider">GET IN TOUCH</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind, a job opportunity, or just want to say hello?
            I'd love to hear from you!
          </p>
          
          {/* Configuration Warning */}
          {!isEmailConfigured && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg max-w-md mx-auto"
            >
              <p className="text-sm text-yellow-400 flex items-center justify-center gap-2">
                <FiAlertCircle className="w-4 h-4" />
                Email service is in demo mode. Messages won't be sent.
              </p>
            </motion.div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-effect rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center space-x-2">
              <FiSend className="w-6 h-6 text-cyan-400" />
              <span>Send a Message</span>
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. I've received your message and will get back to you within 24 hours.
                </p>
                <div className="flex justify-center">
                  <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  You can also reach me directly at 730551rinku@gmail.com
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/30"
                    role="alert"
                    aria-live="assertive"
                  >
                    <div className="flex items-start space-x-3">
                      <FiAlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-red-400" id="error-message">{error}</p>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 flex items-center space-x-2">
                      <FiUser className="w-4 h-4" />
                      <span>Your Name *</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center space-x-2">
                      <FiMail className="w-4 h-4" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300 flex items-center space-x-2">
                    <FiMessageSquare className="w-4 h-4" />
                    <span>Subject (Optional)</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry, Job Opportunity, etc."
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center space-x-2">
                    <FiMessageSquare className="w-4 h-4" />
                    <span>Your Message *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                    aria-required="true"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 gap-4">
                  <div className="text-sm text-gray-400">
                    <p>Fields marked with * are required</p>
                    <p className="text-xs mt-1">Your data is secure and won't be shared</p>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={isSubmitting ? {} : { scale: 1.05 }}
                    whileTap={isSubmitting ? {} : { scale: 0.95 }}
                    className={`px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-lg flex items-center space-x-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                    aria-label={isSubmitting ? "Sending message..." : "Send message"}
                    aria-disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>

                <div className="text-xs text-gray-500 pt-2 border-t border-gray-800">
                  <p>By submitting this form, you agree to our privacy policy and consent to being contacted.</p>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column - Contact Info & Social */}
          <div className="space-y-8 sm:space-y-10">
            {/* Contact Information Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold flex items-center space-x-2">
                <FiMapPin className="w-6 h-6 text-cyan-400" />
                <span>Contact Information</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group p-4 rounded-xl bg-white/5 border border-gray-700 hover:border-cyan-500/30 transition-all"
                    aria-label={`Contact via ${info.title}`}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} p-0.5 mb-3`}>
                      <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
                      {info.value}
                    </p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-effect rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center space-x-2">
                <FiGlobe className="w-6 h-6 text-cyan-400" />
                <span>Connect With Me</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 sm:p-4 rounded-xl bg-white/5 border border-gray-700 flex flex-col items-center justify-center text-gray-400 ${social.color} transition-all`}
                    aria-label={`Connect on ${social.label}`}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
                    <span className="text-xs sm:text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Working Hours / Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-effect rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center space-x-2">
                <FiCheckCircle className="w-6 h-6 text-green-400" />
                <span>Availability</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-green-400">Currently Available</h4>
                    <p className="text-sm text-gray-400">
                      Open to new opportunities and collaborations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-sm text-gray-400">
                      Typically within 24 hours for emails and messages
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Working Hours</h4>
                    <p className="text-sm text-gray-400">
                      Monday - Friday • 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Response CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-500/20"
            >
              <h4 className="text-lg sm:text-xl font-bold mb-2">Need a Quick Response?</h4>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                For urgent matters, feel free to message me directly on WhatsApp or Telegram.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/918449872248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-500/50 text-green-400 hover:text-green-300 font-medium rounded-lg text-center transition-all flex items-center justify-center space-x-2"
                  aria-label="Contact via WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/Rinku_71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-blue-400/10 hover:bg-blue-400/20 border border-blue-400/30 hover:border-blue-400/50 text-blue-300 hover:text-blue-200 font-medium rounded-lg text-center transition-all flex items-center justify-center space-x-2"
                  aria-label="Contact via Telegram"
                >
                  <FaTelegram className="w-5 h-5" />
                  <span>Telegram</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16"
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center space-x-2">
              <FiMapPin className="w-6 h-6 text-cyan-400" />
              <span>Location</span>
            </h3>

            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gray-800 animate-pulse" />
              <iframe
                title="Naraina Vihar Location"
                src="https://www.google.com/maps?q=Naraina+Vihar,+New+Delhi,+Delhi&output=embed"
                className="w-full h-full border-0 relative z-10"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 pointer-events-none">
                <div className="text-center text-white">
                  <FiMapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Naraina Vihar, New Delhi</h4>
                  <p className="text-gray-200">📍 Capital Tech & Business Zone</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 mt-4 text-center">
              Based in Delhi - India's leading technology and innovation hub
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}