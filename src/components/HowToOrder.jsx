import { useCallback, useEffect, useState } from "react";
import Download from "../components/Download";
import BondeCommande from "./BondeCommande";
import "../styles/BondeCommande.css";
import "../styles/Download.css";
import { Modal } from "react-bootstrap";
import axios from "axios";
import conseil from "../images/conseil.png";
import group1 from "../images/groupe 1.png";
import nomPrenom from "../images/nom_prenom.png";
import quantite from "../images/quantite.png";
import totaltarif from "../images/totaltarif.png";
import recappe from "../images/recappe.png";

export default function HowToOrder() {
  const mediaMatch = window.matchMedia("(max-width: 767px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

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
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, [getme, mediaMatch]);
  console.log(matches);

  const [show, setShow] = useState(false);
  return (
    <section className="order_how">
      <div className="steps">
        <div className="steps-cover"></div>
        <div className="step">
          <div className="step_num">Etape 1</div>
          {matches ? (
            <div className="desc">
              Ovrez notre site à l'ordinateur S'il vous plaît
            </div>
          ) : (
            <div className="desc">
              Téléchargez
              <strong
                style={
                  matches
                    ? {
                        fontWeight: "700",
                        fontSize: "0.8rem",
                        textDecoration: "underline",
                      }
                    : {
                        fontWeight: "700",
                        fontSize: "21px",
                        textDecoration: "underline",
                      }
                }
              >
                'MODELE Tableau CSE 2022.xlsx'
              </strong>
              fiche
            </div>
          )}
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
      <BondeCommande />
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
          window.location.href = "/commande-cse";
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
          <img src={conseil} alt="Guide pour commander CSE" />
          <img src={group1} alt="Guide pour commander CSE" />
          <img src={nomPrenom} alt="Guide pour commander CSE" />
          <img src={quantite} alt="Guide pour commander CSE" />
          <img src={totaltarif} alt="Guide pour commander CSE" />
          <img src={recappe} alt="Guide pour commander CSE" />
        </Modal.Body>
      </Modal>
    </section>
  );
}
