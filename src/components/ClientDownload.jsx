import { useCallback } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function ClientDownload() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const download = useCallback(async () => {
    try {
      const res = await axios.get(`/api/excel/${id}/`, {
        responseType: "blob",
      });
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
  }, [id]);

  return (
    <div className="download" onClick={download}>
      <img src="./images/excel.png" alt="" />
      <div className="desc">Votre commande</div>
      <div className="material-symbols-outlined">download</div>
    </div>
  );
}
