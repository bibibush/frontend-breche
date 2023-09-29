import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

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
  const [show_1, setShow_1] = useState(false);
  const [show_2, setShow_2] = useState(false);
  const [show_3, setShow_3] = useState(false);
  const [show_4, setShow_4] = useState(false);
  const [show_5, setShow_5] = useState(false);
  const [show_6, setShow_6] = useState(false);
  const [show_7, setShow_7] = useState(false);
  const [show_8, setShow_8] = useState(false);
  const [show_9, setShow_9] = useState(false);
  const [show_10, setShow_10] = useState(false);
  const [show_11, setShow_11] = useState(false);
  const [show_12, setShow_12] = useState(false);
  const [show_13, setShow_13] = useState(false);
  const [show_14, setShow_14] = useState(false);
  const [show_15, setShow_15] = useState(false);
  const [show_16, setShow_16] = useState(false);
  const [show_17, setShow_17] = useState(false);
  const [show_18, setShow_18] = useState(false);
  const [show_19, setShow_19] = useState(false);
  const [show_20, setShow_20] = useState(false);
  const [show_21, setShow_21] = useState(false);
  const [show_22, setShow_22] = useState(false);
  const [show_23, setShow_23] = useState(false);
  const [show_24, setShow_24] = useState(false);
  const [show_25, setShow_25] = useState(false);
  const [show_26, setShow_26] = useState(false);

  const [page, setPage] = useState(1);
  const limit = 4;
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
        {results.map((result, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                if (i === 0) {
                  setShow_1(true);
                }
                if (i === 1) {
                  setShow_2(true);
                }
                if (i === 2) {
                  setShow_3(true);
                }
                if (i === 3) {
                  setShow_4(true);
                }
                if (i === 4) {
                  setShow_5(true);
                }
                if (i === 5) {
                  setShow_6(true);
                }
                if (i === 6) {
                  setShow_7(true);
                }
                if (i === 7) {
                  setShow_8(true);
                }
                if (i === 8) {
                  setShow_9(true);
                }
                if (i === 9) {
                  setShow_10(true);
                }
                if (i === 10) {
                  setShow_11(true);
                }
                if (i === 11) {
                  setShow_12(true);
                }
                if (i === 12) {
                  setShow_13(true);
                }
                if (i === 13) {
                  setShow_14(true);
                }
                if (i === 14) {
                  setShow_15(true);
                }
                if (i === 15) {
                  setShow_16(true);
                }
                if (i === 16) {
                  setShow_17(true);
                }
                if (i === 17) {
                  setShow_18(true);
                }
                if (i === 18) {
                  setShow_19(true);
                }
                if (i === 19) {
                  setShow_20(true);
                }
                if (i === 20) {
                  setShow_21(true);
                }
                if (i === 21) {
                  setShow_22(true);
                }
                if (i === 22) {
                  setShow_23(true);
                }
                if (i === 23) {
                  setShow_24(true);
                }
                if (i === 24) {
                  setShow_25(true);
                }
                if (i === 25) {
                  setShow_26(true);
                }
              }}
            >
              {result}
            </li>
          );
        })}
      </ul>
      <Link to="/nossaucissons/grignotage">
        <button>Voir le gamme grignotage</button>
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
