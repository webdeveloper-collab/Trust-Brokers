import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BlogPage = () => {
  const [hoveredBlog, setHoveredBlog] = useState(null)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const blogs = [
    {
      id: 1,
      title: "Home buying tips",
      date: "Feb 20, 2025",
      category: "Tips",
      image: "/villa1.jpg"
    },
    {
      id: 2,
      title: "Boost home value",
      date: "Feb 19, 2025",
      category: "Guides",
      image: "/villa2.jpg"
    },
    {
      id: 3,
      title: "Mortgage rates update",
      date: "Feb 18, 2025",
      category: "Updates",
      image: "/villa3.jpg"
    },
    {
      id: 4,
      title: "Luxury homes defined",
      date: "Feb 17, 2025",
      category: "Insights",
      image: "/villa4.jpg"
    },
    {
      id: 5,
      title: "Smart homes future",
      date: "Feb 16, 2025",
      category: "Insights",
      image: "/villa5.jpg"
    },
    {
      id: 6,
      title: "Sell property fast",
      date: "Feb 15, 2025",
      category: "Advice",
      image: "/villa6.jpg"
    },
    {
      id: 7,
      title: "Top investment spots",
      date: "Feb 14, 2025",
      category: "Hotspots",
      image: "/plot1.jpg"
    },
    {
      id: 8,
      title: "Apartment or house?",
      date: "Feb 13, 2025",
      category: "Options",
      image: "/plot2.jpg"
    },
    {
      id: 9,
      title: "Staging secrets revealed",
      date: "Feb 12, 2025",
      category: "Tricks",
      image: "/plot3.jpg"
    }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero/Header Section */}
      <div className="pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-[#07BE8A]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              <span className="text-base font-semibold text-[#3E545D]">Blog</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-medium text-gray-900 mb-3 font-['Bricolage_Grotesque'] leading-tight">
              Real estate insights
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-500 max-w-xl">
              Stay ahead in the property market with expert advice and updates
            </p>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col gap-8 group cursor-pointer"
                onMouseEnter={() => setHoveredBlog(blog.id)}
                onMouseLeave={() => setHoveredBlog(null)}
              >
                {/* Blog Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[440/287]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Blog Info */}
                <div className="flex items-start gap-2 pr-2">
                  {/* Text Content */}
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 font-['Bricolage_Grotesque'] leading-tight transition-colors group-hover:text-[#AD8B3A]">
                      {blog.title}
                    </h3>
                    <p className="text-base text-gray-500">
                      {blog.date}
                    </p>
                  </div>

                  {/* Category Badge */}
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gray-50 text-gray-900">
                      {blog.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default BlogPage
