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
          <img src="images/promo_arti.png" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/nossaucissons/traditionnelle">
          <img src="images/promo_tra.png" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/nossaucissons/cuires">
          <img src="images/promo_cuire.png" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/nossaucissons/specialite">
          <img src="images/promo_spe.png" alt="" />
        </a>
      </SwiperSlide>
    </Swiper>
  );
}
