import { useSearchParams } from "react-router-dom";

export default function DetailCommande() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <section className="detail_commande">
      <div className="excel_date"></div>
      <div className="commande_adresse"></div>
    </section>
  );
}
