import { Form, Button } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";

registerLocale("fr", fr);

export default function CommandeCSE() {
  const [files, setFiles] = useState([]);
  const [user, setUser] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  const onChangeupload = useCallback((event) => {
    setFiles(event.target.files);
  }, []);
  const upload = useCallback(() => {
    const formdata = new FormData(document.getElementById("info"));
    formdata.append("date", startDate.toLocaleDateString("fr-FR"));
    formdata.append("order_file", files[0]);
    axios
      .post("/api/upload/", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("upload success", res);
        window.location.href = `/commande/success?id=${res.data.id}`;
      })
      .catch((err) => {
        alert(err.response.statusText);
        console.log("upload error", err.response);
      });
  }, [startDate, files]);
  const getme = useCallback(async () => {
    try {
      const res = await axios.get("/api/getme/");
      console.log("getme", res);
      setUser(res.data);
    } catch (err) {
      console.log("getme error", err.response);
    }
  }, []);
  useEffect(() => {
    getme();
  }, [getme]);

  return (
    <section className="orders">
      <div className="user_info">
        <p>Votre Information</p>
        <Form id="info">
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
          <Form.Group className="mb-3 entreprise">
            <Form.Label>Votre entreprise</Form.Label>
            <Form.Control
              defaultValue={user.entreprise}
              type="text"
              placeholder="Votre entreprise"
              name="entreprise"
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
          <Form.Group className="mb-3 telephone">
            <Form.Label>Votre numero de téléphone</Form.Label>
            <Form.Control
              defaultValue={user.phonenumber}
              type="text"
              placeholder="01-23-45-67-89"
              name="phonenumber"
            />
          </Form.Group>
          <Form.Group className="mb-3 email">
            <Form.Label>Votre adresse Email</Form.Label>
            <Form.Control
              defaultValue={user.email}
              type="email"
              placeholder="name@example.com"
              name="email"
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
            onChange={onChangeupload}
          />
        </Form.Group>
        <Button onClick={upload}>Envoyer</Button>
        <div className="calendar">
          <p>Choisisez la date que vous voulez recevoir votre commande</p>
          <ReactDatePicker
            className="date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale={"fr"}
            dateFormat={"dd/ MMMM /yyyy"}
          />
        </div>
      </div>
    </section>
  );
}
