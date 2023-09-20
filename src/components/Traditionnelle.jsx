import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Traditionnelle() {
  const items = [
    "Saucisson Bridé 400g",
    "Saucisson Bridé 600-700g",
    "Saucisson 650g",
    "Saucisse droite 250g",
    "Mini-rosette 400g",
    "Rosette 1 - 1.2kg",
  ];
  const [show_1, setShow_1] = useState(false);
  const [show_2, setShow_2] = useState(false);
  const [show_3, setShow_3] = useState(false);
  const [show_4, setShow_4] = useState(false);
  const [show_5, setShow_5] = useState(false);
  const [show_6, setShow_6] = useState(false);

  return (
    <section className="traditionnelle">
      <div className="traditionnelle-cover"></div>
      <div className="desc">
        <h1>Gamme traditionnelle</h1>
        <h2>Desc</h2>
      </div>
      <img src="images/칠판.png" alt="" />
      <ul className="traditionnelle_items">
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
                if (i === 3) {
                  setShow_4(true);
                }
                if (i === 4) {
                  setShow_5(true);
                }
                if (i === 5) {
                  setShow_6(true);
                }
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <a href="/nossaucissons/cuires">
        <button>Voir le prochaine gamme</button>
      </a>
      <Modal
        show={show_1}
        size="xl"
        className="modal-saucisson"
        onHide={() => {
          setShow_1(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Saucisson Bridé 400g</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/hg 300-400.JPG" alt="" />
        </Modal.Body>
      </Modal>
      <Modal
        show={show_2}
        size="xl"
        className="modal-saucisson"
        onHide={() => {
          setShow_2(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Saucisson Bridé 600-700g</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/7-800 nature.JPG" alt="" />
        </Modal.Body>
      </Modal>
      <Modal
        show={show_3}
        size="xl"
        className="modal-saucisson"
        onHide={() => {
          setShow_3(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Saucisson 650g</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/650.JPG" alt="" />
        </Modal.Body>
      </Modal>
      <Modal
        show={show_4}
        size="xl"
        className="modal-saucisson"
        onHide={() => {
          setShow_4(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Saucisse droite 250g</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/droite.JPG" alt="" />
        </Modal.Body>
      </Modal>
      <Modal
        show={show_5}
        size="xl"
        className="modal-saucisson"
        onHide={() => {
          setShow_5(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Mini-rosette 400g</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/mini_rosette.JPG" alt="" />
        </Modal.Body>
      </Modal>
      <Modal
        show={show_6}
        size="xl"
        className="modal-saucisson"
        onHide={() => {
          setShow_6(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Rosette 1 - 1.2kg</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/Rosette Complete.png" alt="" />
        </Modal.Body>
      </Modal>
    </section>
  );
}
