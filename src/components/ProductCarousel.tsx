
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCarouselProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductCarousel = ({ products, onProductClick }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div 
          className="glass p-3 rounded-sm"
          onClick={() => onProductClick(products[currentIndex])}
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 glass backdrop-blur-md">
              <p className="text-xs text-gold/80">{products[currentIndex].category}</p>
              <h3 className="font-playfair text-lg text-white mb-1">{products[currentIndex].name}</h3>
              <p className="text-sm text-white/80">${products[currentIndex].price}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <button
        onClick={prevProduct}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-gold"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextProduct}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-gold"
      >
        <ChevronRight size={20} />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full ${index === currentIndex ? 'w-6 bg-gold' : 'w-2 bg-gold/30'} transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
