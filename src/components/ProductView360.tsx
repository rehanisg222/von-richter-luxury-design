
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCw } from 'lucide-react';

interface ProductView360Props {
  images: string[];
  className?: string;
}

const ProductView360 = ({ images, className = '' }: ProductView360Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoRotateIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    stopAutoRotate();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    stopAutoRotate();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleDrag(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleDrag(e.touches[0].clientX);
  };

  const handleDrag = (clientX: number) => {
    const diffX = clientX - startX;
    
    if (Math.abs(diffX) > 20) {
      // Determine direction
      const direction = diffX > 0 ? -1 : 1;
      
      // Update index
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + direction + images.length) % images.length;
        return newIndex;
      });
      
      // Reset start position
      setStartX(clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const toggleAutoRotate = () => {
    if (isAutoRotating) {
      stopAutoRotate();
    } else {
      startAutoRotate();
    }
  };

  const startAutoRotate = () => {
    setIsAutoRotating(true);
    autoRotateIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 100);
  };

  const stopAutoRotate = () => {
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
      autoRotateIntervalRef.current = null;
    }
    setIsAutoRotating(false);
  };

  useEffect(() => {
    // Clean up interval on unmount
    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`relative ${className}`}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={image}
              alt={`Product view ${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
      
      <button
        onClick={toggleAutoRotate}
        className={`absolute bottom-3 right-3 p-2 rounded-full glass text-gold hover:text-white transition-colors ${isAutoRotating ? 'animate-spin-slow bg-gold/20' : ''}`}
      >
        <RotateCw size={20} />
      </button>
      
      <div className="absolute bottom-3 left-3 text-xs text-white/70 glass px-2 py-1 rounded-sm">
        Drag to rotate
      </div>
    </div>
  );
};

export default ProductView360;
