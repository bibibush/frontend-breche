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
  const [infoUpdate, setInfoUpdate] = useState(false);

  const date = new Date();
  const [startDate, setStartDate] = useState();
  const isWeekday = (date) => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };

  const [files, setFiles] = useState([]);
  const onChangeupload = useCallback((event) => {
    setFiles(event.target.files);
  }, []);

  const infoUpload = useCallback(() => {
    const formdata = new FormData(document.getElementById("info_form"));
    axios
      .post(`/api/info/${id}/update`, formdata)
      .then((res) => {
        console.log("infoupload success", res);
        window.location.href = `/mescommandes/detail?id=${id}`;
      })
      .catch((err) => {
        console.log(err.response.statusText);
        alert(err.response.statusText);
      });
  }, [id]);
  const excelUpload = useCallback(() => {
    const formdata = new FormData();
    formdata.append("order_file", files[0]);

    axios
      .post(`/api/excel/${id}/update`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("excelupload success", res);
        window.location.href = `/mescommandes/detail?id=${id}`;
      })
      .catch((err) => {
        console.log(err.response.statusText);
        alert(err.response.statusText);
      });
  }, [id, files]);
  const dateUpload = useCallback(() => {
    const formdata = new FormData();
    formdata.append("date", startDate.toLocaleDateString("fr-FR"));

    axios
      .post(`/api/date/${id}/update`, formdata)
      .then((res) => {
        console.log("date upload success", res);
        window.location.href = `/mescommandes/detail?id=${id}`;
      })
      .catch((err) => {
        console.log(err.response.statusText);
        alert(err.response.statusText);
      });
  }, [id, startDate]);

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
      {successInfo.block ? (
        <p>* Vous ne pouvez plus changer votre commande *</p>
      ) : (
        <p>
          * Vous pouvez changer votre commande jusqu'a 2 semaines avant la date
          que vous avez choisi pour recevoir la commande *
        </p>
      )}
      <div>
        <div className="excel_date">
          <div className="commande_number">
            <div>
              <p>Numero de votre commande: </p>
              {successInfo.order_number}
            </div>
            <div>
              <p>Date de votre commande: </p>
              {successInfo.create_dt}
            </div>
            <div>
              <p>Date de votre commande modifié: </p>
              {successInfo.modify_dt}
            </div>
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
                <Button variant="success" onClick={excelUpload}>
                  Enregistrez
                </Button>
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
                {successInfo.block ? (
                  <Button
                    variant="secondary"
                    disabled
                    onClick={() => {
                      setExcelUpdate(true);
                    }}
                  >
                    Changez
                    <br /> votre commande
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setExcelUpdate(true);
                    }}
                  >
                    Changez
                    <br /> votre commande
                  </Button>
                )}
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
                  minDate={new Date().setDate(date.getDate() + 15)}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  locale={"fr"}
                  dateFormat={"dd/ MM /yyyy"}
                  disabledKeyboardNavigation
                />
                <Button variant="success" onClick={dateUpload}>
                  Enregistrez
                </Button>
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
                {successInfo.block ? (
                  <Button
                    variant="secondary"
                    disabled
                    onClick={() => {
                      console.log(successInfo.date);
                      setDateUpdate(true);
                    }}
                  >
                    Changez la date
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    onClick={() => {
                      console.log(successInfo.date);
                      setDateUpdate(true);
                    }}
                  >
                    Changez la date
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="commande_adresse">
          {infoUpdate ? (
            <form id="info_form">
              <div className="commande_name">
                <p>Votre nom et prenom</p>
                <input type="text" name="nom" defaultValue={successInfo.nom} />
                <br />
                <br />
                <input
                  type="text"
                  name="prenom"
                  defaultValue={successInfo.prenom}
                />
              </div>
              <div className="adresse">
                <p>Votre adresse</p>
                <input
                  type="text"
                  name="adresse"
                  defaultValue={successInfo.adresse}
                />
              </div>
              <div className="entreprise">
                <p>Votre entreprise</p>
                <input
                  type="text"
                  name="entreprise"
                  defaultValue={successInfo.entreprise}
                />
              </div>
              <div className="email">
                <p>Votre adresse email</p>
                <input
                  type="text"
                  name="email"
                  defaultValue={successInfo.email}
                />
              </div>
              <div className="phonenumber">
                <p>Votre numero téléphone</p>
                <input
                  type="text"
                  name="phonenumber"
                  defaultValue={successInfo.phonenumber}
                />
              </div>
              <div className="buttons">
                <Button variant="success" onClick={infoUpload}>
                  Enregistrez
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    setInfoUpdate(false);
                  }}
                >
                  Annuler
                </Button>
              </div>
            </form>
          ) : (
            <>
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
              {successInfo.block ? (
                <Button
                  variant="secondary"
                  disabled
                  onClick={() => {
                    setInfoUpdate(true);
                  }}
                >
                  Changez les infos
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  onClick={() => {
                    setInfoUpdate(true);
                  }}
                >
                  Changez les infos
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
