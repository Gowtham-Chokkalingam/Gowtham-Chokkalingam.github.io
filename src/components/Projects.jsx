import React from "react";

import movieapp from "../assets/portfolio/movieapp.png";
import travellocity from "../assets/portfolio/travellocity.png";
import myhours from "../assets/portfolio/myhours.png";
import foodapp from "../assets/portfolio/foodapp.png";
import weather from "../assets/portfolio/weather.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Travellocity",
      src: travellocity,
      link: "https://meek-blancmange-7c0dba.netlify.app/",
      git: "https://github.com/Code-With-Hashim/boss-magic-6284",
      style: "hover:text-blue-400 duration-200",
      disc: "This was a group project. We have created these website with the help of HTML, CSS And Javascript. My work was here to create Navbar, SignUp, Login, Logout part.",
    },
    {
      id: 2,
      title: "Myhours",
      src: myhours,
      link: "https://myhours.com/",
      git: "https://github.com/Gowtham-Chokkalingam/great-account-499/tree/main/myhours",
      style: "hover:text-blue-400 duration-200",
      disc: "This was an Individual Project. In these website I created on Homepage, Login page. I have created these website using mainly React, HTML, CSS, Javascript and also used Chakra and Bootstrap for UI.",
    },
    {
      id: 3,
      title: "Movie Searching App",
      src: movieapp,
      link: "https://admirable-buttercream-87249d.netlify.app/",
      git: "https://github.com/Gowtham-Chokkalingam/WebDev-Projects/tree/main/MovieAppownV2",
      style: "hover:text-blue-400 duration-200",
      disc: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },

    {
      id: 4,
      title: "Food Searching App",
      src: foodapp,
      link: "https://rad-longma-275d13.netlify.app/receipe-of-the-day.html",
      git: "https://github.com/Gowtham-Chokkalingam/WebDev-Projects/tree/main/FInalFoodApp/Food-App-III",
      style: "hover:text-blue-400 duration-200",
      disc: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 5,
      title: "Weather App",
      src: weather,
      link: "https://incredible-frangollo-40a170.netlify.app/",
      git: "https://github.com/Gowtham-Chokkalingam/WebDev-Projects/tree/main/FInalFoodApp/Food-App-III",
      style: "hover:text-blue-400 duration-200",
      disc: "This is a Weather App made by using HTML, CSS and Javascript. This app will give you the information about weather for current day and for next three days also. This app also allow you to see your city or location on google map",
    },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800  w-full text-white h-[100%] pt-10">
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
