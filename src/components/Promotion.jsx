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
        <a href="/nossaucissons/artisanale">
          <img src="images/hg 300-400.JPG" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/nossaucissons/traditionnelle">
          <img src="images/7-800 nature.JPG" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/nossaucissons/cuires">
          <img src="images/650.JPG" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/nossaucissons/specialite">
          <img src="images/bn200.JPG" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/nossaucissons/grignotage">
          <img src="images/minionnette.JPG" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/nossaucissons/allegee">
          <img src="images/filet mignon.JPG" alt="" />
        </a>
      </SwiperSlide>
    </Swiper>
  );
}
