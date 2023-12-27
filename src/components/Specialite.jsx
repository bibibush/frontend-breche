import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import slate from "../images/Slate.png";

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
  const limit = 4;
  const offset = (page - 1) * limit;
  let totalPage = Math.ceil(items.length / limit);

  let results = items.slice(offset, offset + limit);

  return (
    <section className="specialite">
      <div className="specialite-cover"></div>
      <div className="desc">
        <h1>Gamme Spécialités 200g</h1>
      </div>
      <img src={slate} alt="Carte menu ardoise" />
      <ul className="specialite_items">
        {results.map((result, i) => {
          return <li key={i}>{result}</li>;
        })}
      </ul>
      <Link className="first_a" to="/nos-saucissons/cuires">
        <button>Voir la gamme Saucissons à Cuire</button>
      </Link>
      <Link className="last_a" to="/nos-saucissons/grignotage">
        <button>Voir la gamme Grignotage</button>
      </Link>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPage}
        previousLabel={
          <span className="material-symbols-outlined">arrow_back_ios</span>
        }
        nextLabel={
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        }
        onPageChange={(event) => {
          setPage(event.selected + 1);
        }}
      />
    </section>
  );
}
