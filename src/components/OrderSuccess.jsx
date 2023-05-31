import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

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
      alert(err.response.statusText);
      console.log(err.response);
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
        <ul>
          <li className="name">{successInfo.name}</li>
          <li className="adresse">{successInfo.adresse}</li>
          <li className="phonenumber">{successInfo.phonenumber}</li>
          <li className="entreprise">{successInfo.entreprise}</li>
          <li className="email">{successInfo.email}</li>
        </ul>
      </div>
    </section>
  );
}
