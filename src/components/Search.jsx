import { useState } from "react";
import usePrototypes from "../hooks/usePrototypes";

export default function Search() {
  const { prototypes } = usePrototypes();
  const [value, setValue] = useState("");

  const change = (event) => {
    setValue(event.target.value.toLowerCase());
  };
  const searched = prototypes.filter((prototype) => {
    const { title, category } = prototype;
    return (
      title.toLowerCase().includes(value) ||
      category.toLowerCase().includes(value)
    );
  });
  return (
    <section className="searched">
      <div className="keyword">
        <p>Cherchez avec un mot de clé</p>
        <input value={value} onChange={change} type="text" />
      </div>

      <div className="searchs">
        {searched.map((search) => {
          const { id, imgurl, title, desc } = search;
          return (
            <a href={`/nosproduits?id=${id}`} key={id}>
              <div className="keyword-search" key={id}>
                <div className="desc">
                  <div className="inner">
                    <h3>{desc}</h3>
                  </div>
                </div>
                <img src={imgurl} alt="" />
                <div className="keyword_desc">
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
