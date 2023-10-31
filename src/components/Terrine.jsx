import { Link } from "react-router-dom";
import slate from "../images/Slate.png";

export default function Grignotage() {
  const items = ["Assortiment de 12 terrines de 180g"];

  return (
    <section className="terrine">
      <div className="terrine-cover"></div>
      <div className="desc">
        <h1>Gamme Terrine</h1>
        <h2>Desc</h2>
      </div>
      <img src={slate} alt="Carte menu ardoise" />
      <ul className="terrine_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link to="/nos-selection/jambon">
        <button>Voir le gamme jambon</button>
      </Link>
    </section>
  );
}
