import { Link } from "react-router-dom";
import slate from "../images/Slate.png";

export default function Artisanales() {
  return (
    <section className="artisanale">
      <div className="artisanale-cover"></div>
      <div className="desc">
        <h1>Gamme artisanale</h1>
      </div>
      <img src={slate} alt="Carte menu ardoise" />
      <ul className="artisanale_items">
        <li>Saucisson Artisanal bridé main 400g</li>
        <li>Saucisson Artisanal bridé 600-700g</li>
        <li>Véritable Rosette de Lyon</li>
        <li>Saucisson Artisanal Courbe 300-400g</li>
        <li>Saucisson Artisanal 250g</li>
      </ul>

      <Link className="first_a" to={"/nos-saucissons/allégé"}>
        <button>Voir la gamme allégée</button>
      </Link>
      <Link to="/nos-saucissons/traditionnelle">
        <button>Voir la gamme traditionnelle</button>
      </Link>
    </section>
  );
}
