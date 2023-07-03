import { useCallback, useEffect } from "react";
import Download from "../components/Download";
import "../styles/Download.css";
import { Button } from "react-bootstrap";
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

  return (
    <section className="how_to_order">
      <div className="astuce">
        <div className="first">
          <p>EN PREMIERE</p>
          <div className="first_flex">
            <img src="./images/excel.png" alt="" />
            <div className="first_desc">
              <span>T</span>éléchargez <span>excel fiche</span>
            </div>
          </div>
          <Download />
        </div>
        <div className="second">
          <p>EN DEUXIEME</p>
          <div className="second_flex">
            <img src="./images/스크린샷 2023-05-26 092928.png" alt="" />
            <div className="second_desc">
              <span>R</span>egardez bien
              <br />
              <span>le conseil dans le premiere page</span>
              <br /> dans le excel fiche
            </div>
          </div>
        </div>
        <div className="third">
          <p>EN TROISIEME</p>
          <div className="third_flex">
            <img src="./images/스크린샷 2023-05-26 103821.png" alt="excel" />
            <div className="third_desc">
              <span>M</span>ettez
              <br />
              <span>Nom, Prenom et Quantités</span> des lots
              <br /> pour chaques personnes
            </div>
          </div>
        </div>
        <div className="forth">
          <p>EN QUATRIEME</p>
          <div className="forth_flex">
            <img src="./images/excel Group.png" alt="excel" />
            <div className="forth_desc">
              <span>V</span>ous pouvez remplir <br />
              votre commande
              <br />
              <span>pour les chaque groups</span>
            </div>
          </div>
        </div>
        <div className="fifth">
          <p>EN CINQUIEME</p>
          <div className="fifth_flex">
            <img src="./images/스크린샷 2023-05-25 150902.png" alt="excel" />
            <div className="fifth_desc">
              <span>V</span>ous pouvez verifier <br />
              <span>les total tarif dans le RECAP.GENERAL</span> <br />
              pour les chaques groups
            </div>
          </div>
        </div>
        <div className="sixth">
          <p>EN SIXIEME</p>
          <div className="sixth_flex">
            <div className="sixth_desc">
              <span>D</span>ernierement, mettez votre information <br />
              et enregistrez votre fiche que vous avez rempli <br />
              <span>dans prochain page</span>
            </div>
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          window.location.href = "/commande";
        }}
        variant="warning"
        size="lg"
      >
        Aller commander
      </Button>
    </section>
  );
}
