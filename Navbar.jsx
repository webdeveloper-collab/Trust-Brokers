import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/newtblogo.svg" 
                alt="Trust Broker Logo" 
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-white font-semibold text-xl sm:text-2xl font-['Bricolage_Grotesque']">
                Trust Broker
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="https://wa.me/918714275702" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
                <span className="text-white font-semibold">+91 87142 75702</span>
              </a>
              
              <div className="w-5 h-px bg-white/40 rotate-90"></div>
              
              <button 
                className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="font-semibold">Menu</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden bg-white text-black p-2 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/40 backdrop-blur-sm">
          <div className="h-full flex justify-end">
            {/* Menu Panel */}
            <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[774px] h-full bg-[#172023] flex flex-col">
              
              {/* Menu Header */}
              <div className="flex-shrink-0 flex justify-end items-center p-4 sm:p-6 lg:px-10 lg:py-6">
                <button 
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Content Container - Flexible */}
              <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-[74px] py-4">
                
                {/* Navigation Links */}
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[626px] space-y-2 sm:space-y-3 lg:space-y-4">
                    
                    {/* Home */}
                    <div className="flex items-center gap-6">
                      <Link 
                        to="/" 
                        className={`text-4xl sm:text-3xl lg:text-[42px] xl:text-[52px] font-medium leading-none font-['Bricolage_Grotesque'] transition-colors ${
                          location.pathname === '/' ? 'text-[#AD8B3A]' : 'text-white/40 hover:text-white'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                    </div>

                    {/* Properties */}
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                      {location.pathname === '/properties' && <div className="w-4 sm:w-6 lg:w-8 h-0.5 bg-[#AD8B3A]"></div>}
                      <Link 
                        to="/properties" 
                        className={`text-4xl sm:text-3xl lg:text-[42px] xl:text-[52px] font-medium leading-none font-['Bricolage_Grotesque'] transition-colors ${
                          location.pathname === '/properties' ? 'text-[#AD8B3A]' : 'text-white/40 hover:text-white'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Properties
                      </Link>
                    </div>

                    {/* Villas */}
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                      {location.pathname === '/villas' && <div className="w-4 sm:w-6 lg:w-8 h-0.5 bg-[#AD8B3A]"></div>}
                      <Link 
                        to="/villas" 
                        className={`text-4xl sm:text-3xl lg:text-[42px] xl:text-[52px] font-medium leading-none font-['Bricolage_Grotesque'] transition-colors ${
                          location.pathname === '/villas' ? 'text-[#AD8B3A]' : 'text-white/40 hover:text-white'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Villas
                      </Link>
                    </div>

                    {/* Apartments */}
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                      {location.pathname === '/apartments' && <div className="w-4 sm:w-6 lg:w-8 h-0.5 bg-[#AD8B3A]"></div>}
                      <Link 
                        to="/apartments" 
                        className={`text-4xl sm:text-3xl lg:text-[42px] xl:text-[52px] font-medium leading-none font-['Bricolage_Grotesque'] transition-colors ${
                          location.pathname === '/apartments' ? 'text-[#AD8B3A]' : 'text-white/40 hover:text-white'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Apartments
                      </Link>
                    </div>

                    {/* Plots */}
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                      {location.pathname === '/plots' && <div className="w-4 sm:w-6 lg:w-8 h-0.5 bg-[#AD8B3A]"></div>}
                      <Link 
                        to="/plots" 
                        className={`text-4xl sm:text-3xl lg:text-[42px] xl:text-[52px] font-medium leading-none font-['Bricolage_Grotesque'] transition-colors ${
                          location.pathname === '/plots' ? 'text-[#AD8B3A]' : 'text-white/40 hover:text-white'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Plots
                      </Link>
                    </div>

                    {/* Blog */}
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                      {location.pathname === '/blog' && <div className="w-4 sm:w-6 lg:w-8 h-0.5 bg-[#AD8B3A]"></div>}
                      <Link 
                        to="/blog" 
                        className={`text-4xl sm:text-3xl lg:text-[42px] xl:text-[52px] font-medium leading-none font-['Bricolage_Grotesque'] transition-colors ${
                          location.pathname === '/blog' ? 'text-[#AD8B3A]' : 'text-white/40 hover:text-white'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Blog
                      </Link>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center gap-6">
                      <a 
                        href="#contact" 
                        className="text-4xl sm:text-3xl lg:text-[42px] xl:text-[52px] font-medium text-white/40 hover:text-white transition-colors leading-none font-['Bricolage_Grotesque']"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Information & Social Links - Compact */}
                <div className="mt-6 sm:mt-8 lg:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:gap-12">
                  
                  {/* Contact Information */}
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-xs sm:text-base text-white/40 font-['Bricolage_Grotesque'] mb-2">
                      Contact
                    </span>
                    <div className="space-y-1 text-center sm:text-left">
                      <div>
                        <a 
                          href="mailto:trustbrokerofficial@gmail.com" 
                          className="text-xs sm:text-base font-medium text-white hover:text-[#AD8B3A] transition-colors font-['Bricolage_Grotesque']"
                        >
                          trustbrokerofficial@gmail.com
                        </a>
                      </div>
                      <div>
                        <a 
                          href="tel:+918714275702" 
                          className="text-xs sm:text-base font-medium text-white hover:text-[#AD8B3A] transition-colors font-['Bricolage_Grotesque']"
                        >
                          +91 87142 75702
                        </a>
                      </div>
                      <div>
                        <a 
                          href="https://wa.me/918714275702" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs sm:text-base font-medium text-white hover:text-[#AD8B3A] transition-colors font-['Bricolage_Grotesque'] flex items-center gap-2 justify-center sm:justify-start"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-xs sm:text-base text-white/40 font-['Bricolage_Grotesque'] mb-2">
                      Socials
                    </span>
                    <div className="space-y-1 text-center sm:text-left">
                      <div>
                        <a 
                          href="https://www.instagram.com/trustbroker_official/" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-base font-medium text-white hover:text-[#AD8B3A] transition-colors font-['Bricolage_Grotesque'] flex items-center gap-2 justify-center sm:justify-start"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          Instagram
                        </a>
                      </div>
                      <div>
                        <a 
                          href="https://www.facebook.com/people/Trust-Broker/61571117243870/" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-base font-medium text-white hover:text-[#AD8B3A] transition-colors font-['Bricolage_Grotesque'] flex items-center gap-2 justify-center sm:justify-start"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          Facebook
                        </a>
                      </div>
                      <div>
                        <a 
                          href="https://www.youtube.com/@TrustBroker_Official" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-base font-medium text-white hover:text-[#AD8B3A] transition-colors font-['Bricolage_Grotesque'] flex items-center gap-2 justify-center sm:justify-start"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          YouTube
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Close Menu Button - Mobile Only */}
                <div className="flex justify-center sm:hidden mt-6">
                  <button 
                    className="bg-white text-black py-2 px-6 rounded-full font-medium text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Close Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar