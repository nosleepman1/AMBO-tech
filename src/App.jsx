import React from 'react'
import './App.css'
import Navbar from "./components/navbar.jsx";
import Hero from './components/sections/hero.jsx';
import Moha from './components/sections/moha.jsx';
import Footer from './components/footer.jsx';
import Contact from './components/sections/contact.jsx';
import Fonctionnalites from './components/sections/fonctionnalites.jsx'
import {Button} from '@mui/material'
import SolutionsSection from './components/sections/solutions.jsx';



function App() {


  return (
    <> 
        <Navbar/>
        <Hero />
        <Fonctionnalites/>
        <SolutionsSection />
        <Moha />
        <Contact/>
        <Footer />

    </>
  )
}

export default App
