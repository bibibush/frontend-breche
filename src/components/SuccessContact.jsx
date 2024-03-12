import gsap from "gsap";
import { useEffect } from "react";

export default function SuccessContact() {
  useEffect(() => {
    gsap.to(document.querySelector(".contact-pass .h1_bar"), {
      opacity: 1,
      scale: 1,
      duration: 1,
    });
  }, []);
  return (
    <section className="contact-pass">
      <h1>
        Votre demande a bien été envoyée.
        <div className="h1_bar"></div>
      </h1>
      <h2>
        Vous allez recevoir d’ici quelques minutes un mail de confirmation
        d’envoi sur l’adresse mail que vous avez indiquée.
        <br />
        S’il n’apparaît pas dans votre boîte de réception, pensez à vérifier vos
        courriers indésirables ou SPAM. 🙂
      </h2>
      <button>
        <a href="/">Retour à la page d'accueil</a>
      </button>
    </section>
  );
}
