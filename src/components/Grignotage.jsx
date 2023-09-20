import { useState } from "react";
import { Modal } from "react-bootstrap";

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
        {items.map((item) => {
          return (
            <li
              onClick={() => {
                setShow(true);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <a href="/nossaucissons/allegee">
        <button>Voir le prochaine gamme</button>
      </a>
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
