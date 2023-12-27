import { Link } from "react-router-dom";
import slate from "../images/Slate.png";

export default function Allegee() {
  const items = [
    "Saucisson Allégé en Gras 700g",
    "Demi Saucisson Allégé en Gras",
    "Filet mignon séché",
  ];
  return (
    <section className="allegees">
      <div className="allegees-cover"></div>
      <div className="desc">
        <h1>Gamme Allégée</h1>
      </div>
      <img src={slate} alt="Carte menu ardoise" />
      <ul className="allegees_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link className="first_a" to="/nos-saucissons/grignotage">
        <button>Voir la gamme Grignotage</button>
      </Link>
      <Link to="/nos-saucissons/artisanale">
        <button>Voir la gamme Artisanale</button>
      </Link>
    </section>
  );
}
