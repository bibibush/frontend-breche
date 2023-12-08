import { useCallback } from "react";
// import logo from "../images/logo-Salaisons-de-la-Brèche-Fond-transparent.webp";
import logo2 from "../images/logo-Salaisons-de-la-Brèche- Fond transparent.png";

export default function Loading() {
  const EnergyComponent = useCallback(() => {
    return (
      <div
        data-value="100"
        data-preset="energy"
        data-transition-in
        className="ldBar"
        style={{
          width: "30%",
          height: "70px",
          margin: "0 auto",
        }}
      ></div>
    );
  }, []);
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

      <EnergyComponent />
    </section>
  );
}
