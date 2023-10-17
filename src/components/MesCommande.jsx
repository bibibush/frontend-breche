import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Pagination } from "@mui/material";

export default function MesCommande() {
  const [orders, setOrders] = useState([]);

  const [page, setPage] = useState(1);
  const limit = 5;
  const offset = (page - 1) * limit;
  let totalPage = Math.ceil(orders.length / limit);
  let results = orders.slice(offset, offset + limit);
  const pageChange = (event, value) => {
    setPage(value);
    window.scroll(0, 0);
  };

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
      {results.map((result) => {
        const { id } = result;
        return (
          <div key={id} className="commande_info">
            <div className="commande_detail">
              <div className="commande_date">
                <h3>Date de commande</h3>
                {result.create_dt}
              </div>
              <div className="commande_numero">
                <h3>Numéro de commande</h3>
                {result.order_number}
              </div>
            </div>
            <Button
              onClick={() => {
                window.location.href = `/mes-commandes/detail?id=${id}`;
              }}
              variant="warning"
            >
              Detail de la commande
            </Button>
          </div>
        );
      })}
      <Pagination
        style={{
          position: "absolute",
          bottom: "38px",
          left: "50%",
          marginLeft: "calc(280px / -2)",
        }}
        count={totalPage}
        variant="outlined"
        shape="rounded"
        color="secondary"
        size="large"
        onChange={pageChange}
      />
    </section>
  );
}
