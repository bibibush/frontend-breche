import axios from "axios";
import { useCallback } from "react";

export default function BondeCommande() {
  const download = useCallback(async () => {
    try {
      const res = await axios.get("/api/bondownload/", {
        responseType: "blob",
      });
      const blob = new Blob(res.data);
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
      document.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(fileObjectUrl);
    } catch (error) {
      alert(error.response.statusText);
      console.log("err", error.response);
    }
  }, []);

  return (
    <div className="bondownload" onClick={download}>
      <div className="desc"></div>
    </div>
  );
}
