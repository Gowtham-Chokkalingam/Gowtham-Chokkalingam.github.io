import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import { TfiUser } from "react-icons/tfi";

const NavBar = () => {
  const [download, setDownload] = useState(false);
  const [nav, setNav] = React.useState(false);
  const pdf = "/Gowtham-Resume.pdf";
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16  text-white bg-gray-900  px-4  fixed z-10">
      <div className="flex justify-center items-center ">
        <TfiUser className="animate-pulse" size={30}></TfiUser>
        <h1 className="text-2xl font-title ml-2 hover:scale-105 hover:text-blue-400 duration-200">Gowtham</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 font-title cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 hover:text-blue-400 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li className="px-4 font-title cursor-pointer capitalize font-medium text-gray-200  ">
          <p className="flex items-center gap-2">
            <Link to={"home"} smooth duration={500} className="hover:scale-105 hover:text-blue-400 duration-200">
              {download ? "Download" : "Resume"}
            </Link>

            <a href={pdf} download target="_blank" rel="noreferrer">
              <RiDownload2Fill
                onMouseEnter={() => setDownload(true)}
                onMouseLeave={() => setDownload(false)}
                className="w-6 text-2xl hover:scale-105 hover:text-green-400 duration-200"
              ></RiDownload2Fill>
            </a>
          </p>
        </li>
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center absolute top-0 right-0 w-60 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 text-2xl cursor-pointer capitalize py-6 hover:text-blue-500">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
