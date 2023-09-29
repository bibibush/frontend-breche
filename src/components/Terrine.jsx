import { Link } from "react-router-dom";

export default function Grignotage() {
  const items = ["Assortiment de 12 terrines de 180g"];

  return (
    <section className="terrine">
      <div className="terrine-cover"></div>
      <div className="desc">
        <h1>Gamme Terrine</h1>
        <h2>Desc</h2>
      </div>
      <img src="images/칠판.png" alt="" />
      <ul className="terrine_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link to="/nosselection/jambon">
        <button>Voir le gamme jambon</button>
      </Link>
    </section>
  );
}
