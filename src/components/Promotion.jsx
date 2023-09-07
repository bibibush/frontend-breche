import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function Promotion() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={3000}
      loop={true}
    >
      <SwiperSlide>
        <img src="images/bn200.JPG" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/hg 300-400.JPG" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/7-800 Arti.JPG" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/650.JPG" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/coubre.JPG" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/250 nature.JPG" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
