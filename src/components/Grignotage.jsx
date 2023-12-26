import { Link } from "react-router-dom";
import slate from "../images/Slate.png";

export default function Grignotage() {
  const items = ["Mignonettes"];

  return (
    <section className="grignotage">
      <div className="grignotage-cover"></div>
      <div className="desc">
        <h1>Gamme Grignotage</h1>
      </div>
      <img src={slate} alt="Carte menu ardoise" />
      <ul className="grignotage_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link className="first_a" to="/nos-saucissons/spécialité">
        <button>Voir la gamme spécialité</button>
      </Link>
      <Link to="/nos-saucissons/allégé">
        <button>Voir la gamme allégée</button>
      </Link>
    </section>
  );
}
