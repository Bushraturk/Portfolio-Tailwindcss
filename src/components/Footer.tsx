import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-16 py-6 text-center bg-green-900 bg-accent">
      <p className="font-bold items-center mt-4">@ Bushra | All rights reserved 2024.</p>
      <div className="flex items-center space-x-4 ml-5">
        <h3 className="flex mr-4 font-semibold mb-5 text-2xl">Social links:</h3>
        <div className="flex space-x-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaTwitter size={30}/>
          <span className="sr-only">Twitter</span>
        </a>
        <a
          href="//www.linkedin.com/in/bushra-turk12"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaLinkedin size={30} />
          <span className="sr-only">LinkedIn</span>
        </a>

        <a
          href="https://github.com/Bushraturk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaGithub size={30} />
          <span className="sr-only">GitHub</span>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
