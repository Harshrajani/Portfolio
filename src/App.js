import React from 'react'
import Header from './components/header/Header.jsx';
import './App.css';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
//import Qualification from './components/qualification/Qualification.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Scrollup from './components/scrollup/Scrollup.jsx';

function App() {
  return (
    
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About />
      <Skills />
      <Portfolio />
      {/* <Qualification /> will be added later */}
      <Contact />
    </main>
    <Footer />
    <Scrollup />
    </>
  );
}

export default App;
