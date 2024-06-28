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

function App() {
  return (
    < >
      <Hero />
      <About />
      <Address />
      <Tokenomics />
      <Secure />
      <Roadmap/>
      <Frequently />
      <Socal />
      <Footer/>

    </>
  );
}

export default App;
