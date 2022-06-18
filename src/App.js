import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Global packages and assets
import './assets/dist/styles.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
// import Modals from './components/Modals'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import CulturalStories from './pages/CulturalStories'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
// import Payment from './pages/Payment'
import Profile from './pages/Profile'
import SingleStory from './pages/SingleStory'
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <Header />
      {/* <Modals /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cultural-stories" element={<CulturalStories />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path='/payment' element={<Payment />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/single-story" element={<SingleStory />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
