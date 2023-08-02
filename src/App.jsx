import './App.css';
import React from 'react';

import Home from './components/home/Home'
import Header from './components/header/Header'
import Nav from './components/navbar/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Us from './components/us/Why'
import FAQ from './components/faq/Faq'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About />}/>
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
    </Router>

       <Header />
    <Us />
    {/* <About />
    <Services /> */}
    <Contact />
    <Footer />
    </>
  );
}

export default App;
