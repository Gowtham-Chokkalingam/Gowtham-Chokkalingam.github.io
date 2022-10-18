import React from "react";
import ProPic from "../assets/Gowtham-Chokkalinga-fw20_0116.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start h-full">
          <h2 className="text-[1.4rem] text-center sm:text-2xl font-bold text-white md:mt-12">I'm An Aspiring Full Stack Web-Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
          A passionate full-stack web developer, who loves to buid cool projects and work in a team. I want to achieve global recognition and exposure with my skillset, toolset and mindset.
            {/* Full-Stack Developer, Dedicated to developing robust applications that interact with the Front & Backend part of web applications.
            Extensive expertise in website architecture, design, and web design, and web API designs. Problem-solving mindset with a goal to optimize
            my application for better stability and speed. Love to work in a team. */}
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight className="ml-1" size={30}></MdKeyboardArrowRight>
              </span>
            </button>
          </div>
        </div>

        <div className="hidden md:block w-[40%] mt-24 md:mt-0">
          <img className="  rounded-2xl mx-auto w-[70%] md:w-[60%]" src={ProPic} alt="/"></img>
        </div>
        <div className="block md:hidden w-[40%] mt-24 md:mt-0">
          <img className="  rounded-full mx-auto w-[70%] md:w-[60%]" src={ProPic} alt="/"></img>
        </div>
      </div>
    </div>
  );
};
export default Home;
