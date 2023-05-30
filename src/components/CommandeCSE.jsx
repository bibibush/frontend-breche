import { Form } from "react-bootstrap";
import useActions from "../hooks/useActions";

export default function CommandeCSE() {
  const { putName, putEntreprise, putAdresse, putNumero, putEmail } =
    useActions();

  return (
    <section className="orders">
      <div className="user_info">
        <p>Votre Information</p>
        <Form id="info">
          <Form.Group className="mb-3 nom">
            <Form.Label>Votre Nom</Form.Label>
            <Form.Control
              onChange={putName}
              type="text"
              placeholder="Votre Nom"
            />
          </Form.Group>
          <Form.Group className="mb-3 entreprise">
            <Form.Label>Votre entreprise</Form.Label>
            <Form.Control
              onChange={putEntreprise}
              type="text"
              placeholder="Votre entreprise"
            />
          </Form.Group>
          <Form.Group className="mb-3 adresse">
            <Form.Label>Votre adresse</Form.Label>
            <Form.Control
              onChange={putAdresse}
              type="text"
              placeholder="Votre adresse"
            />
          </Form.Group>
          <Form.Group className="mb-3 telephone">
            <Form.Label>Votre numero de téléphone</Form.Label>
            <Form.Control
              onChange={putNumero}
              type="text"
              placeholder="01-23-45-67-89"
            />
          </Form.Group>
          <Form.Group className="mb-3 email">
            <Form.Label>Votre adresse Email</Form.Label>
            <Form.Control
              onChange={putEmail}
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
        </Form>
      </div>
      <div className="user_orders">
        <p>Commandez avec un excel</p>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Enregistrez votre fiche en bas</Form.Label>
          <Form.Control
            type="file"
            size="lg"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          />
        </Form.Group>
      </div>
    </section>
  );
}
