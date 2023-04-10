import { useEffect } from 'react'
import Aos from 'aos'
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className='bg-white'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
