
import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section id="story" className="section bg-navy-dark">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="heading-lg text-white mb-6">
              <span className="text-gold">CRAFTING</span> THE FUTURE
            </h2>
            <div className="h-px w-20 bg-gold my-4"></div>
            <p className="body-text text-white/80 mb-6">
              Von Richter represents the pinnacle of luxury design, where traditional craftsmanship meets 
              futuristic vision. Our pieces are not merely products, but statements—bold 
              declarations of style, innovation, and uncompromising quality.
            </p>
            <p className="body-text text-white/80 mb-8">
              Each Von Richter creation is meticulously handcrafted by master artisans, 
              using only the finest materials sourced from around the world. We challenge convention
              and redefine what luxury means in the modern era.
            </p>
            <div className="flex items-center">
              <div>
                <p className="font-playfair text-gold">Srishti</p>
                <p className="text-sm text-white/60">Founder & Creative Director</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/30"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30"></div>
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop"
                alt="Von Richter Design"
                className="w-full h-[500px] object-cover border border-gold/20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
