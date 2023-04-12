import React from "react";
import me from '../../img/me.jpg'
import {AiOutlineDownload} from 'react-icons/ai'
import {BsFillEyeFill} from 'react-icons/bs'
import {AiOutlineAppstore} from 'react-icons/ai'
import resume from '../Resume/DB_Resume.pdf'


const Home = () => {

  const handleClick = e => {
    e.preventDefault()
  
    const targetAttr = e.target.getAttribute('href')
    const targetElement = document.querySelector(targetAttr)
  
    if (targetElement) {
      const location = targetElement.offsetTop
  
      window.scrollTo({
        top: location - 80,
        left: 0
      })
    }
  }
  

  return (
    <section id="home" className='min-h-screen px-10'>
      <div className="md:flex items-center justify-between md:flex-col lg:flex-row lg:pt-40">
        <div className="w-full xl:pl-40 md:basis-1/2 lg:pl-32">
          <h1 data-aos='fade-up' data-aos-duration='1500' className="text-5xl"> Danielle Banovetz</h1>
          <h2 data-aos='fade-up' data-aos-duration='1500' className="text-emerald-700 text-3xl mt-2">Web Developer</h2>
          
          <div data-aos='fade-down' data-aos-duration='1800' data-aos-delay='300' className=" flex items-center gap-6 mt-7">
            <a href={resume} target="_blank">
              <button className="lg:hidden md: flex items-center gap-2 text-xl text-white bg-emerald-700 hover:bg-emerald-500 ease-in duration-300 p-3 rounded">
                <AiOutlineDownload/> 
                My Resume
              </button>
            </a>

            <a onClick={handleClick} href="#projects">
              <button className="flex items-center gap-2 text-xl text-white bg-emerald-700 hover:bg-emerald-500 ease-in duration-300 p-3 rounded">
                <BsFillEyeFill />
                My Work
              </button>
            </a>
          </div>

          <p data-aos='fade-left' data-aos-duration='1500' data-aos-delay='100'className="flex gap-2 text-lg py-14 leading-7 lg:max-w-[600px] sm:pl-14 sm:pr-10"> <AiOutlineAppstore className="text-4xl text-emerald-700"/> I'm a web developer with a passion for creating stunning and functional websites. Check out my portfolio to see some of my past work and get a feel for what I can do for you.
          </p>
        </div>

        <div className="basis-1/2 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center ">
              <img src={me} alt='me' data-aos='fade-right' data-aos-duration='1800' className="rounded-lg" />
            </figure>

          </div>
      </div>
    </section>
  )
}

export default Home