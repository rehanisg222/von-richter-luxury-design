
// Products data for the collection section
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

document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Mobile menu functionality
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    document.body.style.overflow = 'hidden';
  });

  closeMenu.addEventListener('click', function() {
    closeMobileMenu();
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      navbar.classList.add('glass', 'py-2');
      navbar.classList.remove('py-4');
    } else {
      navbar.classList.remove('glass', 'py-2');
      navbar.classList.add('py-4');
    }
  });

  // Scroll animations
  function handleScroll() {
    const scrollElements = document.querySelectorAll('.scroll-element');
    
    scrollElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;
      
      if (isVisible) {
        element.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize on page load
  
  // Product collection 
  setupProductCarousel();
  setupProductGrid();
  setupProductModal();

  // Contact form submission
  setupContactForm();
});

// Helper functions
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
  document.body.style.overflow = '';
}

// Mobile product carousel setup
function setupProductCarousel() {
  let currentIndex = 0;
  const mobileCarousel = document.getElementById('mobileProductCarousel');
  const indicators = document.getElementById('carouselIndicators');
  const prevButton = document.getElementById('prevProduct');
  const nextButton = document.getElementById('nextProduct');
  
  // Create initial product card
  updateCarousel();
  
  // Create indicators
  products.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.className = `h-1 rounded-full ${index === 0 ? 'w-6 bg-gold' : 'w-2 bg-gold/30'} transition-all duration-300`;
    indicator.setAttribute('data-index', index);
    indicators.appendChild(indicator);
  });
  
  // Add event listeners for navigation
  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    updateCarousel();
  });
  
  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % products.length;
    updateCarousel();
  });
  
  function updateCarousel() {
    const product = products[currentIndex];
    
    // Clear and update carousel
    mobileCarousel.innerHTML = `
      <div class="glass p-3 rounded-sm" data-product-id="${product.id}">
        <div class="relative aspect-[3/4] overflow-hidden rounded-sm">
          <img
            src="${product.image}"
            alt="${product.name}"
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 p-4 glass backdrop-blur-md">
            <p class="text-xs text-gold/80">${product.category}</p>
            <h3 class="font-playfair text-lg text-white mb-1">${product.name}</h3>
            <p class="text-sm text-white/80">$${product.price}</p>
          </div>
        </div>
      </div>
    `;
    
    // Update indicators
    const allIndicators = indicators.querySelectorAll('div');
    allIndicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.className = 'h-1 rounded-full w-6 bg-gold transition-all duration-300';
      } else {
        indicator.className = 'h-1 rounded-full w-2 bg-gold/30 transition-all duration-300';
      }
    });

    // Add click event to open product modal
    mobileCarousel.querySelector(`[data-product-id="${product.id}"]`).addEventListener('click', function() {
      openProductModal(product);
    });
  }
}

// Desktop product grid setup
function setupProductGrid() {
  const productGrid = document.getElementById('productGrid');
  
  // Generate product cards for desktop grid
  products.slice(0, 8).forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'glass p-3 rounded-sm group cursor-pointer scroll-element';
    productCard.setAttribute('data-product-id', product.id);
    
    productCard.innerHTML = `
      <div class="relative aspect-[3/4] overflow-hidden rounded-sm">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute bottom-0 left-0 right-0 p-4 glass backdrop-blur-md">
          <p class="text-xs text-gold/80">${product.category}</p>
          <h3 class="font-playfair text-lg text-white mb-1">${product.name}</h3>
          <p class="text-sm text-white/80">$${product.price}</p>
        </div>
      </div>
    `;
    
    // Add a small delay to each card for staggered animation
    productCard.style.animationDelay = `${index * 0.1}s`;
    
    productGrid.appendChild(productCard);
    
    // Add click event to open product modal
    productCard.addEventListener('click', function() {
      openProductModal(product);
    });
  });
}

// Product modal functionality
function setupProductModal() {
  const modal = document.getElementById('productModal');
  const closeBtn = document.getElementById('closeProductModal');
  
  closeBtn.addEventListener('click', function() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  });
}

function openProductModal(product) {
  const modal = document.getElementById('productModal');
  const modalImage = document.getElementById('modalProductImage');
  const modalCategory = document.getElementById('modalProductCategory');
  const modalName = document.getElementById('modalProductName');
  const modalPrice = document.getElementById('modalProductPrice');
  const modalDescription = document.getElementById('modalProductDescription');
  
  // Populate modal content
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalCategory.textContent = product.category;
  modalName.textContent = product.name;
  modalPrice.textContent = '$' + product.price;
  modalDescription.textContent = product.description;
  
  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

// Contact form functionality
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    
    // Log form data (in a real application, this would be sent to a server)
    console.log('Form submitted:', formData);
    
    // Show success message
    contactForm.classList.add('hidden');
    formSuccess.classList.remove('hidden');
    
    // Reset form after 3 seconds
    setTimeout(function() {
      formSuccess.classList.add('hidden');
      contactForm.classList.remove('hidden');
      contactForm.reset();
    }, 3000);
  });
}
