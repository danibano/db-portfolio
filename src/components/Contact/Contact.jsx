import React from "react";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Contact = () => {
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const emailLink = `mailto:banovetz.danielle@gmail.com?subject=${subject}&body=${message}, From ${name}`
  console.log(emailLink)

  const send = (event) => {
    event.preventDefault();
    (!emailRegex.test(email)) ? alert('Please enter a valid email address.') : (name === '' || subject === '' || message === '') ? alert('Please fill all form fields.') : window.location.href = emailLink
  }

  return (
    <section id="contact" className="pb-16 px-10">
      <div>
        <h2 className="text-emerald-700 mb-8 text-5xl">Contact</h2>
      </div>

      <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center px-4 lg:px-8 py-8 bg-emerald-700 ">
        <form className="w-full">
          <div className="mb-5">
            <input type="text" placeholder="Enter your name" value={name} onChange={event => setName(event.target.value)} className="w-full p-3 focus:outline-none rounded-[5px]" />
          </div>
          <div className="mb-5">
            <input type="text" placeholder="Enter your email" value={email} onChange={event => setEmail(event.target.value)} className="w-full p-3 focus:outline-none rounded-[5px]" />
          </div>
          <div className="mb-5">
            <input type="text" placeholder="Subject" value={subject} onChange={event => setSubject(event.target.value)} className="w-full p-3 focus:outline-none rounded-[5px]" />
          </div>
          <div className="mb-5">
            <textarea type="text" rows={4} value={message} onChange={event => setMessage(event.target.value)} placeholder="Write your message" className="w-full resize-none p-3 focus:outline-none rounded-[5px]" />
          </div>

          <button onClick={send} className="w-full p-3 focus:outline-none rounded-[5px] bg-gray-500 text-white hover:bg-white hover:text-emerald-700 ease-linear duration-150">Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact