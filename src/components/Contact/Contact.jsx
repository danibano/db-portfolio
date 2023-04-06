import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div>
        <h2 className="text-emerald-700 mb-8 text-5xl">Contact</h2>
      </div>

      <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center px-4 lg:px-8 py-8 bg-emerald-700 ">
        <form className="w-full">
          <div className="mb-5">
            <input type="text" placeholder="Enter your name" className="w-full p-3 focus:outline-none rounded-[5px]" />
          </div>
          <div className="mb-5">
            <input type="text" placeholder="Enter your email" className="w-full p-3 focus:outline-none rounded-[5px]" />
          </div>
          <div className="mb-5">
            <input type="text" placeholder="Subject" className="w-full p-3 focus:outline-none rounded-[5px]" />
          </div>
          <div className="mb-5">
            <textarea type="text" rows={4}  placeholder="Write your message" className="w-full resize-none p-3 focus:outline-none rounded-[5px]" />
          </div>

          <button className="w-full p-3 focus:outline-none rounded-[5px] bg-gray-500 text-white hover:bg-white hover:text-emerald-700 ease-linear duration-150">Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact