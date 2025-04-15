import TopTitle from "../TopTitle.jsx";
import Reviews from "./Reviews.jsx";

const Products = () => {
    return (
        <section className='w-[90%] h-fit mx-auto text-black border-b-[1px] pt-10 pb-20 border-b-black' id='products'>
            <TopTitle 
            heading= "Product"
            />
           
            <div  className="flex flex-col justify-center items-center gap-5 mt-5 mb-[250px]">
            <div className="w-[60%] p-10 rounded-3xl shadow-2xl bg-slate-100 border-[2px] text-black">
                <div className="relative w-full mx-auto">
                    <div variant="2" className="text-2xl leading-normal mb-4 text-blue-700 flex justify-center">IoT Devices and Solutions:</div>
                    <div className="border-b-4 border-yellow-500 absolute w-[80px] -bottom-1 right-80"></div>
                </div>
                <div className='grid-cols-2 gap-x-12 place-items-center'>
                    <article className=" ">
                        <ul className="leading-[2] text-lg list-disc marker:text-yellow-500 ps-4 text-black-950">
                            <li>Show a portfolio of the IoT devices and software platforms ZTech Labs has developed, designed to solve challenges in industries like agriculture, healthcare, and manufacturing.</li>
                        </ul>
                        <ul className="leading-[2] text-lg list-disc marker:text-yellow-500 ps-4 text-black-950">
                            <li>Include case studies or success stories on how these products have transformed businesses or communities.</li>
                        </ul>
                    </article>
                </div>
                <br />
                <div className="w-full shadow-2xl text-black p-10 rounded-3xl border-[2px]">
                <div className="relative mx-auto flex items-center justify-center">
                    <div variant="2" className="text-2xl leading-normal mb-4 text-blue-700">Consulting & Custom Solutions:</div>
                    <div className="  border-b-4 border-yellow-500 absolute w-[80px] bottom-1 "></div>
                </div>
                <div className='grid-cols-2 gap-x-12 place-items-center tabletS:grid-cols-1'>
                    <div className=" tabletM:order-last">

                        <ul className="leading-[2] text-lg list-disc marker:text-yellow-500 ps-4 text-black-950">
                            <li>Provide consulting and implementation services to businesses looking to adopt IoT solutions, from concept to deployment.</li>
                        </ul>
                    </div>
                </div>
            </div>

            </div>
            </div>
            <Reviews />

        </section >
    )
};

export default Products