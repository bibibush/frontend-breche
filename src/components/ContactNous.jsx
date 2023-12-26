import axios from "axios";
import { useCallback } from "react";
import Form from "react-bootstrap/Form";

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
      <Form id="contact_form">
        <div className="nom-prenom-number">
          <Form.Group className="mb-3 me-3 nom">
            <Form.Label>nom</Form.Label>
            <Form.Control name="nom" type="text" placeholder="nom" />
          </Form.Group>
          <Form.Group className="mb-3 me-3 prenom">
            <Form.Label>prenom</Form.Label>
            <Form.Control name="prenom" type="text" placeholder="prenom" />
          </Form.Group>
          <Form.Group className="mb-3 number">
            <Form.Label>numero téléphone</Form.Label>
            <Form.Control
              name="number"
              type="text"
              placeholder="01 23 45 67 89"
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3 email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="exemple@exemple.com"
          />
        </Form.Group>
        <Form.Group className="mb-3 sujet">
          <Form.Label>sujet</Form.Label>
          <Form.Control name="sujet" type="text" placeholder="Votre sujet" />
        </Form.Group>
        <Form.Group className="mb-3 question">
          <Form.Label>La question</Form.Label>
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
