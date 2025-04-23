import React from "react";
import Navbar from "./components/navbar/Navbar";
// import Hero from "./components/hero/hero";
import Services from "./components/services/Services";
import Products from "./components/products/Products";
import Training from "./components/training/Training";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Hero2 from "./components/hero/Hero2";
// import { RiStarFill } from "react-icons/ri";

export const reviews = [
  {
    picture: "/img/stock.jpg",
    oruko: "Oluwole Zaccheous", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!",
  },
  {
    picture: "/img/stock.jpg",
    oruko: "Victoria Omotan", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
  {
    picture: "/img/stock.jpg", 
    oruko: "Micheal Daniel", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
  {
    picture: "/img/stock.jpg",
    oruko: "Adetayo Shobayo", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
  {
    picture: "/img/stock.jpg", 
    oruko: "Micheal Daniel", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
  {
    picture: "/img/stock.jpg",
    oruko: "Adetayo Shobayo", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
  {
    picture: "/img/stock.jpg", 
    oruko: "Micheal Daniel", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
  {
    picture: "/img/stock.jpg",
    oruko: "Adetayo Shobayo", 
    positon: "CEO, EvonMedics Limited, Lagos, Nigeria.",
    statement:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eveniet consequuntur excepturi magnam explicabo dolor rem non omnis, amet tempora in mollitia praesentium aliquid, natus veritatis incidunt culpa, aut dolorum!"
  },
];

function App() {
  const skills = [
    {
      image: "/images/zac2.jpg",
      title: "Mobile App Development ",
      paragraph:
        "Develop IoT-enabled mobile apps for seamless interaction with smart devices, providing real-time monitoring, remote control, and analytics on both Android and iOS. ",
    },
  ];
  return (
    <>
      <div className="w-full bg-[#c0c0c0] h-auto text-white">
        <Navbar />
        <div className="max-w-screen-2xl mx-auto">
          <Hero2 />
          <About />                                                                                       
          <Services />
          <Products />
          {/* <div className="overflow-y-hidden">
            {reviews.map((r, index) => (
              <div key={index} className="w-[70%] h-fit mx-auto py-10 bg-white rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center items-center relative gap-4 lgl:gap-8 " >
                <img
                  src={r.picture}
                  alt=""
                  className="absolute w-[200px] h-[200px] border-[2px] border-yellow-500 -top-[150px] rounded-full bg-cover bg-center bg-no-repeat"
                />
                <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <h3 className="text-xl text-black lgl:text-2xl font-medium tracking-wide">
                        {r.oruko}
                    </h3>
                    <p className="text-base text-gray-400 mt-3 mx-auto w-full">
                        {r.positon}
                    </p>
                </div>
                <div className='text-yellow-500 flex gap-1'>
                    <RiStarFill/>
                    <RiStarFill/>
                    <RiStarFill/>
                    <RiStarFill/>
                    <RiStarFill/>
                </div>
                    <p className="text-black">{r.statement}</p>
              </div>
            ))}
          </div> */}

          {/* <div className="w-[50%] h-fit mx-auto py-10 bg-white rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center items-center relative gap-4 lgl:gap-8">
            <div className="absolute w-[200px] h-[200px] border-[2px] border-yellow-500 -top-[150px] rounded-full bg-hero-img bg-cover bg-center bg-no-repeat"></div>
            <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
              <div>
                <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                  Oluwole Zaccheous Olujimi
                </h3>
                <p className="text-base text-gray-400 mt-3 mx-auto w-full">
                  CEO, EvonMedics limited, Lagos Nigeria
                </p>
              </div> */}
              {/* <div className='text-yellow-500 flex gap-1'>
                     
                      <RiStarFill/>
                      <RiStarFill/>
                      <RiStarFill/>
                      <RiStarFill/>
                      <RiStarFill/>
                  </div> */}
            {/* </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              eveniet consequuntur excepturi magnam explicabo dolor rem non
              omnis, amet tempora in mollitia praesentium aliquid, natus
              veritatis incidunt culpa, aut dolorum!
            </p>
          </div> */}

          <Training />
          <Contact />
          <Footer />
          <FooterBottom />
          {/* <div className="grid grid-cols-3 gap-4 mt-10">
        {skills.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            paragraph={item.paragraph}
          />
        ))}
      </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
