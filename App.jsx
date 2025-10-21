import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PropertyDetail from './pages/PropertyDetail'
import PropertiesListing from './pages/PropertiesListing'
import VillasPage from './pages/VillasPage'
import ApartmentsPage from './pages/ApartmentsPage'
import PlotsPage from './pages/PlotsPage'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<PropertiesListing />} />
          <Route path="/villas" element={<VillasPage />} />
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route path="/plots" element={<PlotsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
