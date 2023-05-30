import usePrototypes from "../hooks/usePrototypes";

export default function Traditionnelle() {
  const { traditionnelles } = usePrototypes();
  return (
    <section className="traditionnelles-bg">
      <p>Gamme Traditionnelle</p>
      <div className="traditionnelles">
        {traditionnelles.map((traditionnelle) => {
          const { id, imgurl, title, desc } = traditionnelle;

          return (
            <a href={`/nosproduits?id=${id}`} key={id}>
              <div className="traditionnelle" key={id}>
                <div className="desc">
                  <div className="inner">
                    <h3>{desc}</h3>
                  </div>
                </div>
                <img src={imgurl} alt="" />
                <div className="traditionnelle_desc">
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
