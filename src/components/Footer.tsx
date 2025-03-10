
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-4 bg-black border-t border-gold/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-playfair text-xl font-semibold text-white">
              <span className="text-gold">V</span>on <span className="text-gold">R</span>ichter
            </div>
          </div>
          
          <div className="text-white/50 text-sm font-montserrat">
            © {currentYear} Von Richter. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0 text-white/70 text-sm">
            <a href="#" className="hover:text-gold mr-4 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
