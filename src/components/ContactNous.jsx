import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Oval } from "react-loader-spinner";
import useGetMe from "../hooks/useGetMe";

export default function ContactNous() {
  const form = useRef();
  const [btnState, setBtnState] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnState(true);

    emailjs
      .sendForm(
        "service_86851li",
        "template_uotx5h8",
        form.current,
        "NJQ4XLjnvXHFHZMp5"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Votre demande est bien passé ");
          window.location.href = "/contact";
        },
        (error) => {
          console.log(error.text);
          alert("Erreur");
        }
      );
  };
  // const change = (target) => {
  //   return target.value;
  // };

  const { getMe, user } = useGetMe();

  useEffect(() => {
    getMe();
  }, [getMe]);
  return (
    <section className="contact-nous">
      <div className="contact-bg">
        <Form ref={form} id="form-contact" onSubmit={sendEmail}>
          <div className="nom-email">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Votre Nom *</Form.Label>
              <Form.Control
                required
                type="text"
                name="nom"
                defaultValue={user.nom}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Votre prenom *</Form.Label>
              <Form.Control
                required
                type="text"
                name="prenom"
                defaultValue={user.prenom}
              />
            </Form.Group>
          </div>
          <div className="numero-email">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Votre numero telephone</Form.Label>
              <Form.Control
                type="text"
                name="user_numero"
                defaultValue={user.phonenumber}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Adresse email *</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="exemple@exemple.com"
                name="user_email"
                defaultValue={user.email}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Votre entreprise</Form.Label>
            <Form.Control
              type="text"
              placeholder="votre entreprise"
              name="entreprise"
              defaultValue={user.entreprise}
            />
          </Form.Group>
          <Form.Label>Objet *</Form.Label>
          <Form.Select
            required
            aria-label="Default select example"
            name="objet"
          >
            <option value="">Choisissez</option>
            <option value="Demander compte">Demander compte</option>
            <option value="Prix">Prix</option>
            <option value="CSE">CSE</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Sujet</Form.Label>
            <Form.Control type="text" name="sujet" placeholder="Sujet" />
          </Form.Group>
          <Form.Group
            className="mb-3 mb-text"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Question *</Form.Label>
            <Form.Control as="textarea" rows={9} name="message" required />
          </Form.Group>

          {btnState ? (
            <Button disabled variant="primary" type="submit">
              <Oval
                width={40}
                height={40}
                secondaryColor="black"
                color="white"
              />
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          )}
        </Form>
      </div>
    </section>
  );
}
