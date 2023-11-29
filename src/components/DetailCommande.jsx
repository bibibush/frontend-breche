import { useSearchParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import ClientDownload from "./ClientDownload";
import { Button } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

registerLocale("fr", fr);

export default function DetailCommande() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [successInfo, setSuccessInfo] = useState({});

  const [excelUpdate, setExcelUpdate] = useState(false);
  const [dateUpdate, setDateUpdate] = useState(false);
  const [infoUpdate, setInfoUpdate] = useState(false);

  const [show, setShow] = useState(false);

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
        window.location.href = `/mes-commandes/detail?id=${id}`;
      })
      .catch((err) => {
        console.log(err.response.statusText);
        alert(err.response.statusText);
      });
  }, [id]);
  const enterInfo = useCallback(
    (e) => {
      if (e.key === "Enter") {
        infoUpload();
      }
    },
    [infoUpload]
  );

  const excelUpload = useCallback(() => {
    const formdata = new FormData();
    formdata.append("order_file", files[0]);

    axios
      .post(`/api/excel/${id}/update`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("excelupload success", res);
        window.location.href = `/mes-commandes/detail?id=${id}`;
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
        window.location.href = `/mes-commandes/detail?id=${id}`;
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

  const deleteCommande = useCallback(() => {
    axios
      .delete(`/api/commande/${id}/delete`)
      .then((res) => {
        console.log("delete success !", res);
        window.location.href = "/mes-commandes";
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.statusText);
      });
  }, [id]);

  useEffect(() => {
    getSuccess();
  }, [getSuccess]);

  return (
    <section className="detail_commande">
      <p>
        Si vous voulez modifier votre commande, modifiez avec votre ordinateur
        s'il vous plaît
      </p>
      {successInfo.block ? (
        <p>* Vous ne pouvez plus modifier votre commande *</p>
      ) : (
        <p>
          * Vous pouvez modifier votre commande jusqu'a 2 semaines avant la date
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
            <div>
              <p>Statut de payment: </p>
              {successInfo.pay ? (
                <em>Votre payment est bien passé</em>
              ) : (
                <em>Vous n'avez pas payé</em>
              )}
            </div>
          </div>
          <div className="excel">
            <p>Fiche de votre commande: </p>
            {excelUpdate ? (
              <div className="client_upload">
                <label htmlFor="fileupdate">
                  {files.length === 0
                    ? "Enregistrez votre commande ici"
                    : files[0].name}
                </label>
                <input
                  id="fileupdate"
                  type="file"
                  onChange={onChangeupload}
                  accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                />
                <Button variant="success" onClick={excelUpload}>
                  Enregistrez
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    setExcelUpdate(false);
                    setFiles([]);
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
                    Changez votre commande
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dateUpload();
                    }
                  }}
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
                <em>
                  {new Date(successInfo.date).getDate()} /{" "}
                  {new Date(successInfo.date).getMonth() + 1} /{" "}
                  {new Date(successInfo.date).getFullYear()}
                </em>
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
                <input
                  type="text"
                  name="nom"
                  defaultValue={successInfo.nom}
                  onKeyDown={enterInfo}
                />
                <br />
                <br />
                <input
                  type="text"
                  name="prenom"
                  defaultValue={successInfo.prenom}
                  onKeyDown={enterInfo}
                />
              </div>
              <div className="adresse">
                <p>Votre adresse</p>
                <input
                  type="text"
                  name="adresse"
                  defaultValue={successInfo.adresse}
                  onKeyDown={enterInfo}
                />
              </div>
              <div className="entreprise">
                <p>Votre entreprise</p>
                <input
                  type="text"
                  name="entreprise"
                  defaultValue={successInfo.entreprise}
                  onKeyDown={enterInfo}
                />
              </div>
              <div className="email">
                <p>Votre adresse email</p>
                <input
                  type="text"
                  name="email"
                  defaultValue={successInfo.email}
                  onKeyDown={enterInfo}
                />
              </div>
              <div className="phonenumber">
                <p>Votre numero téléphone</p>
                <input
                  type="text"
                  name="phonenumber"
                  defaultValue={successInfo.phonenumber}
                  onKeyDown={enterInfo}
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
                <em>{successInfo.adresse}</em>
              </div>
              <div className="entreprise">
                <p>Votre entreprise</p>
                <em>{successInfo.entreprise}</em>
              </div>
              <div className="email">
                <p>Votre adresse email</p>
                <em>{successInfo.email}</em>
              </div>
              <div className="phonenumber">
                <p>Votre numero téléphone</p>
                <em>{successInfo.phonenumber}</em>
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
      {successInfo.validable ? (
        <>
          <button
            disabled
            style={{ backgroundColor: "rgba(183, 25, 25, 0.365)" }}
            onClick={() => {
              setShow(true);
            }}
          >
            Supprimez la commande
          </button>
          {successInfo.done ? (
            ""
          ) : (
            <em>
              * Vous pouvez pas supprimer cette commande parce qu'elle est déjà
              validé. Si vous voulez supprimer cette commande, appelez nous s'il
              vous plaît
            </em>
          )}
        </>
      ) : (
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Supprimez la commande
        </button>
      )}

      <MyVerticallyCenteredModal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        deletecommande={deleteCommande}
      />
    </section>
  );
}
