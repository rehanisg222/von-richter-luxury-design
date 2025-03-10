
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Neo-Tailored Overcoat',
    price: '4,950',
    image: 'https://images.unsplash.com/photo-1553815035-92b6eef66226?q=80&w=1835&auto=format&fit=crop',
    category: 'Outerwear',
    description: 'Structured long coat with sharp lapels and holographic lining. Magnetic closure instead of buttons for a futuristic touch. Made from cashmere-wool blend with water-repellent nano-coating.'
  },
  {
    id: 2,
    name: 'Monogram Embossed Blazer',
    price: '3,800',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1974&auto=format&fit=crop',
    category: 'Formalwear',
    description: 'Double-breasted minimalist blazer with Von Richter monogram subtly embossed on the fabric. Hidden inside pocket with NFC chip for digital authentication. Matte black buttons with gold engraving.'
  },
  {
    id: 3,
    name: 'Luxury Tactical Vest',
    price: '2,400',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop',
    category: 'Statement Pieces',
    description: 'High-fashion reinterpretation of a tactical vest, using premium leather and silk mesh. Integrated minimalist gold buckles. Adjustable straps and hidden pockets for a sleek yet functional feel.'
  },
  {
    id: 4,
    name: 'Asymmetric Silk & Leather Shirt',
    price: '1,950',
    image: 'https://images.unsplash.com/photo-1600053035559-c208a9ff007b?q=80&w=1779&auto=format&fit=crop',
    category: 'Tops',
    description: 'Fitted silk shirt with one leather panel on the side for a hybrid look. Hidden button placket for a clean, uninterrupted flow. Available in deep navy, charcoal, and matte black.'
  },
  {
    id: 5,
    name: 'Futuristic Wide-Leg Trousers',
    price: '1,850',
    image: 'https://images.unsplash.com/photo-1583744946564-b52d01e7f922?q=80&w=1974&auto=format&fit=crop',
    category: 'Bottoms',
    description: 'Perfectly tailored, flowy yet structured. Fabric: Silk-wool blend with slight stretch. Embedded gold micro-details on the belt loops for an understated luxury look.'
  },
  {
    id: 6,
    name: 'Luxury Techwear Hoodie',
    price: '1,200',
    image: 'https://images.unsplash.com/photo-1578932750355-5eb30ece487f?q=80&w=1935&auto=format&fit=crop',
    category: 'Casual Luxury',
    description: 'Ultra-premium hoodie made from high-performance fabric with heat-regulating properties. Sleek matte black finish with a gold-stitched Von Richter logo. Thumb holes, asymmetrical zip, and seamless pocket system.'
  },
  {
    id: 7,
    name: 'Monochrome Futuristic Jumpsuit',
    price: '3,600',
    image: 'https://images.unsplash.com/photo-1535730142260-496e3db19f6f?q=80&w=1974&auto=format&fit=crop',
    category: 'Statement Pieces',
    description: 'One-piece luxury jumpsuit with a double-layered draped collar. Built-in adjustable belt with metallic accent. Made from wrinkle-resistant technical wool blend.'
  },
  {
    id: 8,
    name: 'Avant-Garde Trench Coat',
    price: '5,200',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop',
    category: 'Outerwear',
    description: 'Classic trench, reimagined with multi-layered, angular cuts. Asymmetrical hemline and a floating belt design. Subtle metallic threads woven into the fabric for a futuristic sheen.'
  },
  {
    id: 9,
    name: 'Minimalist Luxury Knitwear',
    price: '980',
    image: 'https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?q=80&w=1974&auto=format&fit=crop',
    category: 'Tops',
    description: 'Ultra-soft cashmere sweater with a raised, tonal Von Richter monogram. Slightly oversized fit with ribbed sleeves and bottom hem for structure. Comes in jet black, slate gray, and deep forest green.'
  },
  {
    id: 10,
    name: 'Luxe Streetwear Joggers',
    price: '780',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop',
    category: 'Bottoms',
    description: 'Elevated sleek joggers made of a high-tech stretch fabric. Subtle gold zipper details and hidden side pockets. Adjustable waistband with a futuristic buckle design.'
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
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.slice(0, 8).map((product) => (
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
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
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
