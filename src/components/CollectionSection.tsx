
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import ProductCarousel from './ProductCarousel';
import { Product } from '../types/product';

// Define the products using the provided images
const products: Product[] = [
  {
    id: 1,
    name: 'Classic Cream Blazer',
    price: '3,800',
    image: '/lovable-uploads/e68801b8-8bc1-4522-8be0-c06bdd673105.png',
    category: 'Formalwear',
    description: 'Double-breasted minimalist blazer with Von Richter monogram subtly embossed on the fabric. Hidden inside pocket with NFC chip for digital authentication. Matte black buttons with gold engraving.',
  },
  {
    id: 2,
    name: 'Burgundy Overcoat',
    price: '4,950',
    image: '/lovable-uploads/0642ce10-4f24-4699-9af9-0e2c4fd36b1f.png',
    category: 'Outerwear',
    description: 'Structured long coat with sharp lapels and premium silk lining. Classic button closure for a timeless elegance. Made from cashmere-wool blend with water-repellent nano-coating.',
  }
];

const CollectionSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openProductDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="collection" className="section bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-white">
            <span className="text-gold">LATEST</span> COLLECTION
          </h2>
          <div className="h-px w-20 mx-auto bg-gold my-4"></div>
          <p className="body-text text-white/70 max-w-2xl mx-auto">
            Discover our most exclusive pieces, meticulously crafted with Italian wool, silk blends, and technical fabrics. 
            Each design features premium details like hidden zippers, magnetic closures, and gold accents.
          </p>
        </motion.div>

        <div className="relative mt-12">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <ProductCarousel 
              products={products} 
              onProductClick={openProductDetails} 
            />
            <div className="mt-6 flex justify-center">
              <button className="button-secondary">VIEW ALL</button>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={openProductDetails} 
              />
            ))}
          </div>
          <div className="hidden md:flex justify-center mt-8">
            <button className="button-secondary">VIEW ALL COLLECTIONS</button>
          </div>
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={closeProductDetails} 
          />
        )}
      </div>
    </section>
  );
};

export default CollectionSection;
