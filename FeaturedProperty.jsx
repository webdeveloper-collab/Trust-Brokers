import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedProperties } from '../data/propertiesData'

const FeaturedProperty = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const featuredProperties = getFeaturedProperties()
  
  // If no featured properties, don't render the component
  if (featuredProperties.length === 0) return null
  
  // Use the first featured property
  const property = featuredProperties[0]
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <section className="py-12 md:py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left - Image Gallery */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#F0ECDF]/50 to-[#AD8B3A]/20 rounded-2xl overflow-hidden">
              <img 
                src={property.images[currentImageIndex]} 
                alt={property.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gray-300 hidden items-center justify-center">
                <span className="text-gray-500">{property.name} Image</span>
              </div>
            </div>
            
            {/* Image Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                      currentImageIndex === index ? 'bg-white' : 'bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Right - Property Details */}
          <div className="pl-0 lg:pl-10 space-y-6 md:space-y-8 mt-6 lg:mt-0">
            
            {/* Header */}
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-6 bg-[#AD8B3A] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[#3E545D] font-bold text-lg tracking-wider uppercase">
                    Featured {property.type === 'plot' ? 'Plot' : property.type === 'apartment' ? 'Apartment' : 'Villa'}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#AD8B3A]/50 to-transparent ml-4"></div>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-['Bricolage_Grotesque']">
                  {property.name}
                </h2>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 text-gray-500">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-sm sm:text-base">{property.location}</span>
              </div>
              
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                {property.description[0].substring(0, 200)}...
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 md:space-y-6">
              {property.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-6">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm md:text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA and Price */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Link 
                to={`/property/${property.id}`}
                className="bg-[#AD8B3A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#AD8B3A]/90 transition-colors w-full sm:w-auto text-center"
              >
                View Details
              </Link>
              
              <div className="text-center sm:text-left mt-2 sm:mt-0 w-full sm:w-auto">
                <div className="text-2xl sm:text-3xl font-medium text-gray-900">{property.price}</div>
                {property.originalPrice && (
                  <div className="text-xs sm:text-sm text-gray-400 line-through">{property.originalPrice}</div>
                )}
                <div className="text-xs sm:text-sm text-gray-500">
                  {property.originalPrice ? 'Discounted price' : 'Best price'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperty