import axios from "axios";

export default function BondeCommande() {
  const download = () => {
    axios
      .get("/api/bondownload/", {
        responseType: "blob",
      })
      .then((res) => {
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
      })
      .catch((error) => {
        console.log("err", error.response);
      });
  };

  return (
    <div className="bondownload" onClick={download}>
      <img src="images/pdf.png" alt="" />
      <div className="desc">Bon de commande CSE</div>
      <div className="material-symbols-outlined">download</div>
    </div>
  );
}
