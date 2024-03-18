import { Form, Button } from "react-bootstrap";
import { useCallback, useEffect, useState, forwardRef } from "react";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import { Oval } from "react-loader-spinner";
import gsap from "gsap";
import { useRef } from "react";
import useGetMe from "../hooks/useGetMe";
import useMatches from "../hooks/useMatches";

registerLocale("fr", fr);

export default function CommandeCSE() {
  const { getMe, user } = useGetMe();
  const { matches, setMatches, getMatches } = useMatches();

  const [files, setFiles] = useState([]);
  const [btnState, setBtnState] = useState(false);

  const date = new Date().setDate(new Date().getDate() + 15);
  const [startDate, setStartDate] = useState(new Date(date));
  const isWeekday = (date) => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  const onChangeupload = useCallback((event) => {
    setFiles(event.target.files);
  }, []);
  const upload = useCallback(() => {
    setBtnState(true);
    const formdata = new FormData(document.getElementById("info"));
    formdata.append("date", startDate.toLocaleDateString("fr-FR"));
    formdata.append("order_file", files[0]);
    axios
      .post("/api/upload/", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("upload success", res);
        window.location.href = `/commande-cse/success?id=${res.data.id}`;
      })
      .catch((err) => {
        alert("Vous devez enregistrer un fiche de la commande");
        console.log("upload error", err.response);
        window.location.href = "/commande-cse";
      });
  }, [startDate, files]);
  const ref = useRef();
  const ref2 = useRef();
  useEffect(() => {
    getMe();
    gsap.to(ref.current, {
      x: "30px",
      duration: 1,
      yoyoEase: "power2.out",
      repeat: -1,
    });
    gsap.to(ref2.current, {
      x: "-30px",
      duration: 1,
      yoyoEase: "power2.out",
      repeat: -1,
    });
    getMatches();
  }, [getMe, matches]);
  console.log(startDate);

  return (
    <section className="orders">
      <div className="user_info">
        <p>Votre Information</p>
        <Form id="info">
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
              type="tel"
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
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          height="100"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
          style={{ position: "absolute", top: "22px" }}
        >
          <path
            fill="#ff914d"
            d="M 14.375 133.332031 L 241.808594 133.332031 L 241.808594 240.238281 L 14.375 240.238281 Z M 14.375 133.332031 "
            fillOpacity="1"
            fillRule="nonzero"
          />
          <path
            fill="#ff914d"
            d="M 174.917969 67.332031 L 174.917969 306.226562 L 360.957031 186.785156 Z M 174.917969 67.332031 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </svg>
        {matches ? (
          <svg
            ref={ref2}
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
            style={{ position: "absolute", top: "22px", right: "0" }}
          >
            <path
              fill="#ff914d"
              d="M 360.617188 133.332031 L 133.1875 133.332031 L 133.1875 240.238281 L 360.617188 240.238281 Z M 360.617188 133.332031 "
              fillOpacity="1"
              fillRule="nonzero"
            />
            <path
              fill="#ff914d"
              d="M 200.078125 67.332031 L 200.078125 306.226562 L 14.039062 186.785156 Z M 200.078125 67.332031 "
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>
        ) : (
          <svg
            ref={ref2}
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
            style={{ position: "absolute", top: "22px", right: "24px" }}
          >
            <path
              fill="#ff914d"
              d="M 360.617188 133.332031 L 133.1875 133.332031 L 133.1875 240.238281 L 360.617188 240.238281 Z M 360.617188 133.332031 "
              fillOpacity="1"
              fillRule="nonzero"
            />
            <path
              fill="#ff914d"
              d="M 200.078125 67.332031 L 200.078125 306.226562 L 14.039062 186.785156 Z M 200.078125 67.332031 "
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>
        )}
        <label htmlFor="fileupload">
          {files.length === 0
            ? "Enregistrez votre commande ici"
            : files[0].name}
        </label>
        <input
          id="fileupload"
          type="file"
          onChange={onChangeupload}
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          required
        />
        {btnState ? (
          matches ? (
            <Button onClick={upload} disabled>
              <Oval width={20} height={20} secondaryColor="black" />
            </Button>
          ) : (
            <Button onClick={upload} disabled>
              <Oval width={40} height={40} secondaryColor="black" />
            </Button>
          )
        ) : (
          <Button onClick={upload}>Envoyer</Button>
        )}
        <div className="calendar">
          <p>Choisisez la date que vous voulez recevoir votre commande</p>
          <ReactDatePicker
            className="date"
            showMonthDropdown
            showYearDropdown
            shouldCloseOnSelect={false}
            filterDate={isWeekday}
            minDate={new Date().setDate(new Date().getDate() + 15)}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale={"fr"}
            dateFormat={"dd/ MMMM /yyyy"}
            customInput={<ExampleCustomInput />}
            disabledKeyboardNavigation
          />
        </div>
      </div>
    </section>
  );
}
