import { useCallback, useEffect, useState } from "react";
import Download from "../components/Download";
import "../styles/Download.css";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function HowToOrder() {
  const getme = useCallback(async () => {
    try {
      const res = await axios.get("/api/getme/");
      console.log("check", res);
      if (res.data.username === "") {
        window.location.href = "/login";
      }
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  useEffect(() => {
    getme();
  }, [getme]);

  const [show, setShow] = useState(false);

  return (
    <section className="order_how">
      <div className="steps">
        <div className="steps-cover"></div>
        <div className="step">
          <div className="step_num">Etape 1</div>
          <div className="desc">
            Téléchargez 'MODELE Tableau CSE 2022.xlsx' fiche
          </div>
        </div>
        <div className="step">
          <div className="step_num">Etape 2</div>
          <div className="desc">Rempliez votre commande dans le fiche</div>
        </div>
        <div className="step">
          <div className="step_num">Etape 3</div>
          <div className="desc">
            Continuez finir votre commande
            <br /> comme vous appuyez le bouton 'Aller commander'
          </div>
        </div>
      </div>
      <Download />
      <button
        className="guide"
        onClick={() => {
          setShow(true);
        }}
      >
        Guide pour remplir le fiche
      </button>
      <button
        className="commander"
        onClick={() => {
          window.location.href = "/commande";
        }}
      >
        Aller Commander
      </button>
      <Modal
        show={show}
        className="how_to-modal"
        size="lg"
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Guide pour remplir le fiche</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/conseil.png" alt="" />
          <img src="images/groupe 1.png" alt="" />
          <img src="images/nom_prenom.png" alt="" />
          <img src="images/quantite.png" alt="" />
          <img src="images/totaltarif.png" alt="" />
          <img src="images/recappe.png" alt="" />
        </Modal.Body>
      </Modal>
    </section>
  );
}
