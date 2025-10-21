import { Link } from 'react-router-dom'
import { getPropertiesByType } from '../data/propertiesData'

const Villas = () => {
  const villas = getPropertiesByType('villa').slice(0, 3) // Show first 3 villas

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#AD8B3A]/30"></div>
            <div className="flex items-center gap-3 bg-[#AD8B3A]/5 px-8 py-4 rounded-full border border-[#AD8B3A]/20">
              <div className="w-6 h-6 bg-[#AD8B3A] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
              </div>
              <span className="text-[#3E545D] font-bold text-xl tracking-wider uppercase">Luxury Villas</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#AD8B3A]/30"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-['Bricolage_Grotesque']">
            Premium Villa Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive selection of luxury villas featuring sophisticated design, premium amenities, and prime locations.
          </p>
        </div>

        {/* Villas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {villas.map((villa) => (
            <Link 
              key={villa.id}
              to={`/property/${villa.id}`}
              className="group cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                
                {/* Villa Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#F0ECDF]/50 to-[#AD8B3A]/20 rounded-t-2xl overflow-hidden">
                  <img 
                    src={villa.images[0]} 
                    alt={villa.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-300 hidden items-center justify-center">
                    <span className="text-gray-500">{villa.name} Image</span>
                  </div>
                  
                  {/* Sold Overlay */}
                  {villa.sold && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg transform -rotate-12 shadow-2xl">
                        SOLD
                      </div>
                    </div>
                  )}
                  
                  {villa.featured && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#AD8B3A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </>
                  )}

                  {/* Price Badge */}
                  {!villa.featured && !villa.sold && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#AD8B3A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {villa.price}
                      </span>
                    </div>
                  )}
                </div>

                {/* Villa Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-gray-900 mb-1 font-['Bricolage_Grotesque']">
                        {villa.name}
                      </h3>
                      <p className="text-gray-500 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {villa.location}
                      </p>
                    </div>
                    
                    {villa.featured && (
                      <div className="bg-[#AD8B3A]/10 text-[#AD8B3A] px-4 py-2 rounded-full text-base font-semibold">
                        {villa.price}
                      </div>
                    )}
                  </div>

                  {/* Villa Features */}
                  <div className="flex items-center justify-between gap-6 mb-4">
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2L3 9v9h4v-6h6v6h4V9l-7-7z"/>
                      </svg>
                      <span className="text-gray-900 text-sm">{villa.beds} Bedrooms</span>
                    </div>
                    
                    <div className="w-px h-12 bg-gray-200"></div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/>
                      </svg>
                      <span className="text-gray-900 text-sm">{villa.baths} Bathrooms</span>
                    </div>
                    
                    <div className="w-px h-12 bg-gray-200"></div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                      <span className="text-gray-900 text-sm">{villa.area}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full bg-[#AD8B3A] text-white py-3 px-4 rounded-lg hover:bg-[#AD8B3A]/90 transition-colors duration-300 font-medium">
                    View Villa Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            to="/villas" 
            className="inline-flex items-center gap-3 bg-[#AD8B3A] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#AD8B3A]/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <span>View All Villas</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Villas