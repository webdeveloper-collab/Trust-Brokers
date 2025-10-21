import { Link } from 'react-router-dom'

const GetInTouch = () => {
  return (
    <section className="py-20 lg:py-28 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero CTA Section */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
          {/* Background with gradient overlay */}
          <div className="aspect-[21/9] lg:aspect-[21/6] bg-gradient-to-r from-[#AD8B3A] via-[#AD8B3A]/80 to-[#F0ECDF]/50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto py-8 sm:py-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight font-['Bricolage_Grotesque'] px-4">
                Enter a realm where exquisite design and timeless luxury come together.
              </h2>
              
              <a 
                href="https://wa.me/918714275702" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#AD8B3A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#AD8B3A]/90 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Marquee Text */}
        <div className="bg-[#AD8B3A] -mx-4 sm:-mx-6 lg:-mx-8 py-5 mb-20">
          <div className="flex items-center justify-center gap-12 text-white text-sm font-medium tracking-wider uppercase overflow-hidden">
            <div className="flex items-center gap-12 animate-marquee">
              <span>Find your dream home with our expert real estate agents!</span>
              <div className="w-18 h-px bg-white"></div>
              <span>Browse thousands of listings in prime locations at great prices!</span>
              <div className="w-18 h-px bg-white"></div>
              <span>Get a free property valuation—sell your home with confidence!</span>
              <div className="w-18 h-px bg-white"></div>
              <span>Secure the best mortgage rates with our trusted loan partners!</span>
              <div className="w-18 h-px bg-white"></div>
            </div>
          </div>
        </div>

        {/* Get Blogs Button */}
        <div className="flex justify-center mb-20">
          <Link
            to="/blog"
            className="bg-[#AD8B3A] text-white px-10 py-5 rounded-full font-semibold text-xl font-['Bricolage_Grotesque'] hover:bg-[#AD8B3A]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
            </svg>
            View Blogs
          </Link>
        </div>

      </div>
    </section>
  )
}

export default GetInTouch