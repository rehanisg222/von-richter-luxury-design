
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: product.id * 0.1 }}
      viewport={{ once: true }}
      className="glass p-3 rounded-sm group cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 glass backdrop-blur-md">
          <p className="text-xs text-gold/80">{product.category}</p>
          <h3 className="font-playfair text-lg text-white mb-1">{product.name}</h3>
          <p className="text-sm text-white/80">${product.price}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
