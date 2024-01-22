import logo from "../images/logo-Salaisons-de-la-Brèche- Fond transparent.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="mentions">
        <a href={"/mentions-legales"} className="mention-legale">
          Mentions legales
        </a>
      </div>
      <div className="foot_info">
        <p>
          <span className="material-symbols-outlined">location_on</span> &nbsp;
          7 Rue Claude Brosse 42140 CHAZELLES-SUR-LYON
        </p>
        <p>
          <span className="material-symbols-outlined">call</span> &nbsp; 04 77
          54 38 55
        </p>
        <p>
          <span className="material-symbols-outlined">mail</span> &nbsp;
          contact@salaisonsdelabreche.com
        </p>
      </div>
      <img src={logo} alt="logo salaisonsdelabreche" />
      <div className="copyright">
        <p>&copy; {year} Salaisons de la Brèche</p>
      </div>
    </footer>
  );
}
