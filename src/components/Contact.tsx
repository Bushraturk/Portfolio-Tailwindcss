import React from "react";
import { MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl" data-aos="zoom-in-up">
            Get in touch
          </h2>
          <p className="text-gray-600 text-[20px] pt-2" data-aos="zoom-in-up">
            Drop me a line, give ,me a call, or send me a message by sumitting
            the form.
          </p>
          <div
            className="flex gap-3 items-center  hover:text-blue-600"
            data-aos="zoom-in-up"
          >
            <MdMailOutline size={30} />
            <a
              href="mailto:bushrahussain068@gmail.com"
              className=" hover:text-blue-600"
            >
              bushrahussain068@gmail.com
            </a>
          </div>
          <div
            className="flex gap-3 items-center  hover:text-blue-600"
            data-aos="zoom-in-up"
          >
            <BsTelephone size={30} /> (0331) 6236192
          </div>
          <div
            className="flex gap-3 items-center  hover:text-blue-600"
            data-aos="zoom-in-up"
          >
            <FaLinkedin size={30} />
            <a
              href="//www.linkedin.com/in/bushra-turk12"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bushra Turk{" "}
            </a>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-accent"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-accent"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea
              className="bg-transparent border border-accent"
              id="msg"
              rows={8}
            ></textarea>
          </div>
          <button
            className="bg-accent bg-green-800 p-2 px-6"
            data-aos="zoom-in-up"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
