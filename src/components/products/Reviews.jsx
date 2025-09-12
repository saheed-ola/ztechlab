import { RiStarFill } from "react-icons/ri";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import TopTitle from "../TopTitle";


export const reviews = [
  {
    picture: "/img/stock.jpg",
    oruko: "Angela Wells", 
    positon: "Senior Lecturer, City University of Seattle, USA",
    statement:
      "ZTech Labs is doing an excellent job of bridging the gap between IoT concepts and practical applications. Their projects demonstrate both innovation and real-world relevance, making them a valuable contributor to the global IoT space.",
  },
  {
    picture: "/img/stock.jpg",
    oruko: "Dr. Oluwaseun Martins", 
    positon: "Senior Lecturer, Mechatronics Engineering, Federal University Oye Ekiti, Nigeria.",
    statement:
      "ZTech Labs’ work in IoT and embedded systems is both inspiring and technically sound. Their projects show a high level of expertise and provide valuable insights for advancing engineering practice.",
  },
  {
    picture: "/img/stock.jpg", 
    oruko: "Moshood Yahaya", 
    positon: "Lead ML/AI, Guided e-Learning, United Kingdom",
    statement:
      "The depth and clarity of ZTech Labs’ work in IoT and intelligent systems is remarkable. Their solutions show how creativity and technical expertise can combine to solve meaningful problems.",
  },
  {
    picture: "/img/stock.jpg",
    oruko: "Samuel Obiagba", 
    positon: "Roboticist & Backend Engineer, Founder of Robocre8, Nigeria",
    statement:
      "The Embedded Switch App developed by ZTech Labs is a powerful tool for device control and management. It provides a smooth and intuitive interface, making embedded system interactions far more efficient and reliable."
  },
  {
    picture: "/img/stock.jpg",
    oruko: "Promise Olayimika",
    positon: "Embedded Systems Engineer, Nigeria",
    statement:
      "What impressed me most was the practicality of the ESP32 IoT API. The documentation and demo were clear, making it accessible for both professionals, students and hobbyists to build real-world solutions quickly."
  },
  {
    picture: "/img/stock.jpg", 
    oruko: "Favour Adeyemi", 
    positon: "Flutter Developer & Community Manager at Layer5, Nigeria",
    statement:
      "ZTech Labs’ projects demonstrate the power of Flutter for building seamless crossplatform applications, while leveraging Rust for speed and reliability. Their approach truly blends modern frameworks with performance-driven engineering."
  },
];

const Reviews = () =>{

    const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
 
  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])


  return (
    <>
    <TopTitle heading="Reviews" />
    <Carousel plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]} setApi={setApi} className="w-full ">
      <CarouselContent>
        {reviews.map((r, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
          <div
            className={`${current === index && "drop-shadow-md shadow-amber-200"} bg-white rounded-lg shadow-xl p-4 lgl:p-8 flex flex-col justify-center items-center relative gap-4 lgl:gap-8`}
          >
            <div className="w-full flex items-center justify-center">

            <img
              src={r.picture}
              alt=""
              className="w-[200px] h-[200px] border-[2px] border-yellow-500 rounded-full bg-cover bg-center bg-no-repeat"
            />
            </div>
            <div className="w-full flex flex-col justify-between items-center py-6 border-b-2 border-b-gray-900">
              <h3 className="text-xl text-black lgl:text-2xl font-medium tracking-wide">
                {r.oruko}
              </h3>
              <p className="text-base text-gray-400 mt-3 mx-auto ">
                {r.positon}
              </p>
              <div className="text-yellow-500 flex gap-1">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
            </div>
            <p className="text-black">{r.statement}</p>
          </div>
        </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden lg:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>

    <div className="flex gap-2 w-full items-center justify-center pt-10">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={`${current === index + 1 ? "bg-slate-300" : "bg-slate-500" } bg-slate-500 transition-all duration-1000 ease-in-out w-2 h-2 rounded-full`}/>
      ))}
    </div>
    </>
  )
}

export default Reviews
