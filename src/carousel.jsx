import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper';
// import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="rounded-lg shadow-lg"
      >
        {[1, 2, 3, 4].map((num) => (
          <SwiperSlide key={num} className="bg-blue-500 text-white p-16 flex items-center justify-center text-xl">
            Slide {num}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
