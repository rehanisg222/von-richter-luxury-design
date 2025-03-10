
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Exquisite Timepiece',
    price: '2,950',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1799&auto=format&fit=crop',
    category: 'Accessories'
  },
  {
    id: 2,
    name: 'Signature Coat',
    price: '4,200',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1887&auto=format&fit=crop',
    category: 'Outerwear'
  },
  {
    id: 3,
    name: 'Designer Handbag',
    price: '3,800',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop',
    category: 'Accessories'
  },
  {
    id: 4,
    name: 'Luxury Footwear',
    price: '1,950',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1760&auto=format&fit=crop',
    category: 'Footwear'
  }
];

const CollectionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
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
            Discover our most exclusive pieces, meticulously crafted for those who appreciate the finest luxury.
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
                <div className="glass p-3 rounded-sm">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <img
                      src={products[currentIndex].image}
                      alt={products[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 glass">
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
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: product.id * 0.1 }}
                viewport={{ once: true }}
                className="glass p-3 rounded-sm group"
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
      </div>
    </section>
  );
};

export default CollectionSection;
