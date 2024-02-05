import axios from "axios";
import { useCallback, useState } from "react";
import Form from "react-bootstrap/Form";
import arti from "../images/3400 arti.jpg";
import { Oval } from "react-loader-spinner";

export default function ContactNous() {
  const [value, setValue] = useState("");
  const [btnState, setBtnState] = useState(false);

  const submit = useCallback(() => {
    setBtnState(true);
    const formdata = new FormData(document.getElementById("contact_form"));
    formdata.append("create_dt", "");
    axios
      .post("/user/contact/", formdata)
      .then((res) => {
        alert(
          "Votre demande a bien été envoyée. \nVous allez recevoir d’ici quelques minutes un mail de confirmation d’envoi sur l’adresse mail que vous avez indiquée. \nS’il n’apparaît pas dans votre boîte de réception, pensez à vérifier vos courriers indésirables ou SPAM. 🙂"
        );
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err.response);
        alert(
          "La demande n’a pas pu être envoyée. \nMerci de renseigner correctement tous les champs obligatoires (*)."
        );
      });
  }, []);

  return (
    <section className="contact-nous">
      <h1>CONTACTEZ-NOUS</h1>
      <img src={arti} alt="saucisson artisanale" />
      <Form id="contact_form">
        <p>(*) Champs Obligatoires</p>
        <div className="nom-prenom-number-email">
          <Form.Group className="mb-3 me-3 nom">
            <Form.Control name="nom" type="text" placeholder="* Nom" required />
          </Form.Group>
          <Form.Group className="mb-3 prenom">
            <Form.Control
              name="prenom"
              type="text"
              placeholder="* Prenom"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 me-3 number">
            <Form.Control
              name="number"
              type="text"
              placeholder="* Numero de Téléphone"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 email">
            <Form.Control
              name="email"
              type="email"
              placeholder="* Adresse Email"
              required
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3 sujet">
          <Form.Control
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            name="sujet"
            type="text"
            placeholder="Objet"
          />
        </Form.Group>
        <Form.Group className="mb-3 question">
          <Form.Control
            name="question"
            as="textarea"
            rows={5}
            placeholder="* Votre demande"
            required
          />
        </Form.Group>
      </Form>
      {btnState ? (
        <button style={{ padding: "5px 0" }} disabled>
          <Oval width={30} height={30} secondaryColor="black" />
        </button>
      ) : (
        <button onClick={submit}>Envoyer</button>
      )}
    </section>
  );
}
