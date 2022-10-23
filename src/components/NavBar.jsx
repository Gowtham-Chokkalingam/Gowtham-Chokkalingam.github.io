import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [nav, setNav] = React.useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "project" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-16 text-white bg-black px-4 fixed ">
      <div>
        <h1 className="text-2xl font-title ml-2 hover:scale-105 hover:text-blue-400 duration-200">Gowtham</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 font-title cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 hover:text-blue-400 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center absolute top-0 right-0 w-60 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 text-2xl cursor-pointer capitalize py-6 hover:text-blue-500">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
