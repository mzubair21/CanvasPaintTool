import React, { useMemo, useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Navigation, Pagination } from "swiper/modules"

import hutImg from "../../assets/hut.png"
import IconArrow from "../../../../assets/Icons/IconArrow"

export default function ObjectsSlider() {
  const slides = useMemo(() => {
    return [
      {
        id: 1,
        roof: "Roof 1",
        facade: "Facades 1",
        image: hutImg,
        name: "Hut 1",
      },
      {
        id: 2,
        roof: "Roof 2",
        facade: "Facades 2",
        image: hutImg,
        name: "Hut 2",
      },
      {
        id: 3,
        roof: "Roof 3",
        facade: "Facades 3",
        image: hutImg,
        name: "Hut 3",
      },
      {
        id: 4,
        roof: "Roof 4",
        facade: "Facades 4",
        image: hutImg,
        name: "Hut 4",
      },
      {
        id: 5,
        roof: "Roof 5",
        facade: "Facades 5",
        image: hutImg,
        name: "Hut 5",
      },
      {
        id: 6,
        roof: "Roof 6",
        facade: "Facades 6",
        image: hutImg,
        name: "Hut 6",
      },
      {
        id: 7,
        roof: "Roof 7",
        facade: "Facades 7",
        image: hutImg,
        name: "Hut 7",
      },
      {
        id: 8,
        roof: "Roof 8",
        facade: "Facades 8",
        image: hutImg,
        name: "Hut 8",
      },
      {
        id: 9,
        roof: "Roof 9",
        facade: "Facades 9",
        image: hutImg,
        name: "Hut 9",
      },
      {
        id: 10,
        roof: "Roof 10",
        facade: "Facades 10",
        image: hutImg,
        name: "Hut 10",
      },
    ]
  }, [])
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={4}
        className="myObjectSwiper mx-5"
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-object-next",
          prevEl: ".swiper-object-prev",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} onClick={() => setActiveSlide(index)}>
            <div
              className={`bg-dark rounded-lg ${
                activeSlide == index ? "border border-secondary" : ""
              } `}
              style={{
                width: "40px",
                height: "35px",
              }}
            >
              <img
                className="pointer-events-none"
                src={slide.image}
                alt={slide.name}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* // Arraows */}
      </Swiper>
    </>
  )
}
