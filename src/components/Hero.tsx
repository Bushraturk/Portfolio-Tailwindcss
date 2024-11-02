"use client";
import React from "react";
import Nav from "./Navbar";
// import Typewriter from "typewriter-effect";
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from "typewriter-effect";

import Projects from "./Projects";
import { useState } from "react";

// part 1

const Hero = () => {
  const [showProjects, setShowProjects] = useState(false); // State to manage projects visibility

  const handleButtonClick = () => {
    setShowProjects(!showProjects); // Toggle the visibility of projects
  };

  return (
    <div
      id="hero"
      className="min-h-96 gap-2 mt:10 md:mt-9 bg-no-repeat ml-11 bg-[url(/Banner.jpg)] bg-cover"
      style={{
        backgroundSize: "30%",
        backgroundPosition: "right 100px top 100px",
      }}
    >
      <Nav />
      <div className="container mr-96 left-96 grid lg:grid-cols-0 justity:space-between mt-9 h-[calc(60vh 50px)]">
        <div className="hidden lg:block"></div>
        <h3 className="text-gray-600 font-medium text-1xl lg:text-3xl">Wellcome to my Portfolio</h3>
        <h1 className="text-slate-600 font-extrabold text-2xl lg:text-6xl">Hi, I am</h1>
        <div className=" lg:text-7xl sm:text-3xl lg:mt-5 mt-9 ml-8 mr-96 font-bold leading-tight flex">
          {/* 2 try */}

          <Typewriter
            options={{
              strings: ["Bushra Turk", "Fronted Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="leading-tight container mt-10 ml-5 lg:mr-0 grid lg:w-1/2">
        <p
          className="p-11 lg:text-2xl text-wrap pr-7 leading-tight"
          data-aos="zoom-in-up"
        >
          I am a frontend developer skilled in HTML, CSS, JavaScript, and
          TypeScript. Currently learning Next.js at GIAIC, I&apos;m building
          responsive, interactive websites and aiming to become a full-stack
          developer.
        </p>
      </div>
      <div className="flex-auto h-24 ml-32 items-center justify-center">
        <button
          onClick={handleButtonClick} // Add click handler here
          className="font-medium text-2xl w-36 border border-white bg-slate-500 hover:bg-slate-600 transition-transform transform duration-100 rounded-lg"
          data-aos="zoom-in-up"
        >
          My Work
        </button>
      </div>
      {showProjects && <Projects />}
    </div>
  );
};

export default Hero;


