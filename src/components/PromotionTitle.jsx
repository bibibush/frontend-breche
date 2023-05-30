import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PromotionTitle() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef();
  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector(".promotion-title_bar"),
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          end: "+=50",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="promotion-promotion" ref={ref}>
      <div className="promotion-title">
        <p>Nos gammes de saucissons</p>
        <div className="promotion-title_bar"></div>
      </div>
    </div>
  );
}
