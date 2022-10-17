import React from "react";
import ProPic from "../assets/Gowtham-Chokkalinga-fw20_0116.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <h1>I'm An Aspiring Full Stack Web-Developer</h1>
          <p>
            passionate Full-Stack Developer, Dedicated to developing robust applications that interact with the Front & Backend part of web applications.
            Extensive expertise in website architecture, design, and web design, and web API designs. Problem-solving mindset with a goal to optimize
            my application for better stability and speed. Love to work in a team.
          </p>
          <div>
            <button>
              Portfolio
              <span>
                <MdKeyboardArrowRight></MdKeyboardArrowRight>
              </span>
            </button>
          </div>
        </div>

        <div>
          <img className="md:w-[70%] w-[40%] md:rounded-full  duration-500 hover:scale-110 duration-500" src={ProPic}  alt="/"></img>
        </div>
      </div>
    </div>
  );
};
{/* <h1></h1> */}
export default Home;
