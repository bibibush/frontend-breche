import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Aide() {
  const aideRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTimeout(() => {
        if (window.scrollY >= 200) {
          gsap.to(aideRef.current, {
            y: 0,
            visibility: "visible",
          });
        } else {
          gsap.to(aideRef.current, {
            transform: "translateY(250px)",
          });
        }
      }, 300);
    });

    gsap.to(aideRef.current, {
      duration: 1.5,
      boxShadow: "0 0 2px 8px rgba(255, 192, 203)",
      yoyoEase: "power2.out",
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={aideRef}
      className="aide"
      onClick={() => {
        window.location.href = "/contact";
      }}
    >
      <h3>AIDE ?</h3>
    </div>
  );
}
