
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types/product';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-3xl glass rounded-sm p-5 md:p-8"
      >
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gold hover:text-white"
        >
          ✕
        </button>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs text-gold mb-2">{product.category}</p>
              <h3 className="font-playfair text-2xl text-white mb-3">{product.name}</h3>
              <p className="text-lg text-gold mb-6">${product.price}</p>
              
              <div className="h-px w-full bg-gold/20 my-4"></div>
              
              <p className="body-text text-white/80 mb-6">
                {product.description}
              </p>
            </div>
            
            <div className="mt-auto">
              <button className="button-primary w-full mb-3">ADD TO CART</button>
              <button className="button-secondary w-full">SAVE FOR LATER</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductModal;
