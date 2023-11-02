import { Link } from "react-router-dom";
import slate from "../images/Slate.png";

export default function Cuire() {
  const items = [
    "Saucisson à cuire des Monts du Lyonnais",
    "Saucisson à cuire des Monts du Lyonnais à la Pistache",
    "Saucisson à cuire des Monts du Lyonnais à la Truffe Française",
    "Sabodet à cuire des Monts du Lyonnais",
  ];

  return (
    <section className="cuires">
      <div className="cuires-cover"></div>
      <div className="desc">
        <h1>Gamme de saucisson à cuire</h1>
      </div>
      <img src={slate} alt="Carte menu ardoise" />
      <ul className="cuires_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link to="/nos-saucissons/spécialité">
        <button>Voir le gamme spécialité</button>
      </Link>
    </section>
  );
}
