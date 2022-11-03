import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { BsGithub } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
const GitStats = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth;
    });
  };
  return (
    <div name="gitstats" className="bg-gradient-to-b from-black to-gray-900  w-full text-white h-[100%] pt-10">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:border-blue-500 duration-300">
            My Github Stats <BsGithub className="inline mb-2 ml-2 animate-bounce text-blue-400"></BsGithub>
          </p>
          <p className="py-6">Check out my works below</p>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-full grid grid-cols-1  md:grid-cols-2   md:grid-rows-2 gap-8 text-center justify-center ">
              <img
                className="w-[90%] mx-auto"
                title="🔥 Get streak stats for your profile at git.io/streak-stats"
                alt="Gowtham streak"
                src="https://streak-stats.demolab.com?user=Gowtham-Chokkalingam&theme=nightowl&border_radius=4.8&date_format=j%20M%5B%20Y%5D"
              />
              <img
                className="w-[90%] mx-auto"
                alt="Gowtham Github Stats"
                src="https://github-readme-stats.vercel.app/api?username=Gowtham-Chokkalingam&show_icons=true&count_private=true&theme=nightowl&border_radius=4.8&date_format=j%20M%5B%20Y%5D"
              />

              <img
                className="md:w-[40%] w-[90%] mx-auto md:col-span-2"
                alt="Gowtham's Top Languages"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gowtham-Chokkalingam&langs_count=8&count_private=true&layout=compact&theme=nightowl&border_radius=4.8&date_format=j%20M%5B%20Y%5D"
              />
            </div>
            
            
            <br />
            <div className="w-[90%] border-2 flex-col justify-center items-center text-center sm:block hidden border-white rounded-md p-4 bg-[#112038]">
              <div className="flex justify-between">
              <BiTargetLock size={20} className='animate-spin-slow'></BiTargetLock>
                <h2 className="capitalize font-bold text-2xl text-purple-400 ">My contributions In GitHub </h2>
                <BiTargetLock size={20} className='animate-reverse-spin'></BiTargetLock>
              </div>
              <GitHubCalendar 
                style={{ width: "80%", margin: "auto", marginTop: "10px" }}
                color="#F15412"
                showWeekdayLabels={"true"}
                blockRadius={2}
                username="gowtham-chokkalingam" 
                transformData={selectLastHalfYear}
                blockSize={20} 
                fontSize={16}
              >
                <ReactTooltip delayShow={20} html />
              </GitHubCalendar>
              <div className="flex justify-between">
              <BiTargetLock size={20} className='animate-spin-slow'></BiTargetLock>
                <h2 className="capitalize font-bold text-cyan-400">   </h2>
                <BiTargetLock size={20} className='animate-reverse-spin'></BiTargetLock>
              </div>
            </div>
            <br />
            <div  className="w-[90%] border-2 flex-col justify-center items-center text-center  border-white rounded-md  bg-[#0D1117]">

            <img
              className="w-full "
              alt="Gowtham's Activity Graph"
              src="https://activity-graph.herokuapp.com/graph?username=Gowtham-Chokkalingam&bg_color=112038&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitStats;
