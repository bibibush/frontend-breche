import { useSearchParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import ClientDownload from "./ClientDownload";
import { Button, Form } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";

registerLocale("fr", fr);

export default function DetailCommande() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [successInfo, setSuccessInfo] = useState({});

  const [excelUpdate, setExcelUpdate] = useState(false);
  const [dateUpdate, setDateUpdate] = useState(false);
  const [update] = useState(() => {
    if (excelUpdate || dateUpdate) {
      return true;
    } else {
      return false;
    }
  });

  const [files, setFiles] = useState([]);
  const onChangeupload = useCallback((event) => {
    setFiles(event.target.files);
  }, []);
  const getSuccess = useCallback(async () => {
    try {
      const res = await axios.get(`/api/success/${id}/`);
      console.log("commande success", res);
      setSuccessInfo(res.data);
    } catch (err) {
      console.log(err.response);
      alert(err.response.statusText);
      window.location.href = "/";
    }
  }, [id]);

  useEffect(() => {
    getSuccess();
  }, [getSuccess]);

  const date = new Date();
  const [startDate, setStartDate] = useState();
  const isWeekday = (date) => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };

  return (
    <section className="detail_commande">
      <div className="excel_date">
        <div className="commande_number">
          <p>Numero de votre commande: </p>
          {successInfo.order_number}
        </div>
        <div className="excel">
          <p>Fiche de votre commande: </p>
          {excelUpdate ? (
            <div className="client_upload">
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Enregistrez votre fiche en bas</Form.Label>
                <Form.Control
                  type="file"
                  size="lg"
                  accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  onChange={onChangeupload}
                />
              </Form.Group>
              <Button
                variant="danger"
                onClick={() => {
                  setExcelUpdate(false);
                  setFiles();
                }}
              >
                Annuler
              </Button>
            </div>
          ) : (
            <div className="client_download">
              <ClientDownload />
              <Button
                variant="secondary"
                onClick={() => {
                  setExcelUpdate(true);
                }}
              >
                Changez
                <br /> votre commande
              </Button>
            </div>
          )}
        </div>
        <div className="date">
          <p>La date que vous recevoir la commande</p>
          {dateUpdate ? (
            <div className="date_change">
              <ReactDatePicker
                showMonthDropdown
                showYearDropdown
                shouldCloseOnSelect={false}
                placeholderText="Choisiz la date"
                filterDate={isWeekday}
                minDate={new Date().setDate(date.getDate() + 14)}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale={"fr"}
                dateFormat={"dd/ MM /yyyy"}
                disabledKeyboardNavigation
              />
              <Button
                variant="danger"
                onClick={() => {
                  setDateUpdate(false);
                  setStartDate();
                }}
              >
                Annuler
              </Button>
            </div>
          ) : (
            <div className="date_commande">
              <h3>{successInfo.date}</h3>
              <Button
                variant="secondary"
                onClick={() => {
                  console.log(successInfo.date);
                  setDateUpdate(true);
                }}
              >
                Changez la date
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="commande_adresse">
        <p>adresse</p>
        <div className="commande_name">
          <p>Votre nom et prenom</p>
          <div className="commande_nom">{successInfo.nom}</div>
          <div className="commande_prenom">{successInfo.prenom}</div>
        </div>
        <div className="adresse">
          <p>Votre adresse</p>
          <h3>{successInfo.adresse}</h3>
        </div>
        <div className="entreprise">
          <p>Votre entreprise</p>
          <h3>{successInfo.entreprise}</h3>
        </div>
        <div className="email">
          <p>Votre adresse email</p>
          <h3>{successInfo.email}</h3>
        </div>
        <div className="phonenumber">
          <p>Votre numero téléphone</p>
          <h3>{successInfo.phonenumber}</h3>
        </div>
      </div>
    </section>
  );
}