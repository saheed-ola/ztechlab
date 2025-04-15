import React from 'react'
import ServiceCard from './ServiceCard'
import { AI, backend, desktop, digital, embeded, IOT, mobile, TechBrained } from '../../assets'
// import { digital } from '../../assets/index'
// import { contactImg } from '../../../public/name'




const Services = () => {
  return (
    <section id='services' className='w-[90%] h-fit pt-10 pb-20 flex flex-col mx-auto text-black  border-b-[1px] border-b-black font-titleFont'>
      <div className="relative flex justify-center flex-col items-center">
          <div variant="2" className="text-4xl leading-normal mb-4 text-blue-700 font-bold">Services</div>
          <div className="border-b-4 border-yellow-500 w-[80px] -mt-4"></div>
      </div>
      <br />
    <div className='w-full grid grid-cols-3 gap-16'>
        <ServiceCard className = "flex gap-4 "
        src = {mobile}
        title = "Mobile App Development"
        des = "Develop IoT-enabled mobile apps for seamless interaction with smart devices, providing real-time monitoring, remote control, and analytics on both Android and iOS."
        />

        <ServiceCard className = "flex gap-4"
          src = {backend}
          title = "Backend Development"
          des = "Build secure and scalable backends for IoT ecosystems, ensuring smooth communication between devices and cloud infrastructure for real-time updates."
          />
          <ServiceCard className = "flex gap-4 "
        src = {AI}
        title = "Artificial Intelligence solution"
        des = "Integrate AI and machine learning into IoT systems for automation, predictive maintenance, and smart decision-making to enhance operational efficiency."
        />
        <ServiceCard className = "flex gap-4"
        src = {embeded}
        title = "Embedded System Development"
        des = " Design and develop embedded systems to power IoT devices, ensuring efficiency, performance, and reliable connectivity in various environments."
        />
        <ServiceCard className = "flex gap-4"
        src = {IOT}
        title = "Internet of things (IOT) solution"
        des = "We Offer end-to-end IoT solutions, from device connectivity and sensor integration to cloud analytics, ensuring smarter, more efficient operations across various industries."
        />
        <ServiceCard className = "flex gap-4 "
        src = {desktop}
        title = "Desktop App Development"
        des = "Create cross-platform desktop applications that offer intuitive control over IoT networks, enabling users to monitor devices and access data analytics effortlessly."
        />
    </div>

      {/* <div className='grid grid-cols-3 gap-15 mt-15'>
      <Card>
          <div className="bg-blue-950 text-white-50 font-extrabold text-1xl rounded-md w-[250px] h-[80px] absolute top-0 left-1/2 
                    transform -translate-y-1 -translate-x-1/2 flex items-center justify-center p-2 mb-6">
                        {title}
          </div>
          <div>
            <Typography variant="4" className="text-1xl font-normal leading-relaxed  mt-4">
            Develop IoT-enabled mobile apps for seamless interaction with smart devices, providing real-time monitoring, remote control, and analytics on both Android and iOS.
            </Typography>
          </div>   
      </Card>
      <Card>
          <div className="bg-yellow-700 text-white-50 font-extrabold text-1xl rounded-md w-[250px] h-[80px] absolute top-0 left-1/2 
                    transform -translate-y-1 -translate-x-1/2 flex items-center justify-center p-2 mb-6">
              Desktop App Development
          </div>
          <div>
            <Typography variant="4" className="text-1xl font-normal leading-relaxed  mt-4">
            Create cross-platform desktop applications that offer intuitive control over IoT networks, enabling users to monitor devices and access data analytics effortlessly.
            </Typography>
          </div>

      </Card>
      <Card>
          <div className="bg-blue-950 text-white-50 font-extrabold text-1xl rounded-md w-[250px] h-[80px] absolute top-0 left-1/2 
                    transform -translate-y-1 -translate-x-1/2 flex items-center justify-center p-2 mb-6">
              Backend Development
          </div>
          <div>
            <Typography variant="4" className="text-1xl font-normal leading-relaxed  mt-4">
            Build secure and scalable backends for IoT ecosystems, ensuring smooth communication between devices and cloud infrastructure for real-time updates.
            </Typography>
          </div>
      </Card>
      <Card>
          <div className="bg-yellow-700 text-white-50 font-extrabold text-1xl rounded-md w-[250px] h-[80px] absolute top-0 left-1/2 
                    transform -translate-y-1 -translate-x-1/2 flex items-center justify-center p-2 mb-6">
              Embedded systems Development
          </div>
          <div>
            <Typography variant="4" className="text-1xl font-normal leading-relaxed  mt-4">
            Design and develop embedded systems to power IoT devices, ensuring efficiency, performance, and reliable connectivity in various environments.
            </Typography>
          </div>
      </Card>
      <Card>
          <div className="bg-blue-950 text-white-50 font-extrabold text-1xl rounded-md w-[250px] h-[80px] absolute top-0 left-1/2 
                    transform -translate-y-1 -translate-x-1/2 flex items-center justify-center p-2 mb-6">
              Artificial Intelligence (AI) Solutions
          </div>
          <div>
            <Typography variant="4" className="text-1xl font-normal leading-relaxed  mt-4">
            Integrate AI and machine learning into IoT systems for automation, predictive maintenance, and smart decision-making to enhance operational efficiency.
            </Typography>
          </div>
      </Card>
      <Card>
          <div className="bg-yellow-700 text-white-50 font-extrabold text-1xl rounded-md w-[250px] h-[80px] absolute top-0 left-1/2 
                    transform -translate-y-1 -translate-x-1/2 flex items-center justify-center p-2 mb-6">
              Internet of things (IOT) solution
          </div>
          <div>
            <Typography variant="4" className="text-1xl font-normal leading-relaxed  mt-4">
            Offer end-to-end IoT solutions, from device connectivity and sensor integration to cloud analytics, ensuring smarter, more efficient operations across various industries.
            </Typography>
          </div>
      </Card>
      </div> */}
     
  </section>
  )
}

export default Services