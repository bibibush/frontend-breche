import { useCallback, useEffect, useState } from "react";
import Download from "../components/Download";
import "../styles/Download.css";
import { Button, ButtonGroup, Modal } from "react-bootstrap";
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
      <ButtonGroup size="lg">
        <Button
          onClick={() => {
            window.location.href = "/commande";
          }}
        >
          Aller commander
        </Button>
        <Button
          onClick={() => {
            setShow(true);
          }}
        >
          Guide pour remplir le fiche
        </Button>
      </ButtonGroup>
      <Modal
        show={show}
        size="lg"
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Guide pour remplir le fiche</Modal.Title>
          <Modal.Body></Modal.Body>
        </Modal.Header>
      </Modal>
    </section>
  );
}
