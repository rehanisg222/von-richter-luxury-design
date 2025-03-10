
// Products data
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

// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const mobileProductCarousel = document.getElementById('mobileProductCarousel');
const carouselIndicators = document.getElementById('carouselIndicators');
const prevProduct = document.getElementById('prevProduct');
const nextProduct = document.getElementById('nextProduct');
const productGrid = document.getElementById('productGrid');
const productModal = document.getElementById('productModal');
const closeProductModal = document.getElementById('closeProductModal');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const currentYearEl = document.getElementById('currentYear');

// State
let currentIndex = 0;

// Set current year in footer
currentYearEl.textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Check for scroll elements
  const scrollElements = document.querySelectorAll('.scroll-element');
  scrollElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.8;
    
    if (isVisible) {
      element.classList.add('visible');
    }
  });
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  document.body.style.overflow = '';
});

function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  document.body.style.overflow = '';
}

// Smooth scrolling for anchor links
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // Adjust for header height
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
}

// Initialize product carousel for mobile
function renderMobileCarousel() {
  // Clear existing content
  mobileProductCarousel.innerHTML = '';
  carouselIndicators.innerHTML = '';
  
  // Create product slide
  const product = products[currentIndex];
  const slide = document.createElement('div');
  slide.className = 'w-full';
  slide.innerHTML = `
    <div class="glass p-3 rounded-sm" onclick="openProductDetails(${product.id})">
      <div class="relative aspect-[3/4] overflow-hidden rounded-sm">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-0 left-0 right-0 p-4 glass backdrop-blur-md">
          <p class="text-xs text-gold">${product.category}</p>
          <h3 class="font-playfair text-lg text-white mb-1">${product.name}</h3>
          <p class="text-sm text-white/80">$${product.price}</p>
        </div>
      </div>
    </div>
  `;
  mobileProductCarousel.appendChild(slide);
  
  // Create indicators
  products.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.className = `h-1 rounded-full ${index === currentIndex ? 'w-6 bg-gold' : 'w-2 bg-gold/30'} transition-all duration-300`;
    carouselIndicators.appendChild(indicator);
  });
}

// Initialize product grid for desktop
function renderProductGrid() {
  productGrid.innerHTML = '';
  
  products.slice(0, 8).forEach(product => {
    const item = document.createElement('div');
    item.className = 'glass p-3 rounded-sm group cursor-pointer scroll-element';
    item.onclick = () => openProductDetails(product.id);
    
    item.innerHTML = `
      <div class="relative aspect-[3/4] overflow-hidden rounded-sm">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="w-full h-full object-cover transition-all duration-500"
        />
        <div class="absolute bottom-0 left-0 right-0 p-4 glass backdrop-blur-md">
          <p class="text-xs text-gold">${product.category}</p>
          <h3 class="font-playfair text-lg text-white mb-1">${product.name}</h3>
          <p class="text-sm text-white/80">$${product.price}</p>
        </div>
      </div>
    `;
    
    productGrid.appendChild(item);
  });
}

// Navigation for mobile carousel
nextProduct.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % products.length;
  renderMobileCarousel();
});

prevProduct.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + products.length) % products.length;
  renderMobileCarousel();
});

// Product Modal
function openProductDetails(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  document.getElementById('modalProductImage').src = product.image;
  document.getElementById('modalProductName').textContent = product.name;
  document.getElementById('modalProductCategory').textContent = product.category;
  document.getElementById('modalProductPrice').textContent = '$' + product.price;
  document.getElementById('modalProductDescription').textContent = product.description;
  
  productModal.classList.remove('hidden');
  productModal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

closeProductModal.addEventListener('click', () => {
  productModal.classList.add('hidden');
  productModal.classList.remove('flex');
  document.body.style.overflow = '';
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  
  console.log('Form submitted:', formData);
  
  // Show success message
  contactForm.classList.add('hidden');
  formSuccess.classList.remove('hidden');
  
  // Reset form after delay
  setTimeout(() => {
    formSuccess.classList.add('hidden');
    contactForm.classList.remove('hidden');
    contactForm.reset();
  }, 3000);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderMobileCarousel();
  renderProductGrid();
  
  // Initialize scroll animations
  const scrollElements = document.querySelectorAll('.scroll-element');
  setTimeout(() => {
    scrollElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;
      
      if (isVisible) {
        element.classList.add('visible');
      }
    });
  }, 300);
  
  // Handle click outside mobile menu
  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('hidden')) return;
    
    if (!e.target.closest('#mobileMenu') && !e.target.closest('#menuToggle')) {
      closeMobileMenu();
    }
  });
  
  // Handle click outside product modal
  document.addEventListener('click', (e) => {
    if (productModal.classList.contains('hidden')) return;
    
    if (!e.target.closest('.max-w-3xl') && !e.target.closest('[onclick*="openProductDetails"]')) {
      productModal.classList.add('hidden');
      productModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  });
});

// Custom global function
window.openProductDetails = openProductDetails;
