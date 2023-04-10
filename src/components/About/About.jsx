import React from "react";
import {FaGraduationCap,FaCodeBranch, FaDesktop} from 'react-icons/fa'

const About = () => {
  return (
      <section className='min-h-screen px-10'>
        <div className="text-center">
          <h2 id='about' className='text-5xl py-3 text-emerald-800 '> About Me</h2>

          <div className="flex flex-col justify-center " >
            <div className="w-full py-3 px-2 sm:mx-auto sm:px-8">

              <div className="relative text-sm font-semibold">

                <div className="hidden absolute w-1 sm:block bg-emerald-700 h-full left-1/2 transform translate-x-1/2"></div>

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">


                    <div className="flex justify-start w-full lg:w-3/4 mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8 ">
                        <div  data-aos='fade-right' data-aos-duration='1200' className=" bg-white p-4 rounded shadow group hover:bg-emerald-800 ease-in duration-150 cursor-pointer ">
                          <p className='text-xl pt-4 group-hover:text-white'> I recently graduated from the University of Minnesota full-stack coding bootcamp, where I gained a strong foundation in web development technologies and best practices.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-white rounded-full bg-emerald-500 border-white border-4 w-12 h-12 absolute xl:left-[48.5%] lg:left-[48%] left-[47%] -translate-y-5 sm:translate-y-0 flex items-center">
                      <FaGraduationCap className="text-4xl pl-1"/>
                    </div>
                    
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="flex flex-col justify-center" >
            <div className="w-full py-3 px-2 sm:mx-auto sm:px-8">

              <div className="relative text-sm font-semibold">

                <div className="hidden absolute w-1 sm:block bg-emerald-700 h-full left-1/2 transform translate-x-1/2"></div>

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">


                    <div className="flex justify-end w-full lg:w-3/4 mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-9 ">
                        <div  data-aos='fade-left' data-aos-duration='1200' className=" bg-white p-4 rounded shadow group hover:bg-emerald-800 ease-in duration-150 cursor-pointer ">
                          <p className='text-lg pt-4 group-hover:text-white'>
                          During my bootcamp, I learned how to develop full-stack web applications using technologies such as <span className='text-emerald-600 group-hover:text-black'>JavaScript, React, Node.js, Express, and MongoDB.</span> I'm also experienced in using version control tools such as Git and GitHub to collaborate with other developers.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-white rounded-full bg-emerald-500 border-white border-4 w-12 h-12 absolute xl:left-[48.5%] lg:left-[48%] left-[47%] -translate-y-5 sm:translate-y-0 flex items-center">
                      <FaCodeBranch className="text-3xl pl-3"/>
                    </div>
                    
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="flex flex-col justify-center " >
            <div className="w-full py-3 px-2 sm:mx-auto sm:px-8">

              <div className="relative text-sm font-semibold">

                <div className="hidden absolute w-1 sm:block bg-emerald-700 h-full left-1/2 transform translate-x-1/2"></div>

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">


                    <div className="flex justify-start w-full lg:w-3/4 mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8 ">
                        <div  data-aos='fade-right' data-aos-duration='1200' className=" bg-white p-4 rounded shadow group hover:bg-emerald-800 ease-in duration-150 cursor-pointer ">
                          <p className='text-lg group-hover:text-white pt-4'>
                          While I may be relatively new to the field, I'm excited to apply my skills to real-world projects and continue learning and growing as a developer. In addition to web development, I'm also interested in design and UX, and strive to create websites that not only look great but also provide an intuitive and user-friendly experience. 
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-white rounded-full bg-emerald-500 border-white border-4 w-12 h-12 absolute xl:left-[48.5%] lg:left-[48%] left-[47%] -translate-y-5 sm:translate-y-0 flex items-center">
                      <FaDesktop className="text-3xl pl-2"/>
                    </div>
                    
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

  )
}

export default About