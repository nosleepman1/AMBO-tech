import React from 'react'
import './App.css'
import Navbar from "./components/navbar.jsx";
import Hero from './components/sections/hero.jsx';
import Moha from './components/sections/moha.jsx';
import Footer from './components/footer.jsx';
import Contact from './components/sections/contact.jsx';
import Fonctionnalites from './components/sections/fonctionnalites.jsx'
import Solutions from './components/sections/solutions.jsx'

function App() {


  return (
    <> 
        <Navbar/>
        <Hero />
        <Fonctionnalites/>
        <Solutions />
        <Moha />
        <Contact/>
        <Footer />
    </>
  )
}

export default App
