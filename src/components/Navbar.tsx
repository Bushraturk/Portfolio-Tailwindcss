import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";


const Nav = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <nav className="container grid pt-1 w-full mr-3 ml-0 h-12 pl-2 pr-2 mt-0 rounded-lg max-w-[82%]">
      <div className="flex justify-between items-center">
        <div className="text-x1 font-medium pt-0">Bushra</div>
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink">
            <a href="#hero">HOME</a>
          </li>
          <li className="menuLink">
            <a href="#about">ABOUT</a>
          </li>
          <li className="menuLink">
            <a href="#Projects">PROJECTS</a>
          </li>

          <li className="menuLink">
            <a href="#sKills">SKILLS</a>
          </li>
          <li className="menuLink">
            <a href="#contact">CONTACTS</a>
          </li>
        </ul>
        <div className="md:hidden p-2 rounded-lg z-50">
          <IoMenu
            className="md:hidden text-white"
            size={30}
            onClick={handleMenuToggle}
          />
        </div>
      </div>

      {/* mobile menu */}

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center pt-4">
          <ul className=" flex flex-col bg-black bg-cover rounded-lg text-2xl text-white items-center justify-center mt-14 gap-10 md:hidden">
            <li className="menuLink">
              <a href="#hero" onClick={() => setIsMenuOpen(false)}>
                HOME
              </a>
            </li>
            <li className="menuLink">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                ABOUT
              </a>
            </li>
            <li className="menuLink">
              <a href="#Projects" onClick={() => setIsMenuOpen(false)}>
                PROJECTS
              </a>
            </li>

            <li className="menuLink">
              <a href="#sKills" onClick={() => setIsMenuOpen(false)}>
                SKILLS
              </a>
            </li>
            <li className="menuLink">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                CONTACTS
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
