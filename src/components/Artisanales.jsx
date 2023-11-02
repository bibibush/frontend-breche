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
        <li>Saucisson Artisanal 250g</li>
        <li>Saucisson Artisanal bridé main 400g</li>
        <li>Saucisson Artisanal Courbe 300-400g</li>
        <li>Saucisson Artisanal bridé 600-700g</li>
      </ul>

      <Link to="/nos-saucissons/traditionnelle">
        <button>Voir le gamme traditionnelle</button>
      </Link>
    </section>
  );
}
