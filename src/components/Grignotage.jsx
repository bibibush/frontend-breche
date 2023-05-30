import usePrototypes from "../hooks/usePrototypes";

export default function Grignotage() {
  const { grignotages } = usePrototypes();

  return (
    <section className="grignotages-bg">
      <p>Gamme Grignotage</p>
      <div className="grignotages">
        {grignotages.map((grignotage) => {
          const { id, imgurl, title, desc } = grignotage;

          return (
            <a href={`/nosproduits?id=${id}`} key={id}>
              <div className="grignotage" key={id}>
                <div className="desc">
                  <div className="inner">
                    <h3>{desc}</h3>
                  </div>
                </div>
                <img src={imgurl} alt="" />
                <div className="grignotage_desc">
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
