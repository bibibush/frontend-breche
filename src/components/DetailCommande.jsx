import { useSearchParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import ClientDownload from "./ClientDownload";
import { Button, Form } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";

export default function DetailCommande() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [successInfo, setSuccessInfo] = useState({});
  const [excelUpdate, setExcelUpdate] = useState(false);
  const [dateUpdate, setDateUpdate] = useState(false);
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
              <ReactDatePicker />
              <Button
                variant="danger"
                onClick={() => {
                  setDateUpdate(false);
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
                  setDateUpdate(true);
                }}
              >
                Changez la date
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="commande_adresse"></div>
    </section>
  );
}
