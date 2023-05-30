import { Link } from "react-router-dom";
import usePrototypes from "../hooks/usePrototypes";

export default function Jambon() {
  const { jambons } = usePrototypes();
  return (
    <section className="jambons-bg">
      <p>Gamme Jambons</p>
      <div className="jambons">
        {jambons.map((jambon) => {
          const { id, imgurl, title, desc } = jambon;

          return (
            <Link to={`/nosproduits?id=${id}`} key={id}>
              <div className="jambon" key={id}>
                <div className="desc">
                  <div className="inner">
                    <h3>{desc}</h3>
                  </div>
                </div>
                <img src={imgurl} alt="" />
                <div className="jambon_desc">
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
