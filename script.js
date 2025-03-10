document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"], button[onclick^="scrollToSection"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href')?.substring(1) || 
                      this.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
      
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 80; // Account for fixed header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Enhanced scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.opacity = '1';
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px'
    }
  );

  document.querySelectorAll('.scroll-element').forEach(element => {
    element.style.transform = 'translateY(20px)';
    element.style.opacity = '0';
    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(element);
  });

  // Mobile Menu
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (menuToggle && mobileMenu && closeMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Disable scrolling on the body
    });

    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = ''; // Re-enable scrolling on the body
    });

    // Close menu on outside click
    document.addEventListener('click', (event) => {
      if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });

    // Prevent clicks within the menu from closing it
    mobileMenu.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }

  // Function to close mobile menu
  window.closeMobileMenu = function() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
  };

  // Product Carousel
  const products = [
    {
      name: 'Neo-Tailored Overcoat',
      price: '4,950',
      image: 'https://images.unsplash.com/photo-1553815035-92b6eef66226?q=80&w=1835&auto=format&fit=crop',
      category: 'Outerwear',
      description: 'Structured long coat with sharp lapels and holographic lining. Magnetic closure instead of buttons for a futuristic touch. Made from cashmere-wool blend with water-repellent nano-coating.'
    },
    {
      name: 'Monogram Embossed Blazer',
      price: '3,800',
      image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1974&auto=format&fit=crop',
      category: 'Formalwear',
      description: 'Double-breasted minimalist blazer with Von Richter monogram subtly embossed on the fabric. Hidden inside pocket with NFC chip for digital authentication. Matte black buttons with gold engraving.'
    },
    {
      name: 'Luxury Tactical Vest',
      price: '2,400',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop',
      category: 'Statement Pieces',
      description: 'High-fashion reinterpretation of a tactical vest, using premium leather and silk mesh. Integrated minimalist gold buckles. Adjustable straps and hidden pockets for a sleek yet functional feel.'
    },
    {
      name: 'Asymmetric Silk & Leather Shirt',
      price: '1,950',
      image: 'https://images.unsplash.com/photo-1600053035559-c208a9ff007b?q=80&w=1779&auto=format&fit=crop',
      category: 'Tops',
      description: 'Fitted silk shirt with one leather panel on the side for a hybrid look. Hidden button placket for a clean, uninterrupted flow. Available in deep navy, charcoal, and matte black.'
    },
    {
      name: 'Futuristic Wide-Leg Trousers',
      price: '1,850',
      image: 'https://images.unsplash.com/photo-1583744946564-b52d01e7f922?q=80&w=1974&auto=format&fit=crop',
      category: 'Bottoms',
      description: 'Perfectly tailored, flowy yet structured. Fabric: Silk-wool blend with slight stretch. Embedded gold micro-details on the belt loops for an understated luxury look.'
    },
    {
      name: 'Luxury Techwear Hoodie',
      price: '1,200',
      image: 'https://images.unsplash.com/photo-1578932750355-5eb30ece487f?q=80&w=1935&auto=format&fit=crop',
      category: 'Casual Luxury',
      description: 'Ultra-premium hoodie made from high-performance fabric with heat-regulating properties. Sleek matte black finish with a gold-stitched Von Richter logo. Thumb holes, asymmetrical zip, and seamless pocket system.'
    },
    {
      name: 'Monochrome Futuristic Jumpsuit',
      price: '3,600',
      image: 'https://images.unsplash.com/photo-1535730142260-496e3db19f6f?q=80&w=1974&auto=format&fit=crop',
      category: 'Statement Pieces',
      description: 'One-piece luxury jumpsuit with a double-layered draped collar. Built-in adjustable belt with metallic accent. Made from wrinkle-resistant technical wool blend.'
    },
    {
      name: 'Avant-Garde Trench Coat',
      price: '5,200',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop',
      category: 'Outerwear',
      description: 'Classic trench, reimagined with multi-layered, angular cuts. Asymmetrical hemline and a floating belt design. Subtle metallic threads woven into the fabric for a futuristic sheen.'
    },
    {
      name: 'Minimalist Luxury Knitwear',
      price: '980',
      image: 'https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?q=80&w=1974&auto=format&fit=crop',
      category: 'Tops',
      description: 'Ultra-soft cashmere sweater with a raised, tonal Von Richter monogram. Slightly oversized fit with ribbed sleeves and bottom hem for structure. Comes in jet black, slate gray, and deep forest green.'
    },
    {
      name: 'Luxe Streetwear Joggers',
      price: '780',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop',
      category: 'Bottoms',
      description: 'Elevated sleek joggers made of a high-tech stretch fabric. Subtle gold zipper details and hidden side pockets. Adjustable waistband with a futuristic buckle design.'
    }
  ];

  const productGrid = document.getElementById('productGrid');
  const mobileProductCarousel = document.getElementById('mobileProductCarousel');
  const prevProduct = document.getElementById('prevProduct');
  const nextProduct = document.getElementById('nextProduct');
  const carouselIndicators = document.getElementById('carouselIndicators');
  const productModal = document.getElementById('productModal');
  const closeProductModal = document.getElementById('closeProductModal');

  const modalProductImage = document.getElementById('modalProductImage');
  const modalProductCategory = document.getElementById('modalProductCategory');
  const modalProductName = document.getElementById('modalProductName');
  const modalProductPrice = document.getElementById('modalProductPrice');
  const modalProductDescription = document.getElementById('modalProductDescription');

  let currentProductIndex = 0;

  function updateProductGrid() {
    if (!productGrid) return;
    productGrid.innerHTML = '';
    products.slice(0, 8).forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'glass p-3 rounded-sm group cursor-pointer';
      productDiv.innerHTML = `
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
      productDiv.addEventListener('click', () => openProductModal(product));
      productGrid.appendChild(productDiv);
    });
  }

  function updateMobileCarousel() {
    if (!mobileProductCarousel || !carouselIndicators) return;
    mobileProductCarousel.innerHTML = '';
    carouselIndicators.innerHTML = '';

    products.forEach((product, index) => {
      const productDiv = document.createElement('div');
      productDiv.className = 'w-full';
      productDiv.style.display = index === currentProductIndex ? 'block' : 'none';
      productDiv.innerHTML = `
        <div class="glass p-3 rounded-sm">
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
      productDiv.addEventListener('click', () => openProductModal(product));
      mobileProductCarousel.appendChild(productDiv);

      const indicatorButton = document.createElement('button');
      indicatorButton.className = `h-1 rounded-full ${index === currentProductIndex ? 'w-6 bg-gold' : 'w-2 bg-gold/30'} transition-all duration-300`;
      indicatorButton.addEventListener('click', () => {
        currentProductIndex = index;
        updateMobileCarousel();
      });
      carouselIndicators.appendChild(indicatorButton);
    });
  }

  function nextProductFunc() {
    currentProductIndex = (currentProductIndex + 1) % products.length;
    updateMobileCarousel();
  }

  function prevProductFunc() {
    currentProductIndex = (currentProductIndex - 1 + products.length) % products.length;
    updateMobileCarousel();
  }

  if (nextProduct) nextProduct.addEventListener('click', nextProductFunc);
  if (prevProduct) prevProduct.addEventListener('click', prevProductFunc);

  function openProductModal(product) {
    if (!productModal || !modalProductImage || !modalProductCategory || !modalProductName || !modalProductPrice || !modalProductDescription) return;

    modalProductImage.src = product.image;
    modalProductCategory.textContent = product.category;
    modalProductName.textContent = product.name;
    modalProductPrice.textContent = `$${product.price}`;
    modalProductDescription.textContent = product.description;

    productModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModalFunc() {
    if (!productModal) return;
    productModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (closeProductModal) closeProductModal.addEventListener('click', closeProductModalFunc);

  // Update year in footer
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear().toString();
  }

  updateProductGrid();
  updateMobileCarousel();
});
