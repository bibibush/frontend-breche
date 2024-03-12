import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import logoTransparent from "../images/logo-Salaisons-de-la-Breche- Fond transparent.png";
import logoArtisan from "../images/logo artisan.png";

export default function Present() {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;

    gsap.to(element.querySelector(".logo-div"), {
      opacity: 1,
      duration: 2,
      delay: 0.5,
      x: 0,
    });
  }, []);

  return (
    <section ref={ref} className="present">
      <div className="present-cover"></div>
      <img
        src={logoTransparent}
        alt="Logo salaisons de la brèche"
        className="present-logo"
      />
      <div className="present-desc">
        <p>Fabrication Artisanale de Saucissons</p>
        Depuis 3 générations
      </div>
      <div className="logo-div">
        <img src={logoArtisan} alt="Logo artisan" className="logo-artisan" />
      </div>
    </section>
  );
}
