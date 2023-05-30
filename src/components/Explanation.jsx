import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Explanation() {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    gsap.to(element.querySelector(".title"), {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element.querySelector(".title-desc"),
        start: "top center",
      },
    });
  }, []);

  return (
    <section ref={ref} className="explanation">
      <img src="./images/3-400 a lancienne.png" alt="" />
      <div className="title-desc">
        <div className="title">TITRE</div>
        <div className="desc">DESCRIPTION</div>
      </div>
    </section>
  );
}
