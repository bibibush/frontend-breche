import gif from "../images/output-onlinegiftools.gif";

export default function NosSaucissonsDesc() {
  return (
    <section className="nossaucissons-desc">
      <div className="desc-cover"></div>
      <a href="/nos-saucissons">
        <button className="discover-saucissons">
          Découvrir nos Saucissons
        </button>
      </a>
      <img src={gif} alt="point" />
    </section>
  );
}
