import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { propertiesData, getPropertiesByType } from '../data/propertiesData'

const VillasPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchLocation, setSearchLocation] = useState('')
  const propertiesPerPage = 9

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const allVillas = getPropertiesByType('villa')

  const filteredVillas = allVillas.filter(property => {
    const matchesLocation = searchLocation === '' || 
      property.location.toLowerCase().includes(searchLocation.toLowerCase())
    return matchesLocation
  })

  const totalPages = Math.ceil(filteredVillas.length / propertiesPerPage)
  const startIndex = (currentPage - 1) * propertiesPerPage
  const currentProperties = filteredVillas.slice(startIndex, startIndex + propertiesPerPage)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Back Button */}
      <div className="pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#07BE8A]/30"></div>
              <div className="flex items-center gap-3 bg-[#07BE8A]/5 px-8 py-4 rounded-full border border-[#07BE8A]/20">
                <div className="w-6 h-6 bg-[#07BE8A] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#3E545D] font-bold text-xl tracking-wider uppercase">Luxury Villas</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#07BE8A]/30"></div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 font-['Bricolage_Grotesque'] leading-tight">
              Premium Villas
            </h1>
            
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Discover our collection of luxury villas designed for sophisticated living with premium amenities and breathtaking views.
            </p>
          </div>

          {/* Search Section */}
          <div className="mb-16">
            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search villas by location..."
                  value={searchLocation}
                  onChange={(e) => {
                    setSearchLocation(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#07BE8A] focus:ring-2 focus:ring-[#07BE8A]/20 transition-all"
                />
                {searchLocation && (
                  <button
                    onClick={() => {
                      setSearchLocation('')
                      setCurrentPage(1)
                    }}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          {searchLocation && (
            <div className="text-center mb-8">
              <p className="text-gray-600">
                {filteredVillas.length} {filteredVillas.length === 1 ? 'villa' : 'villas'} found in "{searchLocation}"
              </p>
            </div>
          )}

          {/* Properties Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {filteredVillas.length > 0 ? (
              currentProperties.map((property) => (
                <Link 
                  key={property.id}
                  to={`/property/${property.id}`}
                  className="group cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`bg-white border border-gray-100 rounded-2xl overflow-hidden ${
                    property.featured ? 'shadow-xl' : 'hover:shadow-lg'
                  } transition-all duration-300`}>
                    
                    {/* Property Image */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-[#F0ECDF]/50 to-[#AD8B3A]/20 rounded-t-2xl overflow-hidden">
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
                        <span className="text-gray-500">{property.name} Image</span>
                      </div>
                      
                      {/* Sold Overlay */}
                      {property.sold && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg transform -rotate-12 shadow-2xl">
                            SOLD
                          </div>
                        </div>
                      )}
                      
                      {property.featured && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Property Details */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                          <h3 className="text-xl font-medium text-gray-900 mb-1 font-['Bricolage_Grotesque']">
                            {property.name}
                          </h3>
                          <p className="text-gray-500">{property.location}</p>
                        </div>
                        
                        <div className="bg-[#07BE8A]/10 text-[#07BE8A] px-5 py-2 rounded-full text-base font-normal">
                          {property.price}
                        </div>
                      </div>

                      {/* Villa Features */}
                      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
                        <div className="flex flex-col items-center gap-2">
                          <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2L3 9v9h4v-6h6v6h4V9l-7-7z"/>
                          </svg>
                          <span className="text-gray-900 text-xs sm:text-sm md:text-base text-center">{property.beds} Beds</span>
                        </div>
                        
                        <div className="w-px h-12 bg-gray-200"></div>
                        
                        <div className="flex flex-col items-center gap-2">
                          <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/>
                          </svg>
                          <span className="text-gray-900 text-xs sm:text-sm md:text-base text-center">{property.baths} Baths</span>
                        </div>
                        
                        <div className="w-px h-12 bg-gray-200"></div>
                        
                        <div className="flex flex-col items-center gap-2">
                          <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                          </svg>
                          <span className="text-gray-900 text-xs sm:text-sm md:text-base text-center">{property.area}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <svg className="mx-auto w-24 h-24 text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No Villas Found</h3>
                <p className="text-gray-500 mb-6">
                  {searchLocation ? `No villas found in "${searchLocation}"` : 'No villas available at the moment.'}
                </p>
                <button
                  onClick={() => {
                    setSearchLocation('')
                    setCurrentPage(1)
                  }}
                  className="bg-[#AD8B3A] text-white px-6 py-2 rounded-full hover:bg-[#AD8B3A]/90 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-[#AD8B3A] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default VillasPage