import React from "react";
import {GrLinkedin, GrGithub} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer className="lg:hidden bg-emerald-700 flex justify-center items-center">
      <a href="https://github.com/danibano" target="_blank"><GrGithub className="text-5xl m-4 text-white hover:text-black"/></a>
      <a href="https://www.linkedin.com/in/danielle-banovetz-612a33237/" target="_blank"><GrLinkedin className="text-4xl m-4 text-white hover:text-black"/></a>
    </footer>
      
  )
}

export default Footer