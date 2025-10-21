import { useState } from 'react'

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "Can I personalize my Trust Broker experience?",
      answer: "Yes, absolutely! We offer extensive personalization options to help you customize your property search and preferences. Our platform allows you to save favorite properties, set up custom alerts, and tailor your experience to match your specific needs and requirements."
    },
    {
      id: 2, 
      question: "Where can I find Trust Broker?",
      answer: "Trust Broker is available online through our website and mobile applications. You can access our services from anywhere, anytime. We also have physical offices in major cities where you can meet with our agents for in-person consultations."
    },
    {
      id: 3,
      question: "What steps to buy through Trust Broker?",
      answer: "The home buying process typically involves: 1) Getting pre-approved for a mortgage, 2) Searching for properties that meet your criteria, 3) Making an offer, 4) Home inspection, 5) Finalizing mortgage details, 6) Closing on the property. Our expert agents guide you through each step to ensure a smooth transaction."
    }
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left - Image Gallery */}
          <div className="bg-white">
            <div className="grid grid-cols-2 gap-10 h-full">
              
              {/* Left Column */}
              <div className="space-y-10">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#F0ECDF]/50 to-[#AD8B3A]/20 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Interior 1</span>
                  </div>
                </div>
                
                <div className="aspect-[4/3] bg-gradient-to-br from-[#AD8B3A]/20 to-[#F0ECDF]/50 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Interior 2</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="aspect-[2/3] bg-gradient-to-b from-[#F0ECDF]/30 to-[#AD8B3A]/30 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Exterior View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - FAQ Content */}
          <div className="px-0 lg:px-12 space-y-8">
            
            {/* Header */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-6 bg-[#AD8B3A] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[#3E545D] font-bold text-lg tracking-wider uppercase">FAQs</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#AD8B3A]/50 to-transparent ml-4"></div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-['Bricolage_Grotesque']">
                    Everything about Trust Broker
                  </h2>
                  
                  <p className="text-lg text-gray-500 leading-relaxed">
                    We know that buying, selling, or investing in real estate can be overwhelming. 
                    Here are some frequently asked questions to help guide you through the process.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div 
                    key={faq.id} 
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 font-['Bricolage_Grotesque']">
                        {faq.question}
                      </h3>
                      
                      <div className={`w-6 h-6 flex items-center justify-center transform transition-transform duration-300 ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}>
                        <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                        </svg>
                      </div>
                    </button>
                    
                    {openFaq === faq.id && (
                      <div className="px-6 pb-6">
                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Additional Info */}
              <div className="pl-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Discover a diverse range of premium properties, from luxurious apartments to spacious villas, 
                  tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ