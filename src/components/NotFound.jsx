import notfound404 from "../images/404notfound.gif";

export default function NotFound() {
  return (
    <section className="notfound">
      <img src={notfound404} alt="404 page not found" />
      <p>DÉSOLE, ON NE PEUT PAS TROUVER LE PAGE</p>
    </section>
  );
}
