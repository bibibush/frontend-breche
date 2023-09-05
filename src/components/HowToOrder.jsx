import { useCallback, useEffect } from "react";
import Download from "../components/Download";
import "../styles/Download.css";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function HowToOrder() {
  const getme = useCallback(async () => {
    try {
      const res = await axios.get("/api/getme/");
      console.log("check", res);
      if (res.data.username === "") {
        window.location.href = "/login";
      }
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  useEffect(() => {
    getme();
  }, [getme]);

  return (
    <section className="order_how">
      <Download />
      <Button
        onClick={() => {
          window.location.href = "/commande";
        }}
        variant="warning"
        size="lg"
      >
        Aller commander
      </Button>
    </section>
  );
}
