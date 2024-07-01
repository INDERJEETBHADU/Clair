import './App.css';
import Hero from './Components/Hero';
import About from './Components/About';
import Address from "../src/Components/Address"
import Tokenomics from "../src/Components/Tokenomics"
import Secure from "../src/Components/Secure"
import Frequently from "../src/Components/Frequently"
import Socal from "../src/Components/Socal"
import Footer from './Components/Footer';
import Roadmap from './Components/Roadmap';
import React, { useState, useEffect } from 'react';
import Loader from './Components/Loader';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 
  }, []);

  if (isLoading) {
    return <Loader />; 
  }
  return (
    < >
      <Hero />
      <About />
      <Address />
      <Tokenomics />
      <Secure />
      <Roadmap />
      <Frequently />
      <Socal />
      <Footer />
      {isVisible && (
        <button className="back-to-top " onClick={scrollToTop}>
          ↑
        </button>
      )}

    </>
  );
}

export default App;
