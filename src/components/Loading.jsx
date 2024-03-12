import logo2 from "../images/logo-Salaisons-de-la-Breche- Fond transparent.png";
import spinner from "../images/green spinner.gif";

export default function Loading() {
  return (
    <section
      className="loading"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: `#333`,
        top: "0",
        bottom: "0",
      }}
    >
      <img
        src={logo2}
        alt="logo"
        style={{
          maxWidth: "20%",
          margin: "125px auto",
        }}
      />

      <img
        src={spinner}
        style={{
          width: "10%",
          margin: "0 auto",
        }}
        alt="spinner"
      ></img>
    </section>
  );
}
