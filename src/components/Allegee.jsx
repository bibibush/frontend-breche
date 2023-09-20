import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Allegee() {
  const items = [
    "Saucisson Allégé en Gras 700g",
    "Demi Saucisson Allégé en Gras",
    "Filet mignon séché",
  ];
  const [show_1, setShow_1] = useState(false);
  const [show_2, setShow_2] = useState(false);
  const [show_3, setShow_3] = useState(false);

  return (
    <section className="allegees">
      <div className="allegees-cover"></div>
      <div className="desc">
        <h1>Gamme de saucisson allégé</h1>
        <h2>Desc</h2>
      </div>
      <img src="images/칠판.png" alt="" />
      <ul className="allegees_items">
        {items.map((item, i) => {
          return (
            <li
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
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <a href="/nossaucissons/artisanale">
        <button>Voir le prochaine gamme</button>
      </a>
      <Modal
        className="modal-saucisson"
        show={show_1}
        size="xl"
        onHide={() => {
          setShow_1(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Mignonettes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/minionnette.JPG" alt="" />
        </Modal.Body>
      </Modal>
      <Modal
        className="modal-saucisson"
        show={show_2}
        size="xl"
        onHide={() => {
          setShow_2(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Mignonettes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/minionnette.JPG" alt="" />
        </Modal.Body>
      </Modal>
      <Modal
        className="modal-saucisson"
        show={show_3}
        size="xl"
        onHide={() => {
          setShow_3(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Filet mignon séché</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/filet mignon.JPG" alt="" />
        </Modal.Body>
      </Modal>
    </section>
  );
}
