import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Lyonnais() {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    const leftEls = element.querySelectorAll(".to-left");

    leftEls.forEach((leftEl, index) => {
      gsap.to(leftEl, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: index * 0.4,
        scrollTrigger: {
          trigger: element.querySelector(".lyonnais-title"),
          start: "top center",
        },
      });
    });

    gsap.to(element.querySelector(".to-right"), {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element.querySelector(".lyonnais-title"),
        start: "top center",
      },
    });
  }, []);

  return (
    <section ref={ref} className="lyonnais">
      <img
        src="./images/Visuel Saucisson Spécialités 200g au Porc et Sanglier, avec étiquette LOGO.jpeg"
        alt=""
        className="to-right"
      />
      <div className="lyonnais-title to-left">
        <p>Altitude de Monts du Lyonnais</p>
      </div>
      <div className="lyonnais-desc to-left">
        <p className="saveur">Saveur du terroir</p>
        <p>DESCRIPTION</p>
      </div>
    </section>
  );
}
