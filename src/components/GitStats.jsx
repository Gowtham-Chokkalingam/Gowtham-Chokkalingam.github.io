import React from "react";

import movieapp from "../assets/portfolio/movieapp.png";
import travellocity from "../assets/portfolio/travellocity.png";
import myhours from "../assets/portfolio/myhours.png";
import foodapp from "../assets/portfolio/foodapp.png";
import weather from "../assets/portfolio/weather.png";

const GitStats = () => {
  return (
    <div name="gitstats" className="bg-gradient-to-b from-black to-gray-900  w-full text-white h-[100%] pt-10">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:border-blue-500 duration-300">My Github Stats</p>
          <p className="py-6">Check out my works below</p>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex  justify-between gap-4">
              
              <img
                alt="Gowtham Github Stats"
                src="https://github-readme-stats.vercel.app/api?username=Gowtham-Chokkalingam&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117"
              />
              <img
                alt="Gowtham's Top Languages"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gowtham-Chokkalingam&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117"
              />

            
            </div>
            
            <b>Note:</b> Top languages is only a metric of the languages my public code consists of and doesn't reflect experience or skill level.
            <br />
            <br />
            <img className="w-[80%]"
              alt="Gowtham's Activity Graph"
              src="https://activity-graph.herokuapp.com/graph?username=Gowtham-Chokkalingam&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitStats;
