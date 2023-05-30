import { Link } from "react-router-dom";
import usePrototypes from "../hooks/usePrototypes";

export default function Specialite() {
  const { specialites } = usePrototypes();
  return (
    <section className="specialites-bg">
      <p>Nos spécialités artisanale 200g</p>
      <div className="specialites">
        {specialites.map((specialite) => {
          const { id, imgurl, title, desc } = specialite;

          return (
            <Link to={`/nosproduits?id=${id}`} key={id}>
              <div className="specialite" key={id}>
                <div className="desc">
                  <div className="inner">
                    <h3>{desc}</h3>
                  </div>
                </div>
                <img src={imgurl} alt="" />
                <div className="specialite_desc">
                  <div className="title">{title}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
