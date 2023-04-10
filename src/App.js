import { useEffect } from 'react'
import Aos from 'aos'
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact';


function App() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className='bg-white px-10'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
