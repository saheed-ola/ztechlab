// import React from 'react'
// import ServiceCard from './ServiceCard'
// import { AI, backend, desktop, digital, embeded, IOT, mobile, TechBrained } from '../../assets'


// const Services = () => {
//   return (
//     <section id='services' className='w-[90%] h-fit pt-10 pb-20 flex flex-col mx-auto text-black  border-b-[1px] border-b-black font-titleFont'>
//       <div className="relative flex justify-center flex-col items-center">
//           <div variant="2" className="text-4xl leading-normal mb-4 text-blue-700 font-bold">Services</div>
//           <div className="border-b-4 border-yellow-500 w-[80px] -mt-4"></div>
//       </div>
//       <br />
//     <div className='w-full grid grid-cols-3 gap-16'>
//         <ServiceCard className = "flex gap-4 "
//         src = {mobile}
//         title = "Mobile App Development"
//         des = "Develop IoT-enabled mobile apps for seamless interaction with smart devices, providing real-time monitoring, remote control, and analytics on both Android and iOS."
//         />

//         <ServiceCard className = "flex gap-4"
//           src = {backend}
//           title = "Backend Development"
//           des = "Build secure and scalable backends for IoT ecosystems, ensuring smooth communication between devices and cloud infrastructure for real-time updates."
//           />
//           <ServiceCard className = "flex gap-4 "
//         src = {AI}
//         title = "Artificial Intelligence solution"
//         des = "Integrate AI and machine learning into IoT systems for automation, predictive maintenance, and smart decision-making to enhance operational efficiency."
//         />
//         <ServiceCard className = "flex gap-4"
//         src = {embeded}
//         title = "Embedded System Development"
//         des = " Design and develop embedded systems to power IoT devices, ensuring efficiency, performance, and reliable connectivity in various environments."
//         />
//         <ServiceCard className = "flex gap-4"
//         src = {IOT}
//         title = "Internet of things (IOT) solution"
//         des = "We Offer end-to-end IoT solutions, from device connectivity and sensor integration to cloud analytics, ensuring smarter, more efficient operations across various industries."
//         />
//         <ServiceCard className = "flex gap-4 "
//         src = {desktop}
//         title = "Desktop App Development"
//         des = "Create cross-platform desktop applications that offer intuitive control over IoT networks, enabling users to monitor devices and access data analytics effortlessly."
//         />
//     </div>     
//   </section>
//   )
// }

// export default Services

// Services.jsx
import React from 'react'
import ServiceCard from './ServiceCard'
import { AI, backend, desktop, digital, embeded, IOT, mobile, TechBrained } from '../../assets'

const Services = () => {
  return (
    <section id='services' className='w-full max-w-7xl h-fit pt-8 xs:pt-10 pb-12 md:pb-20 flex flex-col mx-auto px-4 sm:px-6 md:px-8 text-black border-b-[1px] border-b-black/30 font-titleFont'>
      <div className="relative flex justify-center flex-col items-center">
          <h2 className="text-3xl xs:text-4xl md:text-5xl leading-normal mb-4 text-blue-700 font-bold text-center">
              Services
          </h2>
          <div className="border-b-4 border-yellow-500 w-[80px] -mt-4" />
      </div>
      
      <div className='w-full mt-8 md:mt-12 grid grid-cols-1 sml:grid-cols-2 lg:grid-cols-3 gap-6 sml:gap-8 md:gap-10 xl:gap-12'>
          <ServiceCard
              src={mobile}
              title="Mobile App Development"
              des="Develop IoT-enabled mobile apps for seamless interaction with smart devices, providing real-time monitoring, remote control, and analytics on both Android and iOS."
          />

          <ServiceCard
              src={backend}
              title="Backend Development"
              des="Build secure and scalable backends for IoT ecosystems, ensuring smooth communication between devices and cloud infrastructure for real-time updates."
          />

          <ServiceCard
              src={AI}
              title="Artificial Intelligence solution"
              des="Integrate AI and machine learning into IoT systems for automation, predictive maintenance, and smart decision-making to enhance operational efficiency."
          />

          <ServiceCard
              src={embeded}
              title="Embedded System Development"
              des="Design and develop embedded systems to power IoT devices, ensuring efficiency, performance, and reliable connectivity in various environments."
          />

          <ServiceCard
              src={IOT}
              title="Internet of things (IOT) solution"
              des="We Offer end-to-end IoT solutions, from device connectivity and sensor integration to cloud analytics, ensuring smarter, more efficient operations across various industries."
          />

          <ServiceCard
              src={desktop}
              title="Desktop App Development"
              des="Create cross-platform desktop applications that offer intuitive control over IoT networks, enabling users to monitor devices and access data analytics effortlessly."
          />
      </div>     
    </section>
  )
}

export default Services