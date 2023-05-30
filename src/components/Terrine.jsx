import { Link } from "react-router-dom";
import usePrototypes from "../hooks/usePrototypes";

export default function Grignotage() {
  const { terrines } = usePrototypes();

  return (
    <section className="terrines-bg">
      <p>Gamme Terrines</p>
      <div className="terrines">
        {terrines.map((terrine) => {
          const { id, imgurl, title, desc } = terrine;

          return (
            <Link to={`/nosproduits?id=${id}`} key={id}>
              <div className="terrine" key={id}>
                <div className="desc">
                  <div className="inner">
                    <h3>{desc}</h3>
                  </div>
                </div>
                <img src={imgurl} alt="" />
                <div className="terrine_desc">
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
