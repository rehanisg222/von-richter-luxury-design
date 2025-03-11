
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import ProductView360 from './ProductView360';

// Define the products using the provided images
const products = [
  {
    id: 1,
    name: 'Classic Cream Blazer',
    price: '3,800',
    image: '/lovable-uploads/e68801b8-8bc1-4522-8be0-c06bdd673105.png',
    category: 'Formalwear',
    description: 'Double-breasted minimalist blazer with Von Richter monogram subtly embossed on the fabric. Hidden inside pocket with NFC chip for digital authentication. Matte black buttons with gold engraving.',
    images360: [
      '/lovable-uploads/e68801b8-8bc1-4522-8be0-c06bdd673105.png',
      // Simulate multiple angles for 360 view (in a real app, you'd have multiple actual images)
      '/lovable-uploads/e68801b8-8bc1-4522-8be0-c06bdd673105.png',
      '/lovable-uploads/e68801b8-8bc1-4522-8be0-c06bdd673105.png',
      '/lovable-uploads/e68801b8-8bc1-4522-8be0-c06bdd673105.png',
      '/lovable-uploads/e68801b8-8bc1-4522-8be0-c06bdd673105.png',
      '/lovable-uploads/e68801b8-8bc1-4522-8be0-c06bdd673105.png',
    ]
  },
  {
    id: 2,
    name: 'Burgundy Overcoat',
    price: '4,950',
    image: '/lovable-uploads/0642ce10-4f24-4699-9af9-0e2c4fd36b1f.png',
    category: 'Outerwear',
    description: 'Structured long coat with sharp lapels and premium silk lining. Classic button closure for a timeless elegance. Made from cashmere-wool blend with water-repellent nano-coating.',
    images360: [
      '/lovable-uploads/0642ce10-4f24-4699-9af9-0e2c4fd36b1f.png',
      // Simulate multiple angles for 360 view
      '/lovable-uploads/0642ce10-4f24-4699-9af9-0e2c4fd36b1f.png',
      '/lovable-uploads/0642ce10-4f24-4699-9af9-0e2c4fd36b1f.png',
      '/lovable-uploads/0642ce10-4f24-4699-9af9-0e2c4fd36b1f.png',
      '/lovable-uploads/0642ce10-4f24-4699-9af9-0e2c4fd36b1f.png',
      '/lovable-uploads/0642ce10-4f24-4699-9af9-0e2c4fd36b1f.png',
    ]
  }
];

const CollectionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const openProductDetails = (product) => {
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
                  onClick={() => openProductDetails(products[currentIndex])}
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
            <div className="mt-6 flex justify-center">
              <button className="button-secondary">VIEW ALL</button>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: product.id * 0.1 }}
                viewport={{ once: true }}
                className="glass p-3 rounded-sm group cursor-pointer"
                onClick={() => openProductDetails(product)}
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
            ))}
          </div>
          <div className="hidden md:flex justify-center mt-8">
            <button className="button-secondary">VIEW ALL COLLECTIONS</button>
          </div>
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-3xl glass rounded-sm p-5 md:p-8"
            >
              <button 
                onClick={closeProductDetails}
                className="absolute right-4 top-4 text-gold hover:text-white"
              >
                ✕
              </button>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ProductView360 
                  images={selectedProduct.images360} 
                  className="aspect-[3/4] overflow-hidden rounded-sm"
                />
                
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gold mb-2">{selectedProduct.category}</p>
                    <h3 className="font-playfair text-2xl text-white mb-3">{selectedProduct.name}</h3>
                    <p className="text-lg text-gold mb-6">${selectedProduct.price}</p>
                    
                    <div className="h-px w-full bg-gold/20 my-4"></div>
                    
                    <p className="body-text text-white/80 mb-6">
                      {selectedProduct.description}
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
        )}
      </div>
    </section>
  );
};

export default CollectionSection;
