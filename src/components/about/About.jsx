// import React from "react";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="w-[90%] h-fit mx-auto  pt-10 pb-20 flex flex-col text-black  border-b-[1px] border-b-black font-titleFont"
//     >
//       <div className="relative flex justify-center flex-col items-center mb-8">
//         <div
//           variant="2"
//           className="text-4xl leading-normal mb-4 text-blue-700 font-bold"
//         >
//           About Us
//         </div>
//         <div className="border-b-4 border-yellow-500 w-[80px] -mt-4"></div>
//       </div>

//       <div className="w-full h-[500px] bg-smile bg-cover bg-center bg-no-repeat flex flex-col justify-between">
//         <div className="text-white font-extrabold text-3xl bg-gray-600 bg-opacity-70 w-[50%] h-[10%] rounded-br-3xl flex justify-center items-center py-10" data-aos="fade-right">
//           <p> Who we are</p>
//         </div>
//         <div className="w-[100%] h-fit flex justify-end" data-aos="fade-left">
//           <div className="text-white font-extrabold text-3xl bg-gray-600 bg-opacity-70 w-[70%] h-[100%] rounded-tl-3xl leading-[2] tracking-wide flex flex-col gap-8 items-center justify-center rounded-tl-4xl p-8">
//             <p className="text-xl leading-[1.5] tracking-wider">
//               ZTech Labs is committed to developing innovative IoT software,
//               smart devices, and delivering high-quality training to businesses,
//               students, and individuals.
//             </p>
//             <p className="text-xl leading-[1.5] tracking-wider">
//               We are focused on shaping the future with technology-driven
//               solutions and providing exceptional customer experiences.
//             </p>
//           </div>
//         </div>
//       </div>

      
//       <div className="flex flex-col">
//         <div className="flex justify-between">
//           <div className="w-3/5 flex justify-center items-center">
//             <h1 className="text-8xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-shade font-extrabold" data-aos="fade-right">OUR MISSION</h1>
//           </div>
//           <div className="w-2/5 h-[400px] border flex justify-center items-center bg-chat  bg-cover bg-center bg-no-repeat" data-aos="fade-left">
//           <div className="w-full h-full absolute bg-slate-700 bg-opacity-50"></div>
//             <h1 className="w-[50%] text-xl leading-[1.5] tracking-wider text-white font-bold" data-aos="zoom-in-up">
//               Innovating smart solutions to build a more connected world through
//               IoT.
//             </h1>
//           </div>
//         </div>

//         <div className="flex flex-row-reverse justify-between">
//           <div className="w-3/5 flex justify-center items-center">
//             <h1 className="text-8xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-shade font-extrabold" data-aos="fade-left">OUR VISSION</h1>
//           </div>
//           <div className="w-2/5 h-[400px] border flex justify-center items-center bg-shade bg-cover bg-center bg-no-repeat" data-aos="fade-right">
//           <div className="w-full h-full absolute bg-slate-700 bg-opacity-50"></div>
//             <h1 className="w-[50%] text-xl leading-[1.5] tracking-wider text-white font-bold" data-aos="zoom-in-up">
//             To empower businesses and individuals by driving digital
//             transformation through technology.
//             </h1>
//           </div>
//         </div>
//         <div className="flex flex-col w-[100%] h-fit bg-[#5b5b5b]  bg-opacity-70 py-10" data-aos="zoom-in-up">
//         <div className="flex flex-col gap-5 mx-auto text-white items-center justify-center leading-[2] text-lg list-disc tracking-wide w-[70%] marker:text-yellow-500 ps-4" >
//             <h3 className="flex justify-center item-start text-2xl font-bold ">
//               What We Do
//             </h3>
//             <p>
//               ZTech Labs builds products, provides services, and trains
//               individuals on emerging technologies such as IoT, AI, and
//               embedded systems.
//             </p>
//         </div>
//         <div className="flex flex-col gap-5 w-[100%] mx-auto text-white items-center justify-center">
//           <h3 className="flex justify-center item-start text-2xl font-bold ">
//             Core Values
//           </h3>

//           <ul className="flex gap-10 leading-[2] text-lg list-disc tracking-wide ps-4 text-white">
//             <li>Innovation</li>
//             <li>Customer Success</li>
//             <li>Empowerment</li>
//             <li>Excellence</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// };

// export default About;

// // bg-[url[(/img/hero-pattern.jpg)]]

// // bg-clip-text

// // text-transparent

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-[90%] xs:w-[95%] sml:w-[90%] mx-auto pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 flex flex-col text-black border-b-[1px] border-b-black font-titleFont"
    >
      {/* Title Section */}
      <div className="relative flex justify-center flex-col items-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl leading-normal mb-3 sm:mb-4 text-blue-700 font-bold">
          About Us
        </h2>
        <div className="border-b-4 border-yellow-500 w-[60px] sml:w-[80px] -mt-3 sm:-mt-4" />
      </div>

      {/* Hero Section */}
      <div className="w-full h-[300px] sml:h-[400px] md:h-[500px] bg-smile bg-cover bg-center bg-no-repeat flex flex-col justify-between">
        <div 
          className="text-white font-extrabold text-xl sml:text-2xl md:text-3xl bg-gray-600 bg-opacity-70 w-full xs:w-[70%] sm:w-[60%] md:w-[50%] h-[12%] sm:h-[10%] rounded-br-xl sm:rounded-br-2xl md:rounded-br-3xl flex justify-center items-center py-4 sm:py-6 md:py-10"
          data-aos="fade-right"
        >
          <p>Who we are</p>
        </div>
        
        <div className="w-full h-fit flex justify-end" data-aos="fade-left">
          <div className="text-white font-extrabold text-base sm:text-lg sml:text-xl md:text-2xl bg-gray-600 bg-opacity-70 w-full sml:w-[85%] md:w-[70%] rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl leading-normal tracking-wide flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-center p-4 sm:p-6 md:p-8">
            <p>
              ZTech Labs is committed to developing innovative IoT software,
              smart devices, and delivering high-quality training to businesses,
              students, and individuals.
            </p>
            <p>
              We are focused on shaping the future with technology-driven
              solutions and providing exceptional customer experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="flex flex-col gap-8 md:gap-12 mt-8 sm:mt-12 md:mt-16">
        {/* Mission */}
        <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8">
          <div className="w-full md:w-3/5 flex justify-center items-center order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-shade font-extrabold text-center md:text-left" 
                data-aos="fade-right">
              OUR MISSION
            </h1>
          </div>
          <div className="w-full md:w-2/5 h-[250px] sm:h-[300px] md:h-[400px] border flex justify-center items-center bg-chat bg-cover bg-center bg-no-repeat relative order-1 md:order-2"
               data-aos="fade-left">
            <div className="w-full h-full absolute bg-slate-700 bg-opacity-50" />
            <h1 className="w-[90%] sm:w-[80%] md:w-[70%] text-base sm:text-lg md:text-xl leading-relaxed tracking-wide text-white font-bold text-center" 
                data-aos="zoom-in-up">
              Innovating smart solutions to build a more connected world through IoT.
            </h1>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row-reverse justify-between gap-6 sm:gap-8">
          <div className="w-full md:w-3/5 flex justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-shade font-extrabold text-center md:text-left" 
                data-aos="fade-left">
              OUR VISION
            </h1>
          </div>
          <div className="w-full md:w-2/5 h-[250px] sm:h-[300px] md:h-[400px] border flex justify-center items-center bg-shade bg-cover bg-center bg-no-repeat relative"
               data-aos="fade-right">
            <div className="w-full h-full absolute bg-slate-700 bg-opacity-50" />
            <h1 className="w-[90%] sm:w-[80%] md:w-[70%] text-base sm:text-lg md:text-xl leading-relaxed tracking-wide text-white font-bold text-center" 
                data-aos="zoom-in-up">
              To empower businesses and individuals by driving digital transformation through technology.
            </h1>
          </div>
        </div>

        {/* What We Do & Values */}
        <div className="flex flex-col w-full bg-[#5b5b5b] bg-opacity-70 py-6 sm:py-8 md:py-10 mt-6 sm:mt-8"
             data-aos="zoom-in-up">
          <div className="flex flex-col gap-4 sm:gap-5 mx-auto text-white items-center justify-center leading-relaxed text-base sm:text-lg md:text-xl tracking-wide w-[90%] sml:w-[80%] md:w-[70%]">
            <h3 className="text-xl sm:text-2xl font-bold text-center">
              What We Do
            </h3>
            <p className="text-center">
              ZTech Labs builds products, provides services, and trains
              individuals on emerging technologies such as IoT, AI, and
              embedded systems.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 sm:gap-5 w-full mx-auto mt-6 sm:mt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-white">
              Core Values
            </h3>
            <ul className="flex flex-col xs:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 leading-relaxed text-base sm:text-lg list-disc tracking-wide ps-4 sm:ps-6 text-white">
              <li className="xs:w-[45%] sm:w-auto">Innovation</li>
              <li className="xs:w-[45%] sm:w-auto">Customer Success</li>
              <li className="xs:w-[45%] sm:w-auto">Empowerment</li>
              <li className="xs:w-[45%] sm:w-auto">Excellence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;