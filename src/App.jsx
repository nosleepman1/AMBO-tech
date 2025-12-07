import React from 'react'
import './App.css'
import Navbar from "./components/navbar.jsx";
import Hero from './components/hero.jsx';
import Moha from './components/moha.jsx';
import Footer from './components/footer.jsx';
import Contact from './components/contact.jsx';
import Fonctionnalites from './components/fonctionnalites'

function App() {


  return (
    <> 
        <Navbar/>
        <Hero />
        <Fonctionnalites/>
        <Moha />
        <Contact/>
        <Footer />
    </>
  )
}

export default App
