import { useEffect, useRef, useState } from 'react'

const AboutUs = () => {
  const sectionRef = useRef(null)
  const pillarsRef = useRef(null)
  const bottomRef = useRef(null)
  
  const [visibleLines, setVisibleLines] = useState({
    bottomText: []
  })

  const bottomTextLines = [
    "Trust Broker Realty is a progressive property development company creating homes and communities.",
    "",
    "We combine traditional craftsmanship with innovative techniques, delivering high-quality designs with thoughtful layouts.",
    "From location to handover, every stage is executed with meticulous attention to detail.",
    "",
    "Where people will truly love to live."
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            
            // Trigger text animation for bottom text
            if (entry.target === bottomRef.current) {
              setTimeout(() => {
                bottomTextLines.forEach((_, index) => {
                  setTimeout(() => {
                    setVisibleLines(prev => ({
                      ...prev,
                      bottomText: [...prev.bottomText, index]
                    }))
                  }, index * 150)
                })
              }, 500)
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (pillarsRef.current) observer.observe(pillarsRef.current)
    if (bottomRef.current) observer.observe(bottomRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 md:py-16 lg:py-28 bg-gray-50" id="about-us" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        


        {/* About Us Section - Now First */}
        <div className="text-center mb-10" ref={bottomRef}>
          <div className="bg-[#AD8B3A] text-white py-2 px-5 rounded-full inline-block mb-6">
            <span className="text-sm font-semibold tracking-wider uppercase">About Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 font-['Bricolage_Grotesque']">
            TRUST BROKER REALTY PVT. LTD.
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-2">
            {bottomTextLines.map((line, index) => (
              <p 
                key={index}
                className={`text-base text-gray-700 leading-normal transition-all duration-700 ${
                  visibleLines.bottomText.includes(index) 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                } ${line === '' ? 'h-0.5' : ''} ${
                  line === "Where people will truly love to live." ? 'text-lg font-medium text-gray-900 mt-2' : ''
                }`}
              >
                {line === "Trust Broker Realty is a progressive property development company creating homes and communities." && index === 0 ? (
                  <>
                    <span className="font-semibold">Trust Broker Realty</span>
                    {line.replace("Trust Broker Realty", "")}
                  </>
                ) : (
                  line
                )}
              </p>
            ))}
          </div>
          
          <div className="mt-6">
            <button className="bg-[#AD8B3A] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#AD8B3A]/90 transition-all duration-300 hover:scale-105">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
