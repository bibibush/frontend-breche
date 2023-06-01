import { gsap } from "gsap";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { ScrollToPlugin } from "gsap/all";
import Lyonnais from "./Lyonnais";
gsap.registerPlugin(ScrollToPlugin);

export default function Histoire() {
  const ref = useRef();
  const [fixed, setFixed] = useState(false);
  const [histoire, setHistoire] = useState(false);
  const [monts, setMonts] = useState(false);
  const [system, setSystem] = useState(false);
  const [plan, setPlan] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 281) {
        gsap.to(ref.current, {
          position: "fixed",
          top: "99px",
          duration: 0,
          zIndex: 1,
        });

        setFixed(true);
        setHistoire(true);
        setMonts(false);
        if (window.scrollY >= 875) {
          setHistoire(false);
          setMonts(true);
          setSystem(false);
          if (window.scrollY >= 1600) {
            setMonts(false);
            setSystem(true);
            setPlan(false);
            if (window.scrollY >= 2300) {
              setMonts(false);
              setSystem(false);
              setPlan(true);
            }
          }
        }
      } else {
        setFixed(false);
        gsap.to(ref.current, {
          position: "absolute",
          top: "280px",
          duration: 0,
        });
      }
    });
  }, []);

  return (
    <section className="histoire">
      <div className="histoire-desc">
        <div className="histoire-desc-cover"></div>
        <h1>Notre histoire</h1>
      </div>
      <div ref={ref} className={fixed ? "years fixed" : "years"}>
        <ul>
          <li
            onClick={() => {
              gsap.to(window, {
                scrollTo: 282,
                duration: 0,
              });
            }}
            className={histoire ? "no-histoire" : null}
          >
            Notre histoire
          </li>
          <li
            onClick={() => {
              gsap.to(window, {
                scrollTo: 876,
                duration: 0,
              });
            }}
            className={monts ? "monts" : null}
          >
            Monts du Lyonnais
          </li>
          <li
            onClick={() => {
              gsap.to(window, {
                scrollTo: 1601,
                duration: 0,
              });
            }}
            className={system ? "no-system" : null}
          >
            Notre System
          </li>
          <li
            onClick={() => {
              gsap.to(window, {
                scrollTo: 2301,
                duration: 0,
              });
            }}
            className={plan ? "no-plan" : null}
          >
            Plan pour Future
          </li>
        </ul>
      </div>
      <Lyonnais />
      <div className="histoire-content notre_system"></div>
      <div className="histoire-content notre_plan"></div>
    </section>
  );
}
