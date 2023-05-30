import usePrototypes from "../hooks/usePrototypes";
import { useSearchParams } from "react-router-dom";

export default function Nosproduits() {
  const [searchParams] = useSearchParams();
  const { prototypes } = usePrototypes();

  const id = searchParams.get("id");
  const proto = prototypes.find((proto) => proto.id === id);
  const { imgurl, title, desc } = proto;

  return (
    <section className="nos-produits">
      <div className="inner">
        <img src={imgurl} alt="" />
        <div className="desc">
          <div className="desc_title">{title}</div>
          <div className="desc_desc">{desc}</div>
        </div>
      </div>
    </section>
  );
}
