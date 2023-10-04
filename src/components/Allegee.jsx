import { Link } from "react-router-dom";

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
        <h1>Gamme de saucisson allégé</h1>
        <h2>Desc</h2>
      </div>
      <img src="images/Slate.png" alt="" />
      <ul className="allegees_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link to="/nossaucissons/artisanale">
        <button>Voir le gamme artisanale</button>
      </Link>
    </section>
  );
}
