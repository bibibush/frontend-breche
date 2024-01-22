import { Link } from "react-router-dom";
import slate from "../images/Slate.png";

export default function Jambon() {
  const items = [
    "1/6 Jambon sec sans os Sans Jarret VPF",
    "1/2 Jambon sec sans os Sans Jarret VPF",
    "Jambon sec 10 tranches 250g VPF",
    "Jambon cru avec os VPF",
    "Jambon sec sans os VPF",
    "Jambon sec sans os Supérieur VPF",
  ];

  return (
    <section className="jambon">
      <div className="jambon-cover"></div>
      <div className="desc">
        <h1>Gamme Jambons</h1>
      </div>
      <img src={slate} alt="Carte menu ardoise" />
      <ul className="jambon_items">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Link to="/nos-selection/terrines">
        <button>Voir la gamme Terrines</button>
      </Link>
    </section>
  );
}
