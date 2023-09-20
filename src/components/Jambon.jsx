import { useState } from "react";

export default function Jambon() {
  const items = [
    "Jambon sec sans os VPF",
    "Jambon sec sans os Supérieur VPF",
    "1/2 Jambon sec sans os Sans Jarret VPF",
    "1/6 Jambon sec sans os Sans Jarret VPF",
    "Jambon sec 10 tranches 250g VPF",
  ];
  const [show_1, setShow_1] = useState(false);
  const [show_2, setShow_2] = useState(false);
  const [show_3, setShow_3] = useState(false);
  const [show_4, setShow_4] = useState(false);
  const [show_5, setShow_5] = useState(false);

  return (
    <section className="jambon">
      <div className="jambon-cover"></div>
      <div className="desc">
        <h1>Gamme Jambon</h1>
        <h2>Desc</h2>
      </div>
      <img src="images/칠판.png" alt="" />
      <ul className="jambon_items">
        {items.map((item, i) => {
          return (
            <li
              onClick={() => {
                if (i === 0) {
                  setShow_1(true);
                }
                if (i === 1) {
                  setShow_2(true);
                }
                if (i === 2) {
                  setShow_3(true);
                }
                if (i === 3) {
                  setShow_4(true);
                }
                if (i === 4) {
                  setShow_5(true);
                }
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <a href="/nosselection/terrine">
        <button>Voir le gamme terrine</button>
      </a>
    </section>
  );
}
