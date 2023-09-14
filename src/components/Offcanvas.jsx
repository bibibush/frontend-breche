import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

export default function Offcanvass() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button
        className="offcanvas_button"
        variant="warning"
        onClick={handleShow}
      >
        Selectionez les gammes des saucissons
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <p></p>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="linkBox">
            <a href={"/nossaucissons/artisanale"}>Gamme artisanale</a>
            <a href={"/nossaucissons/traditionnelle"}>Gamme traditionnelle</a>
            <a href={"/nossaucissons/cuires"}>Gamme saucisson à cuire</a>
            <a href={"/nossaucissons/specialite"}>
              Nos spécialités artisanale 200g
            </a>
            <a href={"/nossaucissons/grignotage"}>Gamme grignotage</a>
            <a href={"/nossaucissons/allegee"}>Gamme allégée</a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
