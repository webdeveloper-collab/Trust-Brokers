import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getPropertyById } from '../data/propertiesData'

const PropertyDetail = () => {
  const { id } = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Get property data from centralized data
  const property = getPropertyById(id)
  
  // If property not found, show error message
  if (!property) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-28 pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Not Found</h1>
            <p className="text-lg text-gray-500 mb-8">The property you're looking for doesn't exist.</p>
            <Link 
              to="/properties" 
              className="inline-flex items-center gap-3 bg-[#AD8B3A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#AD8B3A]/90 transition-colors"
            >
              <span>Back to Properties</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Back Button */}
      <div className="pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/properties" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
            <span>Back to Properties</span>
          </Link>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="mb-10">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-[#07BE8A] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-[#3E545D] font-bold text-lg tracking-wider uppercase">
                {property.featured ? 'Featured ' : ''}{property.type === 'plot' ? 'Plot' : property.type === 'apartment' ? 'Apartment' : 'Villa'}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#07BE8A]/50 to-transparent ml-4"></div>
            </div>

            {/* Title and Location */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-10">
              <div>
                <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-2 font-['Bricolage_Grotesque']">
                  {property.name}
                </h1>
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>{property.location}</span>
                </div>
              </div>

              {/* Property Stats */}
              <div className="flex items-center gap-8">
                {property.type === 'plot' ? (
                  <>
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                      <span className="text-gray-900">Plot Size: {property.area}</span>
                    </div>
                    
                    <div className="w-px h-12 bg-gray-200"></div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2L3 9v9h4v-6h6v6h4V9l-7-7z"/>
                      </svg>
                      <span className="text-gray-900">Ready to Build</span>
                    </div>
                    
                    <div className="w-px h-12 bg-gray-200"></div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-900">Clear Title</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2L3 9v9h4v-6h6v6h4V9l-7-7z"/>
                      </svg>
                      <span className="text-gray-900">{property.beds} Bedrooms</span>
                    </div>
                    
                    <div className="w-px h-12 bg-gray-200"></div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/>
                      </svg>
                      <span className="text-gray-900">{property.baths} Bathrooms</span>
                    </div>
                    
                    <div className="w-px h-12 bg-gray-200"></div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                      <span className="text-gray-900">{property.area}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={property.images[currentImageIndex]} 
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Secondary Images */}
            <div className="space-y-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={property.images[1]} 
                  alt={`${property.name} interior`}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setCurrentImageIndex(1)}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={property.images[2]} 
                    alt={`${property.name} view`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setCurrentImageIndex(2)}
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={property.images[3]} 
                    alt={`${property.name} exterior`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setCurrentImageIndex(3)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Property Details */}
              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-6 font-['Bricolage_Grotesque']">
                  Property details
                </h2>
                <div className="border-t border-gray-100 pt-10 space-y-10">
                  
                  {/* Features */}
                  <div className="space-y-10">
                    {property.features.map((feature, index) => {
                      const renderFeatureIcon = (iconType) => {
                        const iconProps = "w-full h-full text-gray-900";
                        
                        switch(iconType) {
                          case 'pool':
                            return (
                              <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 13v-1a4 4 0 014-4h0a4 4 0 014 4v1M8 21l8-8"/>
                              </svg>
                            );
                          case 'smart':
                            return (
                              <svg className={iconProps} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8-1a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V7z" clipRule="evenodd"/>
                              </svg>
                            );
                          case 'energy':
                            return (
                              <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                              </svg>
                            );
                          case 'garden':
                            return (
                              <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                              </svg>
                            );
                          case 'security':
                            return (
                              <svg className={iconProps} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                            );
                          case 'mountain':
                          case 'vista':
                            return (
                              <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l6 6 4-4 8 8v6a1 1 0 01-1 1H2a1 1 0 01-1-1V9l4-6z"/>
                              </svg>
                            );
                          case 'fireplace':
                            return (
                              <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 1-4 4-4 1.657 1.657 3 4.618 3 8a2.98 2.98 0 01-.657 1.657z"/>
                              </svg>
                            );
                          case 'deck':
                            return (
                              <svg className={iconProps} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                              </svg>
                            );
                          case 'location':
                            return (
                              <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                              </svg>
                            );
                          case 'utilities':
                            return (
                              <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                              </svg>
                            );
                          case 'planning':
                            return (
                              <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                              </svg>
                            );
                          default:
                            return (
                              <svg className={iconProps} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                            );
                        }
                      };
                      
                      return (
                        <div key={index} className="flex items-start gap-6">
                          <div className="w-8 h-8 flex-shrink-0">
                            {renderFeatureIcon(feature.icon)}
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">
                              {feature.title}
                            </h3>
                            <p className="text-gray-500">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t border-gray-100 pt-10">
                    {/* Description */}
                    <div className="space-y-4">
                      {property.description.map((paragraph, index) => (
                        <p key={index} className="text-lg text-gray-900 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-10">
                    {/* What this property offers */}
                    <h3 className="text-xl font-medium text-gray-900 mb-6 font-['Bricolage_Grotesque']">
                      What this property offers
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          <span className="text-gray-900">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-10">
              
              {/* Price Card */}
              <div className="bg-[#07BE8A]/10 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-6 right-6 w-64 h-64 border border-[#07BE8A]/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="text-3xl font-medium text-gray-900 mb-1">
                      {property.price}
                    </div>
                    {property.originalPrice && (
                      <div className="text-sm text-gray-500 line-through mb-1">
                        {property.originalPrice}
                      </div>
                    )}
                    <div className="text-sm text-gray-500">
                      {property.originalPrice ? 'Discounted price' : 'Best price'}
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#AD8B3A] text-white py-4 px-8 rounded-full font-semibold hover:bg-[#AD8B3A]/90 transition-colors">
                    Get in touch
                  </button>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-10">
                <div className="space-y-6">
                  
                  {/* Quote Icon */}
                  <div className="w-11 h-11 border-2 border-[#07BE8A] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#07BE8A]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8-1a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V7z" clipRule="evenodd"/>
                    </svg>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg font-medium text-gray-900 leading-relaxed">
                    {property.testimonial.quote}
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-xl overflow-hidden">
                      <img 
                        src={property.testimonial.image}
                        alt={property.testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-lg font-medium text-gray-900 mb-1">
                        {property.testimonial.name}
                      </div>
                      <div className="text-gray-500">
                        {property.testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PropertyDetail
