import { Link } from "react-router-dom";

export default function Grignotage() {
  const items = ["Mignonettes"];

  return (
    <section className="grignotage">
      <div className="grignotage-cover"></div>
      <div className="desc">
        <h1>Gamme Grignotage</h1>
        <h2>Desc</h2>
      </div>
      <img src="images/Slate.png" alt="" />
      <ul className="grignotage_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link to="/nossaucissons/allegee">
        <button>Voir le gamme allégé</button>
      </Link>
    </section>
  );
}
