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
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      speed={1500}
      loop={true}
    >
      <SwiperSlide>
        <img src="./images/saucissons photoshop.png" alt="" />
        <div className="swiper-slide_desc">
          <p>Gamme artisanale</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/saucissons photoshop.png" alt="" />
        <div className="swiper-slide_desc">
          <p>Gamme traditionnelle</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/saucissons photoshop.png" alt="" />
        <div className="swiper-slide_desc">
          <p>Gamme saucisson à cuire</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/saucissons photoshop.png" alt="" />
        <div className="swiper-slide_desc">
          <p>Nos spécialités artisanales 200g</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/saucissons photoshop.png" alt="" />
        <div className="swiper-slide_desc">
          <p>Gamme grignotage</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/saucissons photoshop.png" alt="" />
        <div className="swiper-slide_desc">
          <p>Gamme allégée</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
