export default function Cuire() {
  const items = [
    "Saucisson à cuire des Monts du Lyonnais",
    "Saucisson à cuire des Monts du Lyonnais à la Pistache",
    "Saucisson à cuire des Monts du Lyonnais à la Truffe Française",
    "Sabodet à cuire des Monts du Lyonnais",
  ];

  return (
    <section className="cuires">
      <div className="cuires-cover"></div>
      <div className="desc">
        <h1>Gamme de saucisson à cuire</h1>
        <h2>Desc</h2>
      </div>
      <img src="images/칠판.png" alt="" />
      <ul className="cuires_items">
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <a href="/nossaucissons/specialite">
        <button>Voir le gamme spécialité</button>
      </a>
    </section>
  );
}
