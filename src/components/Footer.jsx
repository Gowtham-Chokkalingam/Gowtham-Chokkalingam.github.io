import React, { useEffect, useState } from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { BsFillSuitHeartFill, BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import SkeletonFooter from "./Skeleton/SkeletonFooter";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={20}></FaLinkedin>
        </>
      ),
      href: "https://www.linkedin.com/in/gowthamchokkalingam",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={20}></FaGithub>
        </>
      ),
      href: "https://github.com/Gowtham-Chokkalingam",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={20}></HiOutlineMail>
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsInstagram size={20}></BsInstagram>
        </>
      ),
      href: "https://www.instagram.com/gowtham_talkies/",
    },
    {
      id: 5,
      child: (
        <>
          <AiOutlineMobile size={24}></AiOutlineMobile>
        </>
      ),
      href: "https://www.linkedin.com/in/gowthamchokkalingam",
    },
  ];
  const date = new Date();
  const year = date.getFullYear();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <SkeletonFooter></SkeletonFooter>
  ) : (
    <div name="about" className="py-10 max-h-max flex-col items-center mx-auto gap-2 w-[100%]  text-white bg-gradient-to-b from-black to-gray-900   ">
      <p className="w-[90%] flex-col gap-4 items-center justify-center text mx-auto text-center">
        Designed and Developed by Gowtham
        <BsFillSuitHeartFill className="animate-bounce text-red-800 mt-2 mx-auto"></BsFillSuitHeartFill>
      </p>

      <div className="flex  justify-center   text-white gap-6 items-center w-[80%] mx-auto h-[2rem] mt-2 ">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`flex flex-col justify-center items-center text-[2rem] ${link.id!==5 ?"hover:animate-bounce":"hover:relative"} duration-200`}
          >
            {link.child}
            {link.id === 5 && (
              <p class="hover:opacity-100  duration-300 absolute bottom-6 z-10 flex justify-center items-center text-xl text-white font-semibold">
               
              </p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
