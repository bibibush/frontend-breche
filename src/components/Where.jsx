import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Where() {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector("img"),
      {
        opacity: 0,
        y: 250,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector("img"),
          start: "top bottom",
          end: "+=20",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".france-carte"),
      {
        opacity: 0,
        display: "none",
        x: 250,
      },
      {
        opacity: 1,
        x: 0,
        display: "block",
        scrollTrigger: {
          trigger: element.querySelector(".titre-desc .title"),
          start: "top 173",
          end: "+=20",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className="histoire-content mont_du_lyonnais">
      <div className="titre-desc">
        <div className="title">TITRE</div>
        <div className="desc">Altitude Desc</div>
        <img src="./images/polaroid.png" alt="" />
      </div>
      <div className="france-carte"></div>
    </div>
  );
}
