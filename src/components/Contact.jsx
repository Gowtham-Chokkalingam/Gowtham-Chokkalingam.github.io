import React, { useState } from "react";
import {FiSend} from 'react-icons/fi'
let initState = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [data, setData] = useState(initState);

  const handleChange = (e) => {
    const {  name, value } = e.target;
    
    setData({ ...data, [name]: value });
  };

  // form submit

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setData(initState);
  };


  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:border-blue-500 duration-300">Contact</p>
          <p className="py-6">Get In Touch</p>
        </div>
        <div className="flex justify-center items-center">
        {/* action="https://getform.io/f/3fe863c5-56a1-4839-9e6f-070caf1a6c86" */}
          <form onSubmit={handleSubmit} action="https://getform.io/f/3fe863c5-56a1-4839-9e6f-070caf1a6c86"  method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              onChange={handleChange} name="name" value={data.name}
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>

            <input
              type="text"
              name="email" onChange={handleChange} value={data.email}
              placeholder="Enter Your Email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>

            <textarea
              name="message"  onChange={handleChange} value={data.message}
              rows="4"
              placeholder="Enter Your Message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex gap-4  items-center rounded-md hover:scale-110 duration-300">
              Send <FiSend></FiSend>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
