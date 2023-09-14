import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Artisanales() {
  const [show_250, setShow_250] = useState(false);
  const [show_400, setShow_400] = useState(false);
  const [show_courbe, setShow_courbe] = useState(false);
  const [show_700, setShow_700] = useState(false);

  return (
    <section className="artisanale">
      <div className="artisanale-cover"></div>
      <div className="desc">
        <h1>Gamme artisanale</h1>
        <h2>Desc</h2>
      </div>
      <img src="images/칠판.png" alt="" />
      <ul className="artisanale_items">
        <li
          onClick={() => {
            setShow_250(true);
          }}
        >
          Saucisson Artisanal 250g
        </li>
        <li
          onClick={() => {
            setShow_400(true);
          }}
        >
          Saucisson Artisanal bridé main 400g
        </li>
        <li
          onClick={() => {
            setShow_courbe(true);
          }}
        >
          Saucisson Artisanal Courbe 300-400g
        </li>
        <li
          onClick={() => {
            setShow_700(true);
          }}
        >
          Saucisson Artisanal bridé 600-700g
        </li>
      </ul>
      <Modal
        size="xl"
        className="modal-saucisson"
        show={show_250}
        onHide={() => {
          setShow_250(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Saucisson ARTISANAL 250g</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/250 nature.JPG" alt="" />
        </Modal.Body>
      </Modal>
      <Modal
        size="xl"
        className="modal-saucisson"
        show={show_400}
        onHide={() => {
          setShow_400(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Saucisson ARTISANAL bridé main 400g</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/hg 300-400.JPG" alt="" />
        </Modal.Body>
      </Modal>
      <Modal
        size="xl"
        className="modal-saucisson"
        show={show_courbe}
        onHide={() => {
          setShow_courbe(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Saucisson ARTISANAL Courbe 300-400g</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/coubre.JPG" alt="" />
        </Modal.Body>
      </Modal>
      <Modal
        size="xl"
        className="modal-saucisson"
        show={show_700}
        onHide={() => {
          setShow_700(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Saucisson ARTISANAL bridé 600-700g</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/7-800 Arti.JPG" alt="" />
        </Modal.Body>
      </Modal>
    </section>
  );
}
