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
      slidesPerView={3}
      spaceBetween={20}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      speed={1500}
      loop={true}
    >
      <SwiperSlide>
        <img
          src="./images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg"
          alt=""
        />
        <div className="swiper-slide_desc">
          <p>Gamme artisanale</p>
          <div className="breche_btn">En savoir plus</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./images/saucisson-sec-reduit-en-matieres-grasses-salaisons-du-velay.jpg"
          alt=""
        />
        <div className="swiper-slide_desc">
          <p>Gamme traditionnelle</p>
          <div className="breche_btn">En savoir plus</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./images/saucisson-sec-parfume-salaisons-du-velay.jpg"
          alt=""
        />
        <div className="swiper-slide_desc">
          <p>Gamme saucisson à cuire</p>
          <div className="breche_btn">En savoir plus</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg"
          alt=""
        />
        <div className="swiper-slide_desc">
          <p>Nos spécialités artisanales 200g</p>
          <div className="breche_btn">En savoir plus</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./images/saucisson-sec-reduit-en-matieres-grasses-salaisons-du-velay.jpg"
          alt=""
        />
        <div className="swiper-slide_desc">
          <p>Gamme grignotage</p>
          <div className="breche_btn">En savoir plus</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./images/saucisson-sec-parfume-salaisons-du-velay.jpg"
          alt=""
        />
        <div className="swiper-slide_desc">
          <p>Gamme allégée</p>
          <div className="breche_btn">En savoir plus</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
