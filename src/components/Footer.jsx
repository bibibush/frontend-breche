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
          ZI de Montalègre Chazelles sur Lyon FRANCE 42140
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
      <div className="copyright">
        <img src={logo} alt="logo salaisonsdelabreche" />
        <p>&copy; {year} Salaisons de la brèche</p>
      </div>
    </footer>
  );
}
