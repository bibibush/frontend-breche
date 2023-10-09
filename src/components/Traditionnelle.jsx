import { Link } from "react-router-dom";

export default function Traditionnelle() {
  const items = [
    "Saucisson Bridé 400g",
    "Saucisson Bridé 600-700g",
    "Saucisson 650g",
    "Saucisse droite 250g",
    "Mini-rosette 400g",
    "Rosette 1 - 1.2kg",
  ];

  return (
    <section className="traditionnelle">
      <div className="traditionnelle-cover"></div>
      <div className="desc">
        <h1>Gamme traditionnelle</h1>
        <h2>Desc</h2>
      </div>
      <img src="images/Slate.png" alt="Carte menu ardoise" />
      <ul className="traditionnelle_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link to="/nos-saucissons/cuires">
        <button>Voir le gamme saucisson cuire</button>
      </Link>
    </section>
  );
}
