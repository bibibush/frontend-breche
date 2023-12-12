import { Link } from "react-router-dom";
import slate from "../images/Slate.png";

export default function Cuire() {
  const items = [
    "Saucisson à Cuire Nature 400g",
    "Saucisson à Cuire à la\n Pistache 400g",
    "Saucisson à Cuire à la\n Truffe Noire Française 400g",
    "Sabodet à Cuire 600g",
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
