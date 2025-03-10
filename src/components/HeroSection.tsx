
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToCollection = () => {
    const collectionSection = document.getElementById('collection');
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background overlay with a gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop")', 
          filter: 'brightness(0.5)' 
        }}
      ></div>
      
      <div className="relative h-full flex flex-col justify-center items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white mb-2">
            <span className="text-gold">VON</span> RICHTER
          </h1>
          <div className="h-px w-20 mx-auto bg-gold my-4"></div>
          <p className="font-montserrat text-lg md:text-xl text-white/80">THE FUTURE OF LUXURY</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8"
        >
          <button 
            onClick={scrollToCollection}
            className="button-primary animate-glow"
          >
            EXPLORE COLLECTION
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8"
        >
          <button 
            onClick={scrollToCollection}
            className="text-gold animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
