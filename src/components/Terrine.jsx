import { Link } from "react-router-dom";

export default function Grignotage() {
  const items = ["Assortiment de 12 terrines de 180g"];

  return (
    <section className="terrine">
      <div className="terrine-cover"></div>

      <ul className="terrine_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link to="/nos-selection/jambons">
        <button>Voir la gamme Jambons</button>
      </Link>
    </section>
  );
}
