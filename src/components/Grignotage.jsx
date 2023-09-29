import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Grignotage() {
  const items = ["Mignonettes"];
  const [show, setShow] = useState(false);

  return (
    <section className="grignotage">
      <div className="grignotage-cover"></div>
      <div className="desc">
        <h1>Gamme Grignotage</h1>
        <h2>Desc</h2>
      </div>
      <img src="images/칠판.png" alt="" />
      <ul className="grignotage_items">
        {items.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setShow(true);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <Link to="/nossaucissons/allegee">
        <button>Voir le gamme allégé</button>
      </Link>
      <Modal
        className="modal-saucisson"
        show={show}
        size="xl"
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Mignonettes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/minionnette.JPG" alt="" />
        </Modal.Body>
      </Modal>
    </section>
  );
}
