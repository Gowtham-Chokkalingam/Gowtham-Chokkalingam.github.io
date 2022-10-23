import React from "react";

import movieapp from "../assets/portfolio/movieapp.png";
import travellocity from "../assets/portfolio/travellocity.png";
import myhours from "../assets/portfolio/myhours.png";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Travellocity",
      src: travellocity,
      link: "https://www.travelocity.com/",
      git: "https://github.com/Code-With-Hashim/boss-magic-6284",
      style: "hover:text-blue-400 duration-200",
      disc: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 2,
      title: "Myhours",
      src: myhours,
      link: "https://myhours.com/",
      git: "https://github.com/Gowtham-Chokkalingam/great-account-499/tree/main/myhours",
      style: "hover:text-blue-400 duration-200",
      disc: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 3,
      title: "Movie Searching App",
      src: movieapp,
      link: "https://www.imdb.com/",
      git: "https://github.com/Code-With-Hashim/boss-magic-6284",
      style: "hover:text-blue-400 duration-200",
      disc: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 4,
      title: "Weather App",
      src: reactWeather,
      link: "https://www.travelocity.com/",
      git: "https://github.com/Code-With-Hashim/boss-magic-6284",
      style: "hover:text-blue-400 duration-200",
      disc: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 5,
      title: "ReactPrallax",
      src: reactParallax,
      link: "https://www.travelocity.com/",
      git: "https://github.com/Code-With-Hashim/boss-magic-6284",
      style: "hover:text-blue-400 duration-200",
      disc: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 6,
      title: "Navbar",
      src: navbar,
      link: "https://www.travelocity.com/",
      git: "https://github.com/Code-With-Hashim/boss-magic-6284",
      style: "hover:text-blue-400 duration-200",
      disc: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ];

  return (
    <div name="project" className="bg-gradient-to-b from-black to-gray-800  w-full text-white h-[100%] pt-10">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:border-blue-500 duration-300">Projects</p>
          <p className="py-6">Check out my works below</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={project.src} alt="#" className="rounded-md duration-300 hover:scale-105"></img>
              <div className="p-4">
                <p className="text-xl  mt-2 font-bold">{project.title}</p>
                <p>{project.disc}</p>
              </div>
              <div className="flex justify-center items-center">
                <a href={project.link}>
                  <button className={`w-1/2 px-6 py-3 m-4 duration-200 font-bold hover:scale-105 ${project.style}`}>Demo</button>
                </a>
                <a href={project.git}>
                  <button className={`w-1/2 px-6 py-3 m-4 font-bold duration-200 hover:scale-105 ${project.style}`}>Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
