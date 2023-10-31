import { useCallback } from "react";
import axios from "axios";
import excel from "../images/excel.png";

export default function Download() {
  const download = useCallback(async () => {
    try {
      const res = await axios.get("/api/download/", { responseType: "blob" });
      console.log(res);
      const blob = new Blob([res.data]);
      const fileObjectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = fileObjectUrl;
      link.style.display = "none";

      const injectFilename = (res) => {
        const disposition = res.headers["content-disposition"];

        const fileName = decodeURI(
          disposition
            .match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
            .replace(/['"]/g, "")
        );
        return fileName;
      };
      link.download = injectFilename(res);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(fileObjectUrl);
    } catch (err) {
      alert(err.response.statusText);
      console.log("err", err.response);
    }
  }, []);

  return (
    <div className="download" onClick={download}>
      <img src={excel} alt="Fiche excel" />
      <div className="desc">MODELE Tableau CSE 2022.xlsx</div>
      <div className="material-symbols-outlined">download</div>
    </div>
  );
}
