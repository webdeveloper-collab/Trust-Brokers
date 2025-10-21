import { useState } from 'react'

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  const testimonials = [
    {
      id: 1,
      quote: "I found my ideal home in no time! The listings were detailed, the photos were accurate, and the whole process felt seamless. Customer service was top-notch, answering all my questions.",
      name: "Emily & John Smith",
      role: "Buyer",
      image: "testimonial1"
    },
    {
      id: 2,
      quote: "Outstanding service from start to finish. The team helped us sell our home quickly and at a great price. Their market knowledge and professional approach made all the difference.",
      name: "Sarah Johnson",
      role: "Seller",
      image: "testimonial2"
    },
    {
      id: 3,
      quote: "Professional, reliable, and results-driven. They understood exactly what we were looking for and found us the perfect investment property. The entire process was smooth and stress-free.",
      name: "Michael Chen",
      role: "Investor",
      image: "testimonial3"
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-gray-900 relative overflow-hidden" id="testimonials">
      {/* Decorative Border */}
      <div className="absolute right-0 top-8 w-32 sm:w-64 h-32 sm:h-64 border border-[#AD8B3A]/40 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 md:gap-16 mb-6 md:mb-9">
            <div className="flex-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6 md:mb-8">
                <div className="w-6 h-6 bg-[#AD8B3A] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-lg tracking-wider uppercase">Testimonials</span>
                <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-white/30 to-transparent ml-4"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left font-['Bricolage_Grotesque']">
                What our clients says
              </h2>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left - Testimonial Text */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-4 md:gap-6">
              {/* Quote Icon */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 border-2 border-[#AD8B3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1 sm:mt-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#AD8B3A]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8-1a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V7z" clipRule="evenodd"/>
                </svg>
              </div>
              
              <div className="flex-1 space-y-6 md:space-y-8">
                {/* Quote */}
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-relaxed font-['Bricolage_Grotesque']">
                  {testimonials[activeTestimonial].quote}
                </blockquote>
                
                {/* Author */}
                <div>
                  <div className="text-base sm:text-lg font-medium text-white mb-1">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-white/40">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Client Image */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="w-full max-w-md aspect-[3/4] bg-gradient-to-br from-[#AD8B3A]/20 to-[#F0ECDF]/10 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-full h-full bg-gray-700 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-400">Client Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === activeTestimonial 
                    ? 'bg-[#AD8B3A]' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials