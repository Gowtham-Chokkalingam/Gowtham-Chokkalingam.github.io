import React, { useEffect, useState } from "react";

import movieapp from "../assets/portfolio/movieapp.png";
import travellocity from "../assets/portfolio/travellocity.png";
import myhours from "../assets/portfolio/myhours.png";
import foodapp from "../assets/portfolio/foodapp.png";
import weather from "../assets/portfolio/weather.png";
import zee5 from "../assets/portfolio/zee5.png";

import reactMovieapp from "../assets/portfolio/MovieApp-Redux-React.png";

import projects from './data/projects'

import { FaReact } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import SkeleteonProject from "./Skeleton/SkeleteonProject";

const Projects = () => {
  const [visible, setVisible] = useState(6);
  console.log("visible:", visible);

  const handleLoad = (cmd) => {
    if (cmd === "more") {
      setVisible((pre) => pre + 3);
    } else {
      setVisible(6);
    }
  };


  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <SkeleteonProject></SkeleteonProject>
  ) : (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800  w-full text-white h-[100%] pt-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold  inline border-b-4 border-gray-500 hover:border-blue-500 duration-300">
            Projects
            <FaReact className="inline ml-4 animate-spin-slow z-[-10] w-8 text-blue-400"></FaReact>
            {/* <img className="inline ml-4 animate-spin-slow z-[-10] w-8"  src={reacticon} alt='d'></img> */}
          </p>
          <p className="py-6">Check out my works below</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-center">
          {projects.slice(0, visible).map((project) => (
            <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-200 hover:shadow-blue-600">
              <img src={project.src} alt="#" className="rounded-[16px] duration-300 hover:scale-105 p-2 "></img>
              <div className="p-4">
                <p className="text-xl text-blue-400 mt-2 font-bold">{project.title}</p>
                <p className="text-justify">{project.disc}</p>
              </div>
              <div className=" border-white ">
                <div className="flex justify-center">
                  <p className="font-600 text-[.8rem]  font-bold   text-blue-400">Tech Stack :</p>
                  {project.techStack.map((ts, id) => (
                    <p className="font-500 text-[.8rem] " key={id}>
                      {ts} {id === project.techStack.length - 1 ? "" : ", "}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex justify-center items-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-center gap-4 items-center">
                    <div className={`flex w-[50%]  text-blue-400 px-8 py-3  duration-200 font-bold hover:scale-105 ${project.style}`}>Demo</div>
                    <VscPreview className="animate-bounce"></VscPreview>
                  </div>
                </a>

                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-center gap-5 items-center">
                    <div className={`flex w-[50%]  text-blue-400 px-8 py-3  duration-200 font-bold hover:scale-105 ${project.style}`}>GitHub</div>
                    <BsGithub className="animate-bounce"></BsGithub>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        {projects.length > 6  && (
          <div className="w-50 mx-auto mt-10">
            {visible <= projects.length ? (
              <button
                onClick={() => handleLoad("more")}
                className="capitalize group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 to-blue-500 cursor-pointer"
              >
                view more
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight className="ml-1" size={30}></MdKeyboardArrowRight>
                </span>
              </button>
            ) : (
              <button
                onClick={() => handleLoad("less")}
                className="capitalize group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 to-blue-500 cursor-pointer"
              >
                view less
                <span className="group-hover:-rotate-90 duration-300">
                  <MdKeyboardArrowRight className="ml-1" size={30}></MdKeyboardArrowRight>
                </span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
