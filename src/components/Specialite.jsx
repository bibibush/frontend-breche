import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Specialite() {
  const items = [
    "Saucisson pur porc",
    "Saucisson aux noisettes",
    "Saucisson aux cèpes",
    "Saucisson au beaufort",
    "Saucisson au Porc et Sanglier",
    "Saucisson aux noix",
    "Saucisson au fromage de chèvre",
    "Saucisson au roquefort",
    "Saucisson aux figues",
    "Saucisson pimenté",
    "Saucisson au Porc et Cerf",
    "Saucisson au Porc et Taureau",
    "Saucisson aux olives",
    "Sauci'flette",
    "Saucisson aux myrtilles",
    "Saucisson au génépi",
    "Saucisson herbes intérieures",
    "Saucisson au fenouil",
    "Saucisson à l'ail des ours",
    "Saucisson à l'ail",
    "Saucisson fumé",
    "Saucisson cendré",
    "Saucisson enrobé aux Saveurs Provençales",
    "Saucisson enrobé aux herbes de Provence",
    "Saucisson enrobé au poivre noir",
    "Saucisson enrobé au piment fort concassé",
  ];

  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  let totalPage = Math.ceil(items.length / limit);

  let results = items.slice(offset, offset + limit);

  return (
    <section className="specialite">
      <div className="specialite-cover"></div>
      <div className="desc">
        <h1>Gamme spécialité</h1>
        <h2>Desc</h2>
      </div>
      <img src="images/칠판.png" alt="" />
      <ul className="specialite_items">
        {results.map((result) => {
          return <li>{result}</li>;
        })}
      </ul>
      <ReactPaginate
        className="pagination"
        pageCount={totalPage}
        previousLabel={
          <span class="material-symbols-outlined">arrow_back_ios</span>
        }
        nextLabel={
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        }
        onPageChange={(event) => {
          setPage(event.selected + 1);
        }}
      />
    </section>
  );
}
