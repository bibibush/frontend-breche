import usePrototypes from "../hooks/usePrototypes";

export default function Allegee() {
  const { allegees } = usePrototypes();
  return (
    <section className="allegees-bg">
      <p>Gamme Allégée</p>
      <div className="allegees">
        {allegees.map((allegee) => {
          const { id, imgurl, title, desc } = allegee;

          return (
            <a href={`/nosproduits?id=${id}`} key={id}>
              <div className="allegee" key={id}>
                <div className="desc">
                  <div className="inner">
                    <h3>{desc}</h3>
                  </div>
                </div>
                <img src={imgurl} alt="Filet mignon séché" />
                <div className="allegee_desc">
                  <div className="title">{title}</div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
