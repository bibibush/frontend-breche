import React, { useCallback, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export default function ContactNous() {
  const form = useRef();
  const [info, setInfo] = useState({});
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
  const getme = useCallback(async () => {
    try {
      const res = await axios.get("/api/getme/");

      console.log("getme success", res);
      setInfo(res.data);
    } catch (err) {
      console.log("getme error", err.response);
    }
  }, []);

  useEffect(() => {
    getme();
  }, [getme]);
  return (
    <section className="contact-nous">
      <Form ref={form} id="form-contact" onSubmit={sendEmail}>
        <div className="nom-email">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Votre Nom *</Form.Label>
            <Form.Control
              required
              type="text"
              name="nom"
              defaultValue={info.nom}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Votre prenom *</Form.Label>
            <Form.Control
              required
              type="text"
              name="prenom"
              defaultValue={info.prenom}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Votre numero telephone</Form.Label>
          <Form.Control
            type="text"
            name="user_numero"
            defaultValue={info.phonenumber}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Adresse email *</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="exemple@exemple.com"
            name="user_email"
            defaultValue={info.email}
          />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Votre entreprise</Form.Label>
            <Form.Control
              type="text"
              placeholder="votre entreprise"
              name="entreprise"
              defaultValue={info.entreprise}
            />
          </Form.Group>
        </Form.Group>
        <Form.Label>Objet *</Form.Label>
        <Form.Select required aria-label="Default select example" name="objet">
          <option value="">Choisissez</option>
          <option value="un">Un</option>
          <option value="deux">Deux</option>
          <option value="trois">Trois</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Sujet</Form.Label>
          <Form.Control type="text" name="sujet" placeholder="Sujet" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Question *</Form.Label>
          <Form.Control as="textarea" rows={9} name="message" required />
        </Form.Group>

        {btnState ? (
          <Button disabled variant="primary" type="submit">
            <Oval width={40} height={40} secondaryColor="black" color="white" />
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        )}
      </Form>
    </section>
  );
}
