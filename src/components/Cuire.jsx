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
        <h1>Gamme Saucissons à Cuire</h1>
      </div>
      <img src={slate} alt="Carte menu ardoise" />
      <ul className="cuires_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link className="first_a" to="/nos-saucissons/traditionnelle">
        <button>Voir la gamme Traditionnelle</button>
      </Link>
      <Link to="/nos-saucissons/spécialité">
        <button>Voir la gamme Spécialités</button>
      </Link>
    </section>
  );
}
