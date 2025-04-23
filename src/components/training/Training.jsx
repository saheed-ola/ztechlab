import React from "react";
// import Title from "../title";
import TopTitle from "../TopTitle";

const Training = () => {
  return (
    <section
      id="training"
      className="w-full h-fit pt-10 pb-20 flex justify-center text-black  border-b-[1px] border-b-black font-titleFont"
    >
      <div className="flex flex-col gap-10 w-[90%]">
        <TopTitle heading="Training" />
        <div className="flex gap-5 ">
          <div>
            <p
              className="text-3xl mb-3 w-[400px] font-bold "
              data-aos="fade-right"
            >
              Welcome to our specialized training programs, designed to empower
              learners and organizations in today’s tech-driven world.
            </p>
            <div>
              <div className="relative">
                <div
                  variant="2"
                  className="text-2xl leading-normal mb-4 text-blue-700"
                >
                  Why Train With Us?
                </div>
                <div className="  border-b-4 border-yellow-500 absolute w-[80px] -bottom-1 left-12"></div>
              </div>
              <div
                className="grid-cols-2 gap-x-12 place-items-start"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className=" ">
                  <ul className="leading-[2] text-lg list-disc marker:text-yellow-500 ps-4 text-black-950">
                    <li>
                      Expert-led programs that are practical and future-focused.
                    </li>
                    <li>
                      Hands-on training in IoT, software development, and AI.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-20 w-1/2 h-fit">
            <div className="h-fit bg-individual bg-cover bg-center bg-no-repeat flex justify-center items-center relative">
              <div className="w-full h-full absolute bg-slate-700 bg-opacity-50"></div>
              <ul className="leading-[2] text-2xl font-bold list-disc tracking-wide w-[70%] text-white">
                <li className="font-bold text-blue-700">
                  For Individuals and Students:
                </li>
                <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  Comprehensive training on IoT technologies, embedded systems,
                  AI, and software development. Learn to build and manage your
                  own IoT solutions.
                </p>
              </ul>
            </div>
            <div className="h-fit bg-corperate bg-cover bg-center bg-no-repeat flex justify-center items-center relative">
            <div className="w-full h-full absolute bg-slate-700 bg-opacity-50"></div>
              <ul className="leading-[2] text-2xl font-bold list-disc tracking-wide w-[70%] marker:text-yellow-500 ps-4 text-white">
                <li className="font-bold text-blue-700">For Companies:</li>
                <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  Tailored training for businesses to upskill teams and stay
                  competitive in emerging tech fields.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
