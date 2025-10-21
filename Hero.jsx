import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const slides = [
    {
      desktopImage: "/herodesk3.jpg",
      mobileImage: "/heromob3.jpg",
      alt: "Modern luxury building"
    },
    {
      desktopImage: "/herodesk2.jpg",
      mobileImage: "/heromob2.jpg",
      alt: "Luxury residential complex"
    },
    {
      desktopImage: "/herodesk1.jpg",
      mobileImage: "/heromob1.jpg",
      alt: "Premium villa community"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 2500)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden" id="home">
      {/* Sliding Background Images - Desktop */}
      <div className="absolute inset-0 w-full h-full hidden md:block">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.desktopImage}
            alt={slide.alt}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          />
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Sliding Background Images - Mobile */}
      <div className="absolute inset-0 w-full h-full block md:hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.mobileImage}
            alt={slide.alt}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          />
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-20">
          <button
            onClick={handleExploreClick}
            className="bg-black/40 backdrop-blur-md text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-lg md:text-xl hover:bg-black/60 transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/30"
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Slide Indicators - Centered across full viewport */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero