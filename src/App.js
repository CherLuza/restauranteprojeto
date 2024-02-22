
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import Pin from './components/pages/Pin'
import Contact from './components/pages/Contact'

import Container from "./components/layout/Container"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
 <Router>
  <Navbar />
  <Container customClass="min-height"> 
  <Routes>
    <Route path="/home" element={<Home />} />   
    <Route path="/menu" element={<Menu />} />
    <Route path="/pin" element={<Pin />} />
    <Route path="/contact" element={<Contact />} />   
  </Routes>
  </Container>
  <Footer />
 </Router>
  )
}

export default App
