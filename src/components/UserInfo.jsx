import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useCallback } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export default function UserInfo() {
  const [params] = useSearchParams();
  const id = params.get("user-id");

  const [edit, setEdit] = useState(false);

  const [user, setUser] = useState({});
  const getme = useCallback(async () => {
    try {
      const res = await axios.get("/api/getme/");
      if (Number(id) !== res.data.id) {
        alert("Vous n'avez pas droit");
        window.location.href = "/";
      }
      setUser(res.data);
    } catch (err) {
      console.log(err.response);
    }
  }, [id]);

  const submit = () => {
    const formdata = new FormData(document.getElementById("user-info"));

    axios
      .post(`/user/${id}/infoupdate/`, formdata)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    setEdit(false);
  };

  useEffect(() => {
    getme();
  }, [getme]);

  return (
    <section className="userInfo">
      <div className="title">Votre information</div>
      {edit ? (
        <div className="userInfo_edit_section">
          <Form id="user-info">
            <div className="nom-prenom">
              <Form.Group className="mb-3 nom">
                <Form.Label>Votre Nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Votre Nom"
                  defaultValue={user.nom}
                  name="nom"
                />
              </Form.Group>
              <Form.Group className="mb-3 prenom">
                <Form.Label>Votre prenom</Form.Label>
                <Form.Control
                  defaultValue={user.prenom}
                  type="text"
                  placeholder="Votre prenom"
                  name="prenom"
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3 email">
              <Form.Label>Votre adresse Email</Form.Label>
              <Form.Control
                defaultValue={user.email}
                type="email"
                placeholder="name@example.com"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3 entreprise">
              <Form.Label>Votre entreprise</Form.Label>
              <Form.Control
                defaultValue={user.entreprise}
                type="text"
                placeholder="Votre entreprise"
                name="entreprise"
              />
            </Form.Group>
            <Form.Group className="mb-3 telephone">
              <Form.Label>Votre numero de téléphone</Form.Label>
              <Form.Control
                defaultValue={user.phonenumber}
                type="tel"
                placeholder="01-23-45-67-89"
                name="phonenumber"
              />
            </Form.Group>
            <Form.Group className="mb-3 adresse">
              <Form.Label>Votre adresse</Form.Label>
              <Form.Control
                defaultValue={user.adresse}
                type="text"
                placeholder="Votre adresse"
                name="adresse"
              />
            </Form.Group>
          </Form>
          <Button variant="success" onClick={submit}>
            Enregistrer
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setEdit(false);
            }}
          >
            supprimer
          </Button>
        </div>
      ) : (
        <div className="userInfo_section">
          <p>
            Votre nom : {user.nom} {user.prenom}
          </p>
          <p>Votre email : {user.email}</p>
          <p>Votre société : {user.entreprise}</p>
          <p>Votre numero de téléphone : {user.phonenumber}</p>
          <p>Votre adresse : {user.adresse}</p>
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            Modifier votre info
          </button>
        </div>
      )}
    </section>
  );
}
