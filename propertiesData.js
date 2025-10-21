// Centralized properties data with complete information for all property types

export const propertiesData = [
  // VILLAS
  {
    id: 1,
    name: "Serenity Height Villas",
    location: "15 Marine Drive, Kochi",
    price: "₹4.75Cr",
    originalPrice: "₹5.70Cr",
    beds: 4,
    baths: 3,
    area: "120m²",
    yearBuilt: 2023,
    type: "villa",
    featured: false,
    sold: true,
    images: [
      "/villa1.jpg",
      "/heroimg.png",
      "/villa2.jpg", 
      "/villa3.jpg",
      "/villa4.jpg"
    ],
    features: [
      {
        icon: "pool",
        title: "Private Swimming Pool",
        description: "Exclusive 25m infinity pool with integrated spa jets and underwater lighting."
      },
      {
        icon: "garden",
        title: "Landscaped Gardens",
        description: "Professionally designed gardens with exotic plants and automated irrigation."
      },
      {
        icon: "security",
        title: "24/7 Security",
        description: "Round-the-clock security with CCTV surveillance and biometric access."
      }
    ],
    description: [
      "Nestled in the prestigious Marine Drive district of Kochi, Serenity Height Villas represents the pinnacle of luxury living. This exceptional 4-bedroom, 3-bathroom residence spans 120m² of meticulously designed living space, where contemporary elegance meets timeless sophistication.",
      "The villa features an open-concept layout that seamlessly integrates indoor and outdoor living. Floor-to-ceiling windows flood the space with natural light while offering breathtaking views of the surrounding landscape. The gourmet kitchen is equipped with premium appliances, custom cabinetry, and a spacious island perfect for entertaining.",
      "Each bedroom serves as a private sanctuary, with the master suite featuring a walk-in closet and spa-like ensuite bathroom. The outdoor spaces include manicured gardens, a private pool area, and multiple entertainment zones designed for year-round enjoyment.",
      "Built in 2023 with sustainable materials and smart-home technology, this villa offers the perfect blend of luxury, comfort, and environmental consciousness."
    ],
    amenities: [
      "Smart home automation",
      "Private swimming pool",
      "Landscaped gardens", 
      "Premium kitchen appliances",
      "Walk-in closets",
      "Spa-like bathrooms",
      "24/7 security system",
      "Energy-efficient design",
      "Premium flooring",
      "Climate control",
      "Covered parking",
      "Entertainment areas"
    ],
    testimonial: {
      quote: "Serenity Height Villas exceeded all our expectations. The attention to detail, the quality of construction, and the serene environment make this our perfect dream home. The smart home features and beautiful gardens are absolutely stunning!",
      name: "Sarah & Michael Johnson",
      role: "Villa Owners",
      image: "/heroimg.png"
    }
  },

  {
    id: 2,
    name: "Mountain Retreat Villa",
    location: "18 Hill View Road, Kakkanad",
    price: "₹4.79Cr",
    originalPrice: "₹5.75Cr",
    beds: 5,
    baths: 2,
    area: "150m²",
    yearBuilt: 2024,
    type: "villa",
    featured: true,
    sold: true,
    images: [
      "/villa2.jpg",
      "/heroimg2.jpg",
      "/villa1.jpg",
      "/villa3.jpg", 
      "/villa5.jpg"
    ],
    features: [
      {
        icon: "mountain",
        title: "Mountain Views",
        description: "Panoramic mountain views from every room with floor-to-ceiling windows."
      },
      {
        icon: "fireplace", 
        title: "Modern Fireplace",
        description: "Contemporary gas fireplace as the centerpiece of the living area."
      },
      {
        icon: "deck",
        title: "Expansive Deck",
        description: "Large outdoor deck perfect for entertaining and mountain gazing."
      }
    ],
    description: [
      "Perched majestically on Hill View Road in Kakkanad, the Mountain Retreat Villa offers an unparalleled living experience with breathtaking mountain vistas. This stunning 5-bedroom, 2-bathroom home spans 150m² of carefully crafted living space, designed to maximize both comfort and the spectacular natural surroundings.",
      "The villa's architecture celebrates the natural landscape with large windows and outdoor living spaces that blur the lines between interior and exterior. The spacious living areas feature vaulted ceilings, exposed beams, and a striking modern fireplace that serves as the heart of the home.",
      "The master suite occupies the entire upper level, offering private mountain views and a luxurious bathroom with a soaking tub positioned to take advantage of the scenery. Four additional bedrooms provide flexibility for family, guests, or home office spaces.",
      "Built in 2024 with the latest in sustainable technology, this retreat combines luxury living with environmental responsibility, featuring solar panels, efficient heating systems, and locally sourced materials."
    ],
    amenities: [
      "Panoramic mountain views",
      "Modern gas fireplace",
      "Expansive outdoor deck",
      "Vaulted ceilings",
      "Solar panel system",
      "Luxury bathrooms",
      "Premium hardwood floors",
      "Gourmet kitchen",
      "Walk-in pantry",
      "Two-car garage",
      "Hiking trail access",
      "Sustainable materials"
    ],
    testimonial: {
      quote: "Living in Mountain Retreat Villa feels like a permanent vacation. The mountain views are absolutely breathtaking, and the home's design perfectly captures the natural beauty of the surroundings. It's our peaceful sanctuary!",
      name: "David & Lisa Chen",
      role: "Villa Owners", 
      image: "/heroimg2.jpg"
    }
  },

  {
    id: 3,
    name: "Modern Luxe Villa",
    location: "20 Tech Park Avenue, Kakkanad",
    price: "₹4.83Cr", 
    originalPrice: "₹5.80Cr",
    beds: 3,
    baths: 4,
    area: "180m²",
    yearBuilt: 2025,
    type: "villa",
    featured: false,
    sold: true,
    images: [
      "/villa3.jpg",
      "/heroimg3.jpg",
      "/villa1.jpg",
      "/villa2.jpg",
      "/villa4.jpg"
    ],
    features: [
      {
        icon: "smart",
        title: "Smart Home Integration",
        description: "Fully automated smart home system controlling lighting, climate, and security."
      },
      {
        icon: "spa",
        title: "Private Spa Suite",
        description: "Dedicated spa room with sauna, steam room, and massage area."
      },
      {
        icon: "wine",
        title: "Wine Cellar",
        description: "Temperature-controlled wine cellar with space for 200+ bottles."
      }
    ],
    description: [
      "The Modern Luxe Villa represents the future of luxury living, seamlessly blending cutting-edge technology with sophisticated design. Located at 20 Tech Park Avenue in Kakkanad, this 3-bedroom, 4-bathroom masterpiece spans 180m² of intelligently designed space that redefines contemporary living.",
      "Every aspect of this villa has been carefully considered, from the automated smart home systems that anticipate your needs to the premium materials that create an atmosphere of understated luxury. The open-plan living areas flow effortlessly, with each space serving multiple functions while maintaining distinct character.",
      "The villa's crown jewel is the private spa suite, complete with sauna, steam room, and relaxation areas. The gourmet kitchen features the latest in culinary technology, while the wine cellar provides the perfect environment for connoisseurs to store and display their collections.",
      "Built in 2025 with zero-emission technology and sustainable luxury materials, this villa sets new standards for environmentally conscious luxury living."
    ],
    amenities: [
      "Full smart home automation",
      "Private spa suite with sauna",
      "Temperature-controlled wine cellar",
      "Zero-emission technology",
      "Premium natural materials",
      "Automated lighting systems",
      "Climate-controlled zones",
      "Professional kitchen equipment",
      "Luxury bathroom fixtures",
      "Integrated sound system",
      "Electric vehicle charging",
      "Rooftop garden access"
    ],
    testimonial: {
      quote: "Modern Luxe Villa is a technological marvel wrapped in elegant design. The smart home features make daily life effortless, and the spa suite is like having a luxury resort at home. It's the perfect fusion of luxury and innovation!",
      name: "Amanda & Robert Williams",
      role: "Villa Owners",
      image: "/heroimg3.jpg"
    }
  },

  // APARTMENTS
  {
    id: 7,
    name: "Luxury Apartment Complex",
    location: "22 MG Road, Kochi",
    price: "₹3.17Cr",
    originalPrice: "₹3.80Cr", 
    beds: 3,
    baths: 2,
    area: "110m²",
    yearBuilt: 2024,
    type: "apartment",
    featured: false,
    sold: true,
    images: [
      "/villa7.jpg",
      "/heroimg.png",
      "/villa8.jpg",
      "/villa9.jpg",
      "/villa1.jpg"
    ],
    features: [
      {
        icon: "city",
        title: "Downtown Views",
        description: "Stunning panoramic views of Miami's skyline and bustling downtown district."
      },
      {
        icon: "gym",
        title: "Fitness Center",
        description: "State-of-the-art fitness facility with personal training services available."
      },
      {
        icon: "concierge",
        title: "Concierge Service",
        description: "24/7 concierge service for all your lifestyle and business needs."
      }
    ],
    description: [
      "Located in the heart of Kochi's prestigious MG Road, this luxury apartment offers sophisticated urban living at its finest. This meticulously designed 3-bedroom, 2-bathroom residence spans 110m² of premium living space with floor-to-ceiling windows showcasing breathtaking city views.",
      "The apartment features an open-concept design with high-end finishes throughout. The gourmet kitchen boasts premium appliances, quartz countertops, and custom cabinetry. The spacious living area seamlessly flows onto a private balcony, perfect for morning coffee or evening entertaining while enjoying the city lights.",
      "The master suite includes a walk-in closet and ensuite bathroom with luxury fixtures. Two additional bedrooms offer flexibility for guests, home office, or family needs. Every detail has been carefully selected to create a harmonious blend of comfort and sophistication.",
      "Built in 2024, the complex offers resort-style amenities including a rooftop pool, fitness center, and 24-hour concierge service, providing the ultimate in urban convenience and luxury."
    ],
    amenities: [
      "Panoramic city views",
      "Rooftop swimming pool",
      "State-of-the-art fitness center",
      "24/7 concierge service",
      "High-speed elevator access",
      "Premium kitchen appliances",
      "In-unit laundry",
      "Private balcony",
      "Secure parking garage",
      "Package delivery service",
      "Business center",
      "Resident lounge"
    ],
    testimonial: {
      quote: "Living at Luxury Apartment Complex gives us the best of both worlds - the convenience of downtown living with all the amenities of a luxury resort. The views are incredible and the service is exceptional!",
      name: "Jennifer & Mark Davis",
      role: "Apartment Residents",
      image: "/heroimg.png"
    }
  },

  {
    id: 8, 
    name: "Skyline Tower Apartments",
    location: "10 Lulu Mall Road, Aluva",
    price: "₹3.85Cr",
    originalPrice: "₹4.50Cr",
    beds: 2,
    baths: 2,
    area: "95m²",
    yearBuilt: 2023,
    type: "apartment",
    featured: false,
    sold: true,
    images: [
      "/villa8.jpg",
      "/heroimg2.jpg", 
      "/villa7.jpg",
      "/villa9.jpg",
      "/villa2.jpg"
    ],
    features: [
      {
        icon: "height",
        title: "High-Rise Living",
        description: "Premium high-rise apartment on the 25th floor with elevator access."
      },
      {
        icon: "balcony",
        title: "Private Balcony",
        description: "Spacious private balcony with glass railings and city views."
      },
      {
        icon: "luxury",
        title: "Luxury Finishes", 
        description: "Premium materials including marble countertops and hardwood floors."
      }
    ],
    description: [
      "Skyline Tower Apartments represents the pinnacle of high-rise living in Aluva. This elegant 2-bedroom, 2-bathroom residence on the 25th floor offers 95m² of sophisticated living space with unobstructed views of the city's most iconic landmarks and natural beauty.",
      "The apartment's contemporary design maximizes natural light and space efficiency. The open-plan living area features premium hardwood floors and seamlessly connects to a private balcony where residents can enjoy morning coffee or evening cocktails while taking in the spectacular skyline views.",
      "The gourmet kitchen features top-of-the-line appliances, marble countertops, and custom cabinetry designed for both functionality and style. The master bedroom includes an ensuite bathroom with luxury fixtures and a walk-in closet, while the second bedroom offers flexibility as a guest room or home office.",
      "Built in 2023 with the latest in high-rise construction technology, the building offers exceptional amenities and services that cater to the discerning urban professional seeking luxury, convenience, and prestige."
    ],
    amenities: [
      "25th floor premium location", 
      "Unobstructed skyline views",
      "Private balcony with glass railings",
      "Premium hardwood flooring",
      "Marble kitchen countertops",
      "High-speed elevator access",
      "Luxury bathroom fixtures",
      "In-unit climate control",
      "Valet parking service",
      "Doorman service",
      "Rooftop terrace access",
      "Premium building amenities"
    ],
    testimonial: {
      quote: "The views from Skyline Tower are absolutely stunning! Living on the 25th floor gives us a perspective of the city that never gets old. The apartment is beautifully designed and the building amenities are world-class.",
      name: "Alex & Maria Rodriguez", 
      role: "Apartment Residents",
      image: "/heroimg2.jpg"
    }
  },

  {
    id: 9,
    name: "Ocean View Apartments", 
    location: "8 Backwater Drive, Thripunithura",
    price: "₹4.27Cr",
    originalPrice: "₹5.10Cr",
    beds: 4,
    baths: 3,
    area: "140m²",
    yearBuilt: 2024,
    type: "apartment",
    featured: true,
    sold: true,
    images: [
      "/villa9.jpg",
      "/heroimg3.jpg",
      "/villa7.jpg", 
      "/villa8.jpg",
      "/villa3.jpg"
    ],
    features: [
      {
        icon: "ocean",
        title: "Backwater Views",
        description: "Direct backwater views from living areas and master bedroom with sunrise vistas."
      },
      {
        icon: "beach",
        title: "Backwater Access",
        description: "Private backwater access with dedicated waterfront amenities and services."
      },
      {
        icon: "terrace",
        title: "Water Terrace",
        description: "Expansive backwater-facing terrace perfect for entertaining and relaxation."
      }
    ],
    description: [
      "Ocean View Apartments offers an unparalleled backwater living experience on Thripunithura's most coveted waterfront. This spectacular 4-bedroom, 3-bathroom residence spans 140m² of luxury living space, with every room designed to capture and celebrate the magnificent backwater views.",
      "The apartment's floor-to-ceiling windows and sliding glass doors create a seamless connection between indoor and outdoor living. The spacious living area opens directly onto an expansive backwater-facing terrace, where residents can enjoy the soothing sounds of water and breathtaking sunrise views.",
      "The gourmet kitchen features premium appliances and a large island that serves as both prep space and casual dining area. The master suite is a true oceanfront retreat with direct terrace access, walk-in closet, and a spa-like bathroom designed for relaxation after beach days.",
      "Built in 2024 with hurricane-resistant construction and sustainable coastal materials, this residence offers both luxury and peace of mind in one of Miami's most desirable beachfront locations."
    ],
    amenities: [
      "Direct backwater views",
      "Private backwater access",  
      "Expansive water terrace",
      "Hurricane-resistant construction",
      "Premium coastal finishes",
      "Beachfront concierge",
      "Ocean-view master suite",
      "Gourmet kitchen island",
      "Spa-like bathrooms", 
      "Climate-controlled storage",
      "Beach equipment storage",
      "Sunrise viewing areas"
    ],
    testimonial: {
      quote: "Waking up to ocean views every morning is a dream come true! Ocean View Apartments gives us the perfect beachfront lifestyle with all the luxury amenities we could want. The terrace is our favorite spot for watching the sunrise.",
      name: "Thomas & Rachel Green",
      role: "Apartment Residents",
      image: "/heroimg3.jpg" 
    }
  },

  // PLOTS
  {
    id: 10,
    name: "Prime Residential Plot",
    location: "15 Green Gardens, Kalamassery", 
    price: "₹2.50Cr",
    originalPrice: "₹3.20Cr",
    beds: 0,
    baths: 0,
    area: "300m²",
    yearBuilt: null,
    type: "plot",
    featured: false,
    sold: true,
    images: [
      "/plot1.jpg",
      "/plot2.jpg",
      "/plot3.jpg",
      "/plot4.jpg", 
      "/plot5.jpg"
    ],
    features: [
      {
        icon: "location",
        title: "Prime Location",
        description: "Located in prestigious Hillside Estate with excellent connectivity and infrastructure."
      },
      {
        icon: "utilities",
        title: "Ready Infrastructure", 
        description: "All utilities connected including water, electricity, gas, and high-speed internet."
      },
      {
        icon: "planning",
        title: "Approved Plans",
        description: "Pre-approved architectural plans for luxury villa construction available."
      }
    ],
    description: [
      "This prime residential plot in the exclusive Green Gardens area represents an exceptional opportunity to build your dream home in one of Kalamassery's most sought-after neighborhoods. Spanning 300m² of perfectly positioned land, this plot offers the ideal foundation for creating a custom luxury residence.",
      "The gently sloping terrain provides excellent drainage and offers potential for creative architectural designs that can maximize views and outdoor living spaces. The plot's orientation ensures optimal natural light throughout the day while providing privacy from neighboring properties.",
      "Located within walking distance of premium amenities including exclusive clubs, fine dining establishments, and boutique shopping, this plot combines convenience with prestige. The neighborhood is known for its tree-lined streets, security, and community of discerning residents.", 
      "All necessary infrastructure is in place, including underground utilities, paved road access, and established landscaping guidelines that ensure the area maintains its exclusive character while allowing for architectural creativity."
    ],
    amenities: [
      "300m² buildable area",
      "Underground utilities connected",
      "Paved road access",
      "Established neighborhood",
      "Security patrol service",
      "Landscaping guidelines",
      "Architectural review board", 
      "Premium location",
      "Investment potential",
      "Custom build opportunity",
      "Utility connections ready",
      "Clear title ownership"
    ],
    testimonial: {
      quote: "We found the perfect plot to build our dream home! The location in Green Gardens, Kalamassery is incredible, and having all the utilities ready made the building process so much smoother. We couldn't be happier with our choice!",
      name: "Kevin & Susan Miller",
      role: "Plot Owners",
      image: "/heroimg.png"
    }
  },

  {
    id: 11,
    name: "Premium Corner Plot",
    location: "25 Valley View, Angamaly",
    price: "₹1.95Cr", 
    originalPrice: "₹2.40Cr",
    beds: 0,
    baths: 0,
    area: "250m²",
    yearBuilt: null,
    type: "plot",
    featured: false,
    sold: true,
    images: [
      "/plot2.jpg",
      "/plot3.jpg",
      "/plot4.jpg",
      "/plot5.jpg",
      "/plot6.jpg" 
    ],
    features: [
      {
        icon: "corner",
        title: "Corner Plot Advantage",
        description: "Corner plot with access from two streets providing enhanced privacy and design flexibility."
      },
      {
        icon: "valley",
        title: "Valley Views",
        description: "Elevated position offering scenic valley views and mountain backdrop."
      },
      {
        icon: "community",
        title: "Gated Community",
        description: "Located within secure gated community with exclusive amenities and services."
      }
    ],
    description: [
      "Premium Corner Plot in Valley View offers a unique opportunity to build in one of Angamaly's most desirable gated communities. This 250m² corner plot provides exceptional design flexibility with dual street access and elevated positioning that captures stunning valley and mountain views.",
      "The corner location provides enhanced privacy and allows for creative architectural approaches that maximize both the scenic views and functional outdoor spaces. The gentle elevation change across the plot creates opportunities for multi-level designs and terraced landscaping.",
      "Valley View is renowned for its natural beauty, with mature trees, walking trails, and a strong sense of community among residents. The gated community provides 24-hour security, community center, and maintains strict architectural standards that preserve property values.",
      "This plot is ideally positioned to take advantage of Kerala's tropical climate, with optimal sun exposure and natural windbreaks that create ideal conditions for outdoor living and entertaining spaces."
    ],
    amenities: [
      "250m² corner plot positioning",
      "Dual street access points",
      "Elevated valley views",
      "Gated community security", 
      "Community center access",
      "Walking trails nearby",
      "Architectural guidelines",
      "Mature landscape surroundings",
      "Optimal sun exposure",
      "Natural windbreak protection",
      "Underground utility access",
      "Premium neighborhood"
    ],
    testimonial: {
      quote: "The corner plot in Valley View, Angamaly exceeded our expectations! The valley views are breathtaking, and being in a gated community gives us peace of mind. The building restrictions actually helped us create a better design!",
      name: "Paul & Linda Thompson", 
      role: "Plot Owners",
      image: "/heroimg2.jpg"
    }
  },

  {
    id: 12,
    name: "Waterfront Land Plot",
    location: "12 Backwater Shore, Muvattupuzha",
    price: "₹3.75Cr",
    originalPrice: "₹4.50Cr", 
    beds: 0,
    baths: 0,
    area: "400m²",
    yearBuilt: null,
    type: "plot",
    featured: true,
    sold: true,
    images: [
      "/plot3.jpg",
      "/plot4.jpg",
      "/plot5.jpg",
      "/plot6.jpg",
      "/plot7.jpg"
    ],
    features: [
      {
        icon: "waterfront",
        title: "Waterfront Access",
        description: "Direct backwater access with 50 meters of water frontage and private boat rights."
      },
      {
        icon: "recreation",
        title: "Water Recreation", 
        description: "Perfect for water sports, fishing, and recreational boating activities."
      },
      {
        icon: "sunset",
        title: "Sunset Views",
        description: "Western exposure providing spectacular sunset views over the backwaters."
      }
    ],
    description: [
      "This exceptional waterfront plot on Backwater Shore represents the ultimate in luxury backwater living opportunities. Spanning 400m² with 50 meters of pristine backwater frontage, this plot offers the rare chance to build a custom waterfront estate in one of Muvattupuzha's most exclusive neighborhoods.",
      "The gently sloping terrain leads naturally down to the water's edge, providing ideal conditions for designing a home that maximizes backwater views and outdoor living spaces. The western exposure ensures spectacular sunset views over the water, while mature trees provide natural privacy and windbreak protection.",
      "The plot includes private boat rights, allowing for personal watercraft storage and easy access to the backwater's recreational opportunities. The calm, clear waters are perfect for fishing, kayaking, and other water activities right from your own backyard.",
      "This is a rare opportunity in a location where waterfront plots seldom become available. The established neighborhood features luxury homes with extensive landscaping, and strict covenants ensure the area maintains its exclusive character and high property values."
    ],
    amenities: [
      "400m² waterfront plot",
      "50 meters backwater frontage",
      "Private boat rights included",
      "Western sunset exposure",
      "Mature tree protection", 
      "Direct water access",
      "Recreational water rights",
      "Gentle sloping terrain",
      "Exclusive neighborhood",
      "High property values",
      "Established utilities",
      "Premium location rarity"
    ],
    testimonial: {
      quote: "Finding a waterfront plot like this is incredibly rare! The backwater views are stunning, and having boat rights means we can enjoy boating right from our backyard. It's the perfect location for our dream waterfront home!",
      name: "Michael & Catherine Lee",
      role: "Plot Owners", 
      image: "/heroimg3.jpg"
    }
  },

  // Additional Villa Properties
  {
    id: 4,
    name: "Royal Orchid Villas",
    location: "12 Heritage Park, Kaloor",
    price: "₹4.91Cr",
    originalPrice: "₹5.90Cr", 
    beds: 6,
    baths: 3,
    area: "200m²",
    yearBuilt: 2024,
    type: "villa",
    featured: false,
    sold: true,
    images: [
      "/villa4.jpg",
      "/heroimg.png",
      "/villa1.jpg",
      "/villa2.jpg",
      "/villa3.jpg"
    ],
    features: [
      {
        icon: "royal",
        title: "Royal Architecture", 
        description: "Inspired by classic European architecture with modern luxury amenities."
      },
      {
        icon: "orchid",
        title: "Orchid Gardens",
        description: "Spectacular orchid gardens designed by award-winning landscape architects."
      },
      {
        icon: "grand",
        title: "Grand Entertaining",
        description: "Spacious entertainment areas perfect for hosting elegant gatherings."
      }
    ],
    description: [
      "Royal Orchid Villas stands as a testament to timeless elegance and contemporary luxury in the heart of Heritage Park, Kaloor. This magnificent 6-bedroom, 3-bathroom estate spans 200m² of exquisitely designed living space, where European-inspired architecture meets modern sophistication.",
      "The villa's grand entrance leads to soaring foyers and spacious reception areas designed for entertaining. Rich hardwood floors, custom millwork, and carefully selected fixtures create an atmosphere of refined luxury throughout the home. The gourmet kitchen features professional-grade appliances and butler's pantry for effortless entertaining.",
      "The master suite occupies its own private wing, featuring a sitting area, walk-in closet, and luxurious bathroom with soaking tub and separate shower. Five additional bedrooms provide ample space for family and guests, each thoughtfully designed with built-in storage and abundant natural light.",
      "The property's crown jewel is the award-winning orchid garden, featuring rare and exotic varieties in a climate-controlled greenhouse, surrounded by manicured grounds that provide a serene backdrop for outdoor entertaining and relaxation."
    ],
    amenities: [
      "European-inspired architecture",
      "Award-winning orchid gardens",
      "Professional kitchen equipment", 
      "Grand entertainment areas",
      "Master suite private wing",
      "Climate-controlled greenhouse",
      "Custom millwork throughout",
      "Butler's pantry",
      "Six spacious bedrooms",
      "Manicured estate grounds",
      "Premium hardwood flooring",
      "Elegant reception areas"
    ],
    testimonial: {
      quote: "Royal Orchid Villas is like living in a European castle with all modern conveniences. The orchid gardens are absolutely breathtaking, and the entertaining spaces are perfect for hosting our family gatherings. It truly feels royal!",
      name: "Victoria & Charles Hamilton",
      role: "Villa Owners",
      image: "/heroimg.png"
    }
  },

  {
    id: 5,
    name: "Grand Vista Villas", 
    location: "25 Skyline Heights, Palarivattom",
    price: "₹5.91Cr",
    originalPrice: "₹7.10Cr",
    beds: 2,
    baths: 1,
    area: "90m²",
    yearBuilt: 2025,
    type: "villa",
    featured: false,
    sold: true,
    images: [
      "/villa5.jpg", 
      "/heroimg2.jpg",
      "/villa1.jpg",
      "/villa3.jpg",
      "/villa4.jpg"
    ],
    features: [
      {
        icon: "vista",
        title: "Panoramic Vistas",
        description: "360-degree panoramic views of San Diego skyline, mountains, and Pacific Ocean."
      },
      {
        icon: "modern",
        title: "Ultra-Modern Design",
        description: "Cutting-edge architecture with clean lines and sustainable materials."
      },
      {
        icon: "efficiency",
        title: "Space Efficiency", 
        description: "Brilliantly designed compact luxury maximizing every square meter."
      }
    ],
    description: [
      "Grand Vista Villas represents the pinnacle of compact luxury living, where every square meter of the 90m² space has been meticulously designed to maximize both function and beauty. This innovative 2-bedroom, 1-bathroom villa proves that luxury is about quality, not just quantity.",
      "Perched on prestigious Skyline Heights in Palarivattom, the villa offers breathtaking 360-degree views encompassing the Kochi cityscape, surrounding hills, and glimpses of the Arabian Sea. Floor-to-ceiling windows and strategically placed skylights flood the space with natural light while showcasing the spectacular vistas.",
      "The open-concept design seamlessly integrates living, dining, and kitchen areas, with high-end finishes and built-in storage solutions that maintain clean, uncluttered lines. The master bedroom features a wall of windows and innovative storage solutions, while the second bedroom doubles as a flexible space for guests or home office.",
      "Built in 2025 with the latest in sustainable technology and premium materials, this villa demonstrates how thoughtful design can create extraordinary living experiences in efficiently designed spaces."
    ],
    amenities: [
      "360-degree panoramic views",
      "Ultra-modern architecture",
      "Sustainable construction materials",
      "Built-in storage solutions",
      "Floor-to-ceiling windows",
      "Strategic skylight placement",
      "High-end compact appliances",
      "Flexible living spaces",
      "Premium finishes throughout",
      "Energy-efficient systems", 
      "Smart space utilization",
      "Spectacular vista positioning"
    ],
    testimonial: {
      quote: "Grand Vista Villas proved that you don't need a huge space to live luxuriously! The views are absolutely incredible from every window, and the design is so clever - everything has a place and purpose. It's our perfect modern sanctuary!",
      name: "Emma & James Wilson",
      role: "Villa Owners",
      image: "/heroimg2.jpg"
    }
  },

  {
    id: 6,
    name: "Imperial Pearl Villas",
    location: "18 Waterfront Avenue, Vytilla", 
    price: "₹5.25Cr",
    originalPrice: "₹6.30Cr",
    beds: 4,
    baths: 2,
    area: "130m²",
    yearBuilt: 2023,
    type: "villa",
    featured: false,
    sold: true,
    images: [
      "/villa6.jpg",
      "/heroimg3.jpg", 
      "/villa1.jpg",
      "/villa2.jpg",
      "/villa5.jpg"
    ],
    features: [
      {
        icon: "pearl",
        title: "Pearl-Inspired Design",
        description: "Elegant curved architecture inspired by natural pearl formations."
      },
      {
        icon: "bay",
        title: "Backwater Access",
        description: "Private access to Vembanad backwaters with exclusive waterfront and boat rights."
      },
      {
        icon: "imperial",
        title: "Imperial Amenities",
        description: "Luxury amenities including private chef kitchen and wine collection area."
      }
    ],
    description: [
      "Imperial Pearl Villas captures the essence of waterfront luxury with its unique pearl-inspired architecture and exclusive Vembanad backwater location in Vytilla. This stunning 4-bedroom, 2-bathroom residence spans 130m² of thoughtfully designed space where organic curves and premium finishes create an atmosphere of serene elegance.",
      "The villa's distinctive curved walls and flowing interior spaces mimic the natural beauty of pearls, with soft, rounded edges that create a sense of harmony and tranquility. Large windows and glass doors open onto terraces that provide seamless indoor-outdoor living with direct views of the Vembanad backwaters.",
      "The gourmet kitchen features premium appliances and a unique curved island that serves as both functional workspace and artistic centerpiece. The master suite includes a curved glass wall overlooking the backwaters, while three additional bedrooms each offer views of either the water or landscaped gardens.",
      "Built in 2023 with exclusive backwater access rights, residents enjoy private waterfront areas, boat access, and the prestige of one of Vytilla's most sought-after waterfront addresses."
    ],
    amenities: [
      "Pearl-inspired curved architecture",
      "Exclusive Vembanad backwater access",
      "Private waterfront rights",
      "Boat access included",
      "Curved glass architectural features",
      "Gourmet kitchen with unique island",
      "Waterfront master suite", 
      "Landscaped garden views",
      "Premium coastal finishes",
      "Seamless indoor-outdoor living",
      "Private terrace areas",
      "Exclusive waterfront location"
    ],
    testimonial: {
      quote: "Imperial Pearl Villas is truly one-of-a-kind! The curved architecture is stunning and so unique, and having private access to Vembanad backwaters makes it feel like our own private resort. The backwater views are simply magical!",
      name: "Isabella & Antonio Martinez",
      role: "Villa Owners", 
      image: "/heroimg3.jpg"
    }
  }
];

// Helper function to get property by ID
export const getPropertyById = (id) => {
  return propertiesData.find(property => property.id === parseInt(id));
};

// Helper function to get properties by type
export const getPropertiesByType = (type) => {
  if (type === 'all') return propertiesData;
  return propertiesData.filter(property => property.type === type);
};

// Helper function to get featured properties
export const getFeaturedProperties = () => {
  return propertiesData.filter(property => property.featured);
};

// Helper function to get properties for homepage (first 6)
export const getHomepageProperties = () => {
  return propertiesData.slice(0, 6);
};