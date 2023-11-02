import { Link } from "react-router-dom";
import slate from "../images/Slate.png";

export default function Jambon() {
  const items = [
    "Jambon sec sans os VPF",
    "Jambon sec sans os Supérieur VPF",
    "1/2 Jambon sec sans os Sans Jarret VPF",
    "1/6 Jambon sec sans os Sans Jarret VPF",
    "Jambon sec 10 tranches 250g VPF",
  ];

  return (
    <section className="jambon">
      <div className="jambon-cover"></div>
      <div className="desc">
        <h1>Gamme Jambon</h1>
      </div>
      <img src={slate} alt="Carte menu ardoise" />
      <ul className="jambon_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link to="/nos-selection/terrine">
        <button>Voir le gamme terrine</button>
      </Link>
    </section>
  );
}
