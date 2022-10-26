import React from "react";
import { BsFillSuitHeartFill, BsInstagram } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

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
  ];
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div name="about" className="pt-10 max-h-max flex-col items-center mx-auto gap-2 w-[100%]  text-white bg-gray-900  ">
      <p className="flex gap-2 items-center justify-center">
        {" "}
        Designed and Developed by Gowtham
        <BsFillSuitHeartFill className="animate-bounce"></BsFillSuitHeartFill> Copyright © {year}
      </p>

      <div className="flex  justify-center   text-white gap-6 items-center w-[80%] mx-auto h-[6rem] mt-4 ">
        {links.map((link) => (
          <a key={link.id} href={link.href} className="flex flex-col justify-center items-center text-[2rem] hover:animate-spin duration-200">
            {link.child}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
