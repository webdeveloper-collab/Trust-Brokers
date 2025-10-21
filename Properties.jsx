import { Link } from 'react-router-dom'
import { getHomepageProperties } from '../data/propertiesData'

const Properties = () => {
  const properties = getHomepageProperties()

  return (
    <section className="py-12 md:py-16 lg:py-28 bg-white" id="properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#AD8B3A]/30"></div>
            <div className="flex items-center gap-3 bg-[#AD8B3A]/5 px-6 py-3 rounded-full border border-[#AD8B3A]/20">
              <div className="w-6 h-6 bg-[#AD8B3A] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-[#3E545D] font-bold text-lg tracking-wider uppercase">Properties</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#AD8B3A]/30"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-['Bricolage_Grotesque'] leading-tight">
              Discover inspiring designed homes.
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Curated homes where elegance, style, and comfort unite.
            </p>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {properties.map((property) => (
            <Link 
              key={property.id}
              to={`/property/${property.id}`}
              className={`group cursor-pointer transition-all duration-300 hover:transform hover:scale-105 block ${
                property.featured ? 'shadow-xl' : 'hover:shadow-lg'
              }`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/property/${property.id}`;
              }}
            >
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                {/* Property Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#F0ECDF]/50 to-[#AD8B3A]/20">
                  <img 
                    src={property.images[0]} 
                    alt={property.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-300 hidden items-center justify-center">
                    <span className="text-sm sm:text-base text-gray-500">{property.name} Image</span>
                  </div>
                  {property.featured && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <button className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Property Details */}
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1 font-['Bricolage_Grotesque']">
                        {property.name}
                      </h3>
                      <p className="text-sm text-gray-500">{property.location}</p>
                    </div>
                    <div className="bg-[#AD8B3A]/10 text-[#AD8B3A] px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                      {property.price}
                    </div>
                  </div>

                  {/* Property Features */}
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2L3 9v9h4v-6h6v6h4V9l-7-7z"/>
                      </svg>
                      <span>{property.beds}</span>
                    </div>
                    
                    <div className="w-px h-8 sm:h-10 bg-gray-200"></div>
                    
                    <div className="flex items-center gap-1 sm:gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/>
                      </svg>
                      <span>{property.baths}</span>
                    </div>
                    
                    <div className="w-px h-8 sm:h-10 bg-gray-200"></div>
                    
                    <div className="flex items-center gap-1 sm:gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/properties"
            className="inline-flex items-center gap-3 bg-[#AD8B3A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#AD8B3A]/90 transition-all duration-300 hover:scale-105"
          >
            <span>View All Properties</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Properties