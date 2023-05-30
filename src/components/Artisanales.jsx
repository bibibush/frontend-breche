import usePrototypes from "../hooks/usePrototypes";

export default function Artisanales() {
  const { artisanales } = usePrototypes();

  return (
    <section className="artisanales-bg">
      <p>Gamme Artisanale</p>
      <div className="artisanales">
        {artisanales.map((artisanale) => {
          const { id, imgurl, title, desc } = artisanale;

          return (
            <a href={`/nosproduits?id=${id}`} key={id}>
              <div className="artisanale" key={id}>
                <div className="desc">
                  <div className="inner">
                    <h3>{desc}</h3>
                  </div>
                </div>
                <img src={imgurl} alt="" />
                <div className="artisanale_desc">
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
