export default function PasCompte() {
  return (
    <section className="pas_compte">
      <div className="question-cover">
        <h1>
          <span>Q.</span> Comment avoir un compte?
        </h1>
      </div>
      <div className="desc">
        <h2>A.</h2>
        <h2>
          Vous devez nous contacter pour demander un compte.
          <br />
          Cliquez le link en bas et choisisez
          <span> l'objet 'demander compte'</span>
        </h2>
      </div>
      <a href="/contact">Aller pour demander un compte</a>
    </section>
  );
}
