
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 20 ? 'glass py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="font-playfair text-2xl font-semibold text-white">
            <span className="text-gold">V</span>on <span className="text-gold">R</span>ichter
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Collection', 'Story', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-montserrat text-white hover:text-gold transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <button className="md:hidden text-gold" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 glass"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4">
              <div className="font-playfair text-2xl font-semibold text-white">
                <span className="text-gold">V</span>on <span className="text-gold">R</span>ichter
              </div>
              <button className="text-gold" onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              {['Home', 'Collection', 'Story', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * ['Home', 'Collection', 'Story', 'Contact'].indexOf(item) }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-xl font-playfair text-white hover:text-gold transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
