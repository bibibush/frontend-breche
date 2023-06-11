import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ClientDownload from "../components/ClientDownload";

export default function OrderSuccess() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [successInfo, setSuccessInfo] = useState({});

  const getSuccess = useCallback(async () => {
    try {
      const res = await axios.get(`/api/success/${id}/`);
      console.log("commande success", res);
      setSuccessInfo(res.data);
    } catch (err) {
      console.log(err.response);
      alert(err.response.statusText);
    }
  }, [id]);

  useEffect(() => {
    getSuccess();
  }, [getSuccess]);

  return (
    <section className="order_success">
      <div className="merci">
        <h2>Merci pour votre commande</h2>
        <h3>Votre commande est bien passé</h3>
      </div>
      <div className="commande_info">
        <p>L'information de votre commande</p>
        <div className="commande_info_ul">
          <ul>
            <li className="name">
              {successInfo.nom} {successInfo.prenom}
            </li>
            <li className="adresse">{successInfo.adresse}</li>
            <li className="phonenumber">{successInfo.phonenumber}</li>
            <li className="entreprise">{successInfo.entreprise}</li>
            <li className="email">{successInfo.email}</li>
          </ul>
        </div>
        <ClientDownload />
      </div>
    </section>
  );
}
