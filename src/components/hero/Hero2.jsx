import React, { useEffect } from "react";
// import AOS from "aos";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero2 = () => {
  useEffect(() => {
    Aos.init({
      duration: 500, // animation duration
      once: false, // whether animation should happen only once
    });
  }, []);

  return (
    // <section
    //   id="home"
    //   className="lgl:w-full h-screen bg-hero-img bg-cover bg-center bg-no-repeat pt-10 pb-10 lgl:pb-20 flex border-b-[1px] border-b-black font-titleFont"
    // >
    //   <div className="lgl:w-[90%] h-fit mx-auto">
    //     <h1
    //       className=" lgl:font-extrabold font-bold text-2xl lgl:text-5xl flex justify-center mb-6 mx-auto"
    //       data-aos="fade-down"
    //     >
    //       Welcome to <span className="pl-4 text-yellow-500 "> ZTech Labs </span>{" "}
    //     </h1>
    //     <div className="w-full rounded-3xl h-fit flex flex-col bg-opacity-85 items-center mx-auto lgl:px-6 py-2 lgl:py-16 absolute z-10">
    //       <div
    //         className=" w-full lgl:w-2/3 mx-auto text-white flex flex-col gap-8 p-10 rounded-3xl bg-gray-600 bg-opacity-70 border-[5px] tracking-wider"
    //         data-aos="flip-left"
    //         data-aos-easing="ease-out-cubic"
    //         data-aos-duration="3000"
    //       >
    //         <h3 className="lgl:text-2xl text-xm">
    //           At ZTech Labs, we specialize in delivering advanced IoT solutions
    //           and software tailored for IoT ecosystems, empowering businesses,
    //           students, and individuals to excel in a connected world.
    //         </h3>
    //         <h3 className="text-2xl">
    //           Our expertise spans software development, embedded systems,
    //           artificial intelligence, and IoT.
    //         </h3>
    //         <h3 className="text-2xl">
    //           We create impactful products, deliver exceptional services, and
    //           train the next generation of innovators.
    //         </h3>
    //       </div>
    //       <a href="#service" className=" mx-auto block mt-8">
    //         <button className="text-lg py-3 px-8 mt-25  border-[2px] hover:text-white text-blue-800 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-600 duration-300">
    //           Explore Our Services
    //         </button>
    //       </a>
    //       <div></div>
    //     </div>
    //     {/* <div className="w-[700px] relative right-[-400px] ">
    //       <img src="/img/TechBrained.jpg" alt="" className="rounded-[100px]" />
    //     </div> */}
    //   </div>
    // </section>

    <section
      id="home"
      className="w-fit h-fit bg-hero-img bg-cover bg-center bg-no-repeat pt-8 xs:pt-10 sm:pt-12 pb-8 md:pb-12 lgl:pb-20 flex border-b-[1px] border-b-black font-titleFont"
    >
      <div className="w-full xs:w-[90%] h-fit mx-auto px-4 sml:px-0">
        <h1
          className="font-bold text-xl xs:text-2xl sm:text-3xl sml:text-4xl md:text-4xl lg:text-5xl lgl:text-5xl mb-4 sml:mb-6 mx-auto text-center"
          data-aos="fade-down"
        >
          Welcome to
          <span className="xs:pl-4 text-yellow-500 mt-2 xs:mt-0">
            ZTech Labs
          </span>
        </h1>

        <div className="w-full rounded-xl sml:rounded-2xl lg:rounded-3xl h-fit flex flex-col bg-opacity-85 items-center mx-auto px-4 sml:px-6 py-4 sml:py-8 lgl:py-16 relative z-10">
          <div
            className="w-full sml:w-5/6 md:w-3/4 lgl:w-2/3 mx-auto text-white flex flex-col gap-4 sml:gap-6 p-4 sml:p-6 md:p-8 rounded-xl sml:rounded-2xl lg:rounded-3xl bg-gray-600 bg-opacity-70 border-4 sml:border-[5px] tracking-wide"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
          >
            <h3 className="text-sm xs:text-base sm:text-lg sml:text-xl md:text-xl lgl:text-2xl">
              At ZTech Labs, we specialize in delivering advanced IoT solutions
              and software tailored for IoT ecosystems, empowering businesses,
              students, and individuals to excel in a connected world.
            </h3>
            <h3 className="text-base sm:text-lg sml:text-xl md:text-xl lgl:text-2xl">
              Our expertise spans software development, embedded systems,
              artificial intelligence, and IoT.
            </h3>
            <h3 className="text-base sm:text-lg sml:text-xl md:text-xl lgl:text-2xl">
              We create impactful products, deliver exceptional services, and
              train the next generation of innovators.
            </h3>
          </div>

          <a href="#service" className="mx-auto block mt-6 sml:mt-8">
            <button className="text-sm xs:text-base sm:text-lg py-2 xs:py-3 px-6 xs:px-8 border-[2px] text-white bg-blue-800 hover:text-blue hover:bg-opacity-0 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-600 duration-300">
              Explore Our Services
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
