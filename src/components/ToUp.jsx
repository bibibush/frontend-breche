import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);

export default function ToUp() {
  const upRef = useRef();
  const click = () => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 0,
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 281) {
        gsap.to(upRef.current, {
          height: "66px",
          y: 0,
          duration: 0.2,
        });
      } else {
        gsap.to(upRef.current, {
          height: 0,
          y: 66,
          duration: 0.2,
        });
      }
    });
  }, []);

  return (
    <div
      onClick={click}
      ref={upRef}
      className="to_up material-symbols-outlined"
    >
      arrow_upward
    </div>
  );
}
