import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-left')
          }
        })
      },
      { threshold: 0.2 }
    )

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-right')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (contentRef.current) observer.observe(contentRef.current)
    if (imageRef.current) imageObserver.observe(imageRef.current)

    return () => {
      observer.disconnect()
      imageObserver.disconnect()
    }
  }, [])

  return (
    <section className="py-12 md:py-16 lg:py-28 bg-white relative overflow-hidden" id="about" ref={sectionRef}>
      {/* Decorative Vector Background */}
      <div className="absolute left-0 top-0 w-32 sm:w-64 h-32 sm:h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M40,40 L160,40 L160,160 L40,160 Z M60,60 L140,60 L140,140 L60,140 Z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 opacity-0 transform translate-x-[-50px]" ref={contentRef}>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-[#AD8B3A] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#3E545D] font-bold text-lg tracking-wider uppercase">Categories</span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#AD8B3A]/50 to-transparent ml-4"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-['Bricolage_Grotesque'] mb-6">
                Explore best properties with expert services.
              </h2>
              
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                Discover a diverse range of premium properties, from luxurious apartments to spacious villas, 
                tailored to your needs.
              </p>
            </div>
            
            <div className="pt-6">
              <Link 
                to="/properties"
                className="inline-flex items-center gap-3 bg-[#AD8B3A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#AD8B3A]/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>View properties</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 opacity-0 transform translate-x-[50px]" ref={imageRef}>
            {/* Large Image - Villas */}
            <Link to="/villas" className="col-span-2 relative group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#F0ECDF] to-[#AD8B3A]/20 rounded-2xl flex items-center justify-center overflow-hidden transform transition-all duration-500 hover:scale-105">
                <img 
                  src="/villa7.jpg" 
                  alt="Luxury Villa"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gray-300 rounded-lg hidden items-center justify-center">
                  <span className="text-gray-500">Luxury Villa Image</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white pr-3 sm:pr-6">
                <h3 className="text-lg sm:text-2xl font-medium mb-1 sm:mb-2">Villas</h3>
                <p className="text-white/80 text-xs sm:text-base">Experience elegance and comfort with our exclusive luxury villas.</p>
              </div>
            </Link>
            
            {/* Small Images */}
            {/* Apartments */}
            <Link to="/apartments" className="aspect-square bg-gradient-to-br from-[#AD8B3A]/10 to-[#F0ECDF]/30 rounded-2xl flex items-center justify-center transform transition-all duration-500 hover:scale-105 overflow-hidden relative group cursor-pointer">
              <img 
                src="/villa8.jpg" 
                alt="Apartment"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gray-300 rounded-lg hidden items-center justify-center">
                <span className="text-xs sm:text-sm md:text-base text-gray-500">Apartment</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white">
                <h4 className="text-sm sm:text-base font-medium">Apartments</h4>
              </div>
            </Link>
            
            {/* Plots */}
            <Link to="/plots" className="aspect-square bg-gradient-to-br from-[#F0ECDF]/30 to-[#AD8B3A]/10 rounded-2xl flex items-center justify-center transform transition-all duration-500 hover:scale-105 overflow-hidden relative group cursor-pointer">
              <img 
                src="/villa9.jpg" 
                alt="Office Space"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gray-300 rounded-lg hidden items-center justify-center">
                <span className="text-xs sm:text-sm md:text-base text-gray-500">Office Space</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white">
                <h4 className="text-sm sm:text-base font-medium">Plots</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About