import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import About from '../components/About'
import Villas from '../components/Villas'
import Apartments from '../components/Apartments'
import Plots from '../components/Plots'
import FeaturedProperty from '../components/FeaturedProperty'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Villas />
      <Apartments />
      <Plots />
      <FeaturedProperty />
      <AboutUs />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default Home
