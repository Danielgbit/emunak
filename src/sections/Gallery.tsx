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
      src: "https://images.unsplash.com/photo-1749253894957-e95b399aa381?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "image-2",
      src: "https://images.unsplash.com/photo-1749253894957-e95b399aa381?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "image-3",
      src: "https://images.unsplash.com/photo-1749253894957-e95b399aa381?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "image-4",
      src: "https://images.unsplash.com/photo-1749253894957-e95b399aa381?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
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
        <SwiperSlide key={index}>
          <Image
            width={500}
            height={500}
            alt={img.alt}
            src={img.src}
            className="object-cover w-[400px] h-[300px] rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;
