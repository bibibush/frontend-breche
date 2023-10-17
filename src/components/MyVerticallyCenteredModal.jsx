import { Modal, Button } from "react-bootstrap";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Supprimer la commande
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Est-ce que vous voulez supprimer votre commande ?</p>
        <div
          className="confirmation"
          style={{ marginTop: "3em", marginRight: "1.5em", textAlign: "end" }}
        >
          <Button variant="success" onClick={props.deletecommande}>
            Oui
          </Button>
          <Button
            variant="danger"
            onClick={props.onHide}
            style={{ marginLeft: "1em" }}
          >
            Pas encore
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
