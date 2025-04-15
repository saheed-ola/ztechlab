
import React, { useEffect } from "react";
// import AOS from "aos";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero2 = () => {
    useEffect(() => {
      Aos.init({
        duration: 500, // animation duration
        once: false,     // whether animation should happen only once
      });
  }, [])
    
  return (
    <section id='home' className='w-full h-screen bg-hero-img bg-cover bg-center bg-no-repeat pt-10 pb-20 flex border-b-[1px] border-b-black font-titleFont'>
      <div className='w-[90%] h-fit'>
      <h1 className=' font-extrabold text-5xl flex justify-center mb-6 mx-auto' data-aos="fade-down">Welcome to <span className='pl-4 text-yellow-500'> ZTech Labs </span> </h1>
      <div className=' rounded-3xl h-fit flex flex-col bg-opacity-85 items-center mx-auto px-6 py-16 absolute z-10'>
            <div className=' w-2/3 mx-auto text-white flex flex-col gap-8 p-10 rounded-3xl bg-gray-600 bg-opacity-70 border-[5px] tracking-wider' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"> 
                
                <h3 className='text-2xl'>At ZTech Labs, we specialize in delivering advanced IoT solutions and software tailored for IoT ecosystems, empowering businesses, students, and individuals to excel in a connected world.</h3>
                <h3 className='text-2xl'>Our expertise spans software development, embedded systems, artificial intelligence, and IoT.</h3>
                <h3 className='text-2xl'>We create impactful products, deliver exceptional services, and train the next generation of innovators.</h3>
                
            </div>
            <a href="#service" className=" mx-auto block mt-8">
                <button className="text-lg py-3 px-8 mt-25  border-[2px] hover:text-white text-blue-800 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-600 duration-300">
                    Explore Our Services
                </button>
                </a>
            <div></div>
         </div>
         <div  className='w-[700px] relative right-[-400px] '>
            <img src="/img/TechBrained.jpg" alt="" className='rounded-[100px]'/>
        </div>
      </div>
        
    </section>
  )
}

export default Hero2