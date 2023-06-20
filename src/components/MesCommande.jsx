import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function MesCommande() {
  const [orders, setOrders] = useState([]);
  const orderInfo = useCallback(async () => {
    try {
      const res = await axios.get("/api/list/");
      console.log("orderInfo success", res);
      setOrders(res.data);
    } catch (err) {
      console.log("orderInfo Error", err.response);
      window.location.href = "/";
    }
  }, []);
  useEffect(() => {
    orderInfo();
  }, [orderInfo]);

  return (
    <section className="mescommande">
      {orders.map((order) => {
        const { id } = order;
        return (
          <div key={id} className="commande_info">
            <div className="commande_detail">
              <div className="commande_date">
                <h3>Date de commande</h3>
                {order.modify_dt}
              </div>
              <div className="commande_numero">
                <h3>Numéro de commande</h3>
                {order.order_number}
              </div>
            </div>
            <Button
              onClick={() => {
                window.location.href = `/mescommandes/detail?id=${id}`;
              }}
              variant="warning"
            >
              Detail de la commande
            </Button>
          </div>
        );
      })}
    </section>
  );
}
