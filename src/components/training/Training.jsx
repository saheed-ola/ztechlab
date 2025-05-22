import React from "react";
import TopTitle from "../TopTitle";

const Training = () => {
  return (
    <section
      id="training"
      className="w-full h-fit pt-6 pb-12 md:pt-10 md:pb-20 flex justify-center text-black border-b-[1px] border-b-black font-titleFont"
    >
      <div className="flex flex-col gap-6 md:gap-10 w-[90%] max-w-[1536px]">
        <TopTitle heading="Training" />
        <div className="flex flex-col lg:flex-row gap-5 md:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:w-[55%] xl:w-[50%]">
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-3 w-full lg:max-w-[400px] xl:max-w-none font-bold"
              data-aos="fade-right"
            >
              Welcome to our specialized training programs, designed to empower
              learners and organizations in today’s tech-driven world.
            </p>
            <div>
              <div className="relative mb-6 md:mb-8">
                <div className="text-lg md:text-xl lg:text-2xl leading-normal text-blue-700">
                  Why Train With Us?
                </div>
                <div className="border-b-2 md:border-b-4 border-yellow-500 absolute w-[60px] md:w-[80px] left-8 md:left-12 -bottom-1"></div>
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <ul className="leading-[1.8] text-base md:text-lg list-disc marker:text-yellow-500 ps-4">
                  <li className="mb-2">
                    Expert-led programs that are practical and future-focused.
                  </li>
                  <li>
                    Hands-on training in IoT, software development, and AI.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-y-8 md:gap-y-12 lg:gap-y-20 lg:w-[45%] xl:w-[50%] h-fit">
            {/* Individual Training Card */}
            <div className="h-fit bg-individual bg-cover bg-center bg-no-repeat flex justify-center items-center rounded-full relative aspect-square md:aspect-[3/2] lg:aspect-square">
              <div className="w-full h-full absolute bg-slate-700 bg-opacity-50"></div>
              <ul className="leading-[1.8] text-lg md:text-xl lg:text-2xl font-bold list-disc tracking-wide w-[80%] md:w-[70%] text-white z-10 p-4">
                <li className="font-bold text-blue-700 text-xl md:text-2xl">
                  For Individuals and Students:
                </li>
                <p className="font-normal mt-2" data-aos="fade-up">
                  Comprehensive training on IoT technologies, embedded systems,
                  AI, and software development. Learn to build and manage your
                  own IoT solutions.
                </p>
              </ul>
            </div>

            {/* Corporate Training Card */}
            <div className="h-fit bg-corperate bg-cover bg-center bg-no-repeat flex justify-center items-center relative aspect-square md:aspect-[3/2] lg:aspect-square">
              <div className="w-full h-full absolute bg-slate-700 bg-opacity-50"></div>
              <ul className="leading-[1.8] text-lg md:text-xl lg:text-2xl font-bold list-disc tracking-wide w-[80%] md:w-[70%] marker:text-yellow-500 ps-4 text-white z-10 p-4">
                <li className="font-bold text-blue-700 text-xl md:text-2xl">
                  For Companies:
                </li>
                <p className="font-normal mt-2" data-aos="fade-up">
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
