import { Link } from "react-router-dom";
import usePrototypes from "../hooks/usePrototypes";

export default function Cuire() {
  const { cuires } = usePrototypes();
  return (
    <section className="cuires-bg">
      <p>Gamme Saucisson à cuire</p>
      <div className="cuires">
        {cuires.map((cuire) => {
          const { id, imgurl, title, desc } = cuire;

          return (
            <Link to={`/nosproduits?id=${id}`} key={id}>
              <div className="cuire" key={id}>
                <div className="desc">
                  <div className="inner">
                    <h3>{desc}</h3>
                  </div>
                </div>
                <img src={imgurl} alt="" />
                <div className="cuire_desc">
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
