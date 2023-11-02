import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Pagination } from "@mui/material";

export default function LesCommande() {
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
      const res = await axios.get("/api/ad/list/");
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
          <div
            key={id}
            className={
              !result.paspaye && !result.validable
                ? "commande_info"
                : result.paspaye
                ? "commande_info paspaye"
                : result.done
                ? "commande_info done"
                : "commande_info validable"
            }
          >
            <div className="commande_detail">
              <div className="commande_date">
                <p>Date de commande</p>
                {result.create_dt}
              </div>
              <div className="commande_numero">
                <p>Numéro de commande</p>
                {result.order_number}
              </div>
              <div className="commande_user">
                <p>Commandeur</p>
                {result.user}
              </div>
            </div>
            <Button
              onClick={() => {
                window.location.href = `/les-commandes/detail?id=${id}`;
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
          width: "70%",
          display: "flex",
          justifyContent: "center",
          bottom: "38px",
          left: "50%",
          marginLeft: "calc(70% / -2)",
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
