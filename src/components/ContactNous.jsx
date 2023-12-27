import axios from "axios";
import { useCallback } from "react";
import Form from "react-bootstrap/Form";
import arti from "../images/3400 arti.jpg";

export default function ContactNous() {
  const submit = useCallback(() => {
    const formdata = new FormData(document.getElementById("contact_form"));

    axios
      .post("/user/contact/", formdata)
      .then((res) => {
        alert("Votre demande est bien envoyé");
        window.location.href = "/";
      })
      .catch((err) => {
        alert("Votre demande n'est pas bien passé. Appelez-nous !");
      });
  }, []);

  return (
    <section className="contact-nous">
      <h1>Nous-Contactez</h1>
      <img src={arti} alt="saucisson artisanale" />
      <Form id="contact_form">
        <div className="nom-prenom-number-email">
          <Form.Group className="mb-3 me-3 nom">
            <Form.Control name="nom" type="text" placeholder="Nom" />
          </Form.Group>
          <Form.Group className="mb-3 prenom">
            <Form.Control name="prenom" type="text" placeholder="Prenom" />
          </Form.Group>
          <Form.Group className="mb-3 me-3 number">
            <Form.Control
              name="number"
              type="text"
              placeholder="Numero Téléphone"
            />
          </Form.Group>
          <Form.Group className="mb-3 email">
            <Form.Control
              name="email"
              type="email"
              placeholder="Adresse Email"
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3 sujet">
          <Form.Control name="sujet" type="text" placeholder="Objet" />
        </Form.Group>
        <Form.Group className="mb-3 question">
          <Form.Control
            name="question"
            as="textarea"
            rows={5}
            placeholder="Votre question"
          />
        </Form.Group>
      </Form>
      <button onClick={submit}>Envoyer</button>
    </section>
  );
}
