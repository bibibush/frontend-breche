import { Link } from "react-router-dom";
import slate from "../images/Slate.png";

export default function Traditionnelle() {
  const items = [
    "Saucisson Bridé 400g",
    "Saucisson Bridé 600-700g",
    "Saucisson 650g",
    "Saucisse droite 250g",
    "Mini-rosette 400g",
    "Rosette 1 - 1.2kg",
  ];

  return (
    <section className="traditionnelle">
      <div className="traditionnelle-cover"></div>
      <div className="desc">
        <h1>Gamme traditionnelle</h1>
      </div>
      <img src={slate} alt="Carte menu ardoise" />
      <ul className="traditionnelle_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link to="/nos-saucissons/cuires">
        <button>Voir le gamme saucisson cuire</button>
      </Link>
    </section>
  );
}
