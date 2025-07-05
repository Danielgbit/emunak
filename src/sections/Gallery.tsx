"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Gallery = () => {
  const images = [
    {
      alt: "image-1",
      src: 'https://images.unsplash.com/photo-1612293905607-b003de9e54fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      alt: "image-2",
      src: 'https://images.unsplash.com/photo-1585641689080-2e530457803b?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      alt: "image-3",
      src: 'https://images.unsplash.com/photo-1703254573169-5a424be2d8cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      alt: "image-4",
      src: 'https://images.unsplash.com/photo-1608263153703-caa6b0fd7bc7?q=80&w=701&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  return (
 <div className="my-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide text-light">
        Galería
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Image
              width={400}
              height={300}
              alt={img.alt}
              src={img.src}
              className="object-cover w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
