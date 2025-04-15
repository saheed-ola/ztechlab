import React from "react";
import { digital, logo, TechBrained } from "../../assets";

const About = () => {
  return (
    <section
      id="about"
      className="w-[90%] h-fit mx-auto  pt-10 pb-20 flex flex-col text-black  border-b-[1px] border-b-black font-titleFont"
    >
      <div className="relative flex justify-center flex-col items-center mb-8">
        <div
          variant="2"
          className="text-4xl leading-normal mb-4 text-blue-700 font-bold"
        >
          About Us
        </div>
        <div className="border-b-4 border-yellow-500 w-[80px] -mt-4"></div>
      </div>

      <div className="w-full h-[500px] bg-smile bg-cover bg-center bg-no-repeat flex flex-col justify-between">
        <div className="text-white font-extrabold text-3xl bg-gray-600 bg-opacity-70 w-[50%] h-[10%] rounded-br-3xl flex justify-center items-center py-10" data-aos="fade-right">
          <p> Who we are</p>
        </div>
        <div className="w-[100%] h-fit flex justify-end" data-aos="fade-left">
          <div className="text-white font-extrabold text-3xl bg-gray-600 bg-opacity-70 w-[70%] h-[100%] rounded-tl-3xl leading-[2] tracking-wide flex flex-col gap-8 items-center justify-center rounded-tl-4xl p-8">
            <p className="text-xl leading-[1.5] tracking-wider">
              ZTech Labs is committed to developing innovative IoT software,
              smart devices, and delivering high-quality training to businesses,
              students, and individuals.
            </p>
            <p className="text-xl leading-[1.5] tracking-wider">
              We are focused on shaping the future with technology-driven
              solutions and providing exceptional customer experiences.
            </p>
          </div>
        </div>
      </div>

      {/* <div className='min-h-screen flex gap-12 justify-center items-center'>
      <div className='w-[200px] h-[200px] rounded-2xl rotate-45 overflow-hidden shadow-yellow-400/50 shadow-xl'>
          <img className='-rotate-45 scale-100 ' src={TechBrained} alt="" />
      </div>
      <div className='w-[200px] h-[200px] rounded-2xl rotate-45 overflow-hidden shadow-cyan-400/50 shadow-xl'>
          <img className='-rotate-45 scale-100 ' src={TechBrained} alt="" />
      </div>
    </div>
    <br /> */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="w-3/5 flex justify-center items-center">
            <h1 className="font-extrabold text-4xl" data-aos="fade-right">OUR MISSION</h1>
          </div>
          <div className="w-2/5 h-[400px] border flex justify-center items-center bg-chat  bg-cover bg-center bg-no-repeat" data-aos="fade-left">
            <h1 className="w-[50%] text-xl leading-[1.5] tracking-wider text-white font-bold" data-aos="zoom-in-up">
              Innovating smart solutions to build a more connected world through
              IoT.
            </h1>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-between">
          <div className="w-3/5 flex justify-center items-center">
            <h1 className="font-extrabold text-4xl" data-aos="fade-left">OUR VISSION</h1>
          </div>
          <div className="w-2/5 h-[400px] border flex justify-center items-center bg-shade bg-cover bg-center bg-no-repeat" data-aos="fade-right">
            <h1 className="w-[50%] text-xl leading-[1.5] tracking-wider text-white font-bold" data-aos="zoom-in-up">
            To empower businesses and individuals by driving digital
            transformation through technology.
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-[100%] h-fit bg-[#5b5b5b]  bg-opacity-70 py-10" data-aos="zoom-in-up">
        <div className="flex flex-col gap-5 mx-auto text-white items-center justify-center leading-[2] text-lg list-disc tracking-wide w-[70%] marker:text-yellow-500 ps-4" >
            <h3 className="flex justify-center item-start text-2xl font-bold ">
              What We Do
            </h3>
            <p>
              ZTech Labs builds products, provides services, and trains
              individuals on emerging technologies such as IoT, AI, and
              embedded systems.
            </p>
        </div>
        <div className="flex flex-col gap-5 w-[100%] mx-auto text-white items-center justify-center">
          <h3 className="flex justify-center item-start text-2xl font-bold ">
            Core Values
          </h3>

          <ul className="flex gap-10 leading-[2] text-lg list-disc tracking-wide ps-4 text-white">
            <li>Innovation</li>
            <li>Customer Success</li>
            <li>Empowerment</li>
            <li>Excellence</li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;

// bg-[url[(/img/hero-pattern.jpg)]]

// bg-clip-text

// text-transparent
