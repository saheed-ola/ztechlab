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
import Reviews from "./Reviews.jsx";

const Products = () => {
    return (
        <section className='w-full md:w-[90%] h-fit mx-auto text-black border-b-[1px] pt-6 xs:pt-8 sm:pt-10 pb-10 md:pb-20 border-b-black' id='products'>
            <TopTitle 
                heading="Product"
            />
           
            <div className="flex flex-col justify-center items-center gap-4 sml:gap-5 mt-4 sm:mt-5 mb-[150px] sml:mb-[200px] md:mb-[250px]">
                <div className="w-full xs:w-[90%] sml:w-[80%] md:w-[60%] p-4 xs:p-6 sm:p-8 md:p-10 rounded-xl sml:rounded-2xl md:rounded-3xl shadow-lg sml:shadow-xl md:shadow-2xl border-[1px] sml:border-[2px] text-black bg-[#c0c0c0]" data-aos="fade-up">
                    <div className="relative w-full mx-auto">
                        <div className="text-lg xs:text-xl sm:text-2xl leading-normal mb-3 sm:mb-4 text-blue-700 flex justify-center">IoT Devices and Solutions:</div>
                        <div className="border-b-4 border-yellow-500 w-[60px] xs:w-[70px] sm:w-[80px] absolute -bottom-1 right-1/2 translate-x-1/2"></div>
                    </div>
                    <div className='grid sml:grid-cols-2 gap-x-6 md:gap-x-12 place-items-center'>
                        <article className="mt-4 sm:mt-6">
                            <ul className="leading-[1.8] text-base xs:text-lg sm:text-lg list-disc marker:text-yellow-500 ps-4 text-black-950 space-y-2 sm:space-y-3">
                                <li>Show a portfolio of the IoT devices and software platforms ZTech Labs has developed, designed to solve challenges in industries like agriculture, healthcare, and manufacturing.</li>
                                <li>Include case studies or success stories on how these products have transformed businesses or communities.</li>
                            </ul>
                        </article>
                    </div>
                    
                    <br className="hidden sml:block"/>
                    
                    <div className="w-full shadow-lg sml:shadow-xl md:shadow-2xl text-black p-4 xs:p-6 sm:p-8 md:p-10 rounded-xl sml:rounded-2xl md:rounded-3xl border-[1px] sml:border-[2px] bg-[#9b9b9b] mt-6 sm:mt-8">
                        <div className="relative mx-auto flex items-center justify-center">
                            <div className="text-lg xs:text-xl sm:text-2xl leading-normal mb-3 sm:mb-4 text-blue-700">Consulting & Custom Solutions:</div>
                            <div className="border-b-4 border-yellow-500 w-[60px] xs:w-[70px] sm:w-[80px] absolute bottom-1"></div>
                        </div>
                        <div className='grid sml:grid-cols-2 gap-x-6 md:gap-x-12 place-items-center'>
                            <div className="mt-4 sm:mt-6">
                                <ul className="leading-[1.8] text-base xs:text-lg sm:text-lg list-disc marker:text-yellow-500 ps-4 text-black-950 space-y-2 sm:space-y-3">
                                    <li>Provide consulting and implementation services to businesses looking to adopt IoT solutions, from concept to deployment.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Reviews />
        </section>
    )
};

export default Products;