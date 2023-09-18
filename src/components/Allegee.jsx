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
      <img src="images/칠판.png" alt="" />
      <ul className="allegees_items">
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <button>
        <a href="/nossaucissons/artisanale">Voir le prochaine gamme</a>
      </button>
    </section>
  );
}
