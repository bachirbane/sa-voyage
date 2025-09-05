import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Reservation from './components/Reservation'
import Hadj from './components/Hadj'
import Kaaba from './components/Kaaba'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#002c22] via-[#014d3f] to-[#002c22]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/hadj" element={<Hadj />} />
          <Route path="/kaaba" element={<Kaaba />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
