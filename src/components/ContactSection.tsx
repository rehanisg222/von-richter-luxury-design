
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section bg-black relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop")'
        }}
      ></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-white">
            <span className="text-gold">CONTACT</span> US
          </h2>
          <div className="h-px w-20 mx-auto bg-gold my-4"></div>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            Connect with us to inquire about custom orders or to schedule a private consultation.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass p-8 text-center rounded-sm"
            >
              <div className="text-gold text-5xl mb-4">✓</div>
              <h3 className="font-playfair text-xl text-white mb-2">Thank You</h3>
              <p className="text-white/70">Your message has been received. We'll be in touch shortly.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass p-6 rounded-sm"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gold text-sm mb-2">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gold/30 p-3 text-white placeholder:text-white/30 focus:border-gold focus:outline-none transition-colors rounded-sm"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gold text-sm mb-2">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gold/30 p-3 text-white placeholder:text-white/30 focus:border-gold focus:outline-none transition-colors rounded-sm"
                  placeholder="Your Email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gold text-sm mb-2">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black/50 border border-gold/30 p-3 text-white placeholder:text-white/30 focus:border-gold focus:outline-none transition-colors rounded-sm"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full button-primary"
              >
                SEND MESSAGE <Send size={16} className="ml-2" />
              </button>
            </motion.form>
          )}

          <div className="mt-12 text-center">
            <p className="text-gold mb-4 font-playfair">FOLLOW US</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
