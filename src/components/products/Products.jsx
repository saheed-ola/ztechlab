// import TopTitle from "../TopTitle.jsx";
// import Reviews from "./Reviews.jsx";

// const Products = () => {
//     return (
//         <section className='w-[90%] h-fit mx-auto text-black border-b-[1px] pt-10 pb-20 border-b-black' id='products'>
//             <TopTitle
//             heading= "Product"
//             />

//             <div  className="flex flex-col justify-center items-center gap-5 mt-5 mb-[250px]" >
//             <div className="w-[60%] p-10 rounded-3xl shadow-2xl  border-[2px] text-black bg-[#c0c0c0]" data-aos="fade-up">
//                 <div className="relative w-full mx-auto">
//                     <div variant="2" className="text-2xl leading-normal mb-4 text-blue-700 flex justify-center">IoT Devices and Solutions:</div>
//                     <div className="border-b-4 border-yellow-500 absolute w-[80px] -bottom-1 right-80"></div>
//                 </div>
//                 <div className='grid-cols-2 gap-x-12 place-items-center'>
//                     <article className=" ">
//                         <ul className="leading-[2] text-lg list-disc marker:text-yellow-500 ps-4 text-black-950">
//                             <li>Show a portfolio of the IoT devices and software platforms ZTech Labs has developed, designed to solve challenges in industries like agriculture, healthcare, and manufacturing.</li>
//                         </ul>
//                         <ul className="leading-[2] text-lg list-disc marker:text-yellow-500 ps-4 text-black-950">
//                             <li>Include case studies or success stories on how these products have transformed businesses or communities.</li>
//                         </ul>
//                     </article>
//                 </div>
//                 <br />
//                 <div className="w-full shadow-2xl text-black p-10 rounded-3xl border-[2px] bg-[#9b9b9b]">
//                 <div className="relative mx-auto flex items-center justify-center">
//                     <div variant="2" className="text-2xl leading-normal mb-4 text-blue-700">Consulting & Custom Solutions:</div>
//                     <div className="  border-b-4 border-yellow-500 absolute w-[80px] bottom-1 "></div>
//                 </div>
//                 <div className='grid-cols-2 gap-x-12 place-items-center tabletS:grid-cols-1'>
//                     <div className=" tabletM:order-last">

//                         <ul className="leading-[2] text-lg list-disc marker:text-yellow-500 ps-4 text-black-950 text-white">
//                             <li>Provide consulting and implementation services to businesses looking to adopt IoT solutions, from concept to deployment.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             </div>
//             </div>
//             <Reviews />

//         </section >
//     )
// };

// export default Products

import TopTitle from "../TopTitle.jsx";
import ProductCard from "./ProductCard.jsx";
import { IOT } from "../../assets/index.js";
import Reviews from "./Reviews.jsx";

const Products = () => {
  return (
    <section
      className="w-full md:w-[90%] h-fit mx-auto text-black border-b-[1px] pt-6 xs:pt-8 sm:pt-10 pb-10 md:pb-20 border-b-black"
      id="products"
    >
      <TopTitle heading="Product" />

         <ProductCard
              title="   Embedded switch Mobile Application"
              link="internet-of-things"
              des="We provide end-to-end IoT solutions, by building a custom embedded system that connects all home switches and devices into one cohesive network mobile application."
          >  <div className="w-full h-[160px] xs:h-[180px] sml:h-[200px] md:h-[220px] overflow-hidden rounded-lg flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/4_8pcbtutGA"
                title="IoT Solution Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
            </ProductCard>
       
      </div>
      <Reviews />
    </section>
  );
};

export default Products;
