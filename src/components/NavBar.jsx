import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import { TfiUser } from "react-icons/tfi";
import { AiFillHome } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { MdContactMail } from "react-icons/md";
import { SiGroupon } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const NavBar = () => {
  const [download, setDownload] = useState(false);
  const [nav, setNav] = React.useState(false);
  const pdf = "/Gowtham-Resume.pdf";
  const links = [
    { id: 1, link: "home", icon: <AiFillHome size={30} className="animate-wiggle  hover:text-green-400"></AiFillHome> },
    { id: 2, link: "about", icon: <TfiUser size={30} className="animate-pulse  hover:text-green-400"></TfiUser> },
    { id: 3, link: "projects", icon: <TbBrandReactNative size={30} className="animate-spin-slow  hover:text-green-400"></TbBrandReactNative> },
    { id: 4, link: "skills", icon: <AiFillSetting size={30} className="animate-reverse-spin  hover:text-green-400"></AiFillSetting> },
    { id: 5, link: "contact", icon: <MdContactMail size={30} className="animate-wiggle  hover:text-green-400"></MdContactMail> },
  ];

  const [scorll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScroll(Math.round(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-16  text-white bg-gray-900  px-4  fixed z-10">
      <div className="flex justify-center items-center ">
        {scorll > 150 ? <TfiUser className="animate-pulse" size={30}></TfiUser>:<SiGroupon className="animate-spin-slow" size={30}></SiGroupon>}
        <h1 className="text-2xl font-title ml-2 hover:scale-105 hover:text-blue-400 duration-200">{scorll > 150 ? "Gowtham" : "Portfolio"}</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 font-title cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 hover:text-blue-400 duration-200  "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li className="px-4 font-title cursor-pointer capitalize font-medium text-gray-200  ">
          <p className="flex items-center gap-2">
            <a href="https://drive.google.com/file/d/1zlsAKBTmilcC_yOJyfA_9vZmvNNlM8iF/view?usp=sharing">{download ? "Download" : "Resume"}</a>

            <a href={pdf} download target="_blank" rel="noreferrer">
              <RiDownload2Fill
                onMouseEnter={() => setDownload(true)}
                onMouseLeave={() => setDownload(false)}
                className="w-6 text-2xl hover:scale-105 hover:text-green-400 duration-200 "
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
          {links.map(({ id, link, icon }) => (
            <li key={id} className="px-4 font-title font-medium cursor-pointer capitalize py-6">
              <Link className="flex items-center justify-start gap-4" onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {icon}
                <p className=" hover:text-blue-500">{link}</p>
              </Link>
            </li>
          ))}
          <li className="px-4 font-title cursor-pointer capitalize font-medium text-gray-200 py-2 ">
            <p className="flex items-center justify-start  gap-4">
              <a href={pdf} download target="_blank" rel="noreferrer">
                <RiDownload2Fill
                  size={35}
                  onMouseEnter={() => setDownload(true)}
                  onMouseLeave={() => setDownload(false)}
                  className=" hover:scale-105 hover:text-green-400 duration-200 animate-bounce"
                ></RiDownload2Fill>
              </a>
              <a href="https://drive.google.com/file/d/1zlsAKBTmilcC_yOJyfA_9vZmvNNlM8iF/view?usp=sharing">{download ? "Download" : "Resume"}</a>
            </p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
