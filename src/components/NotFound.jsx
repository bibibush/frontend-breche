import notfound404 from "../images/404notfound.gif";

export default function NotFound() {
  return (
    <section className="notfound">
      <img src={notfound404} alt="404 page not found" />
      <p>
        OUPS ! La page demandée est introuvable. Essayez d'accéder <br />à la
        page d'accueil des Salaisons de la Brèche,
        <a href="https://www.salaisonsdelabreche.com"> en cliquant ici !</a>
      </p>
    </section>
  );
}
