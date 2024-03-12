import logoArtisan from "../images/logo artisan.png";
import leaf from "../images/leaf.png";
import sandwatch from "../images/sand-clock.png";
import dotbogi from "../images/glass.png";

export default function Logos() {
  return (
    <section className="logos">
      <div className="logos_flex">
        <div className="logos_flex_rond">
          <img src={logoArtisan} alt="Logo artisan" />
        </div>
        <div className="logos_flex_rond">
          <img src={leaf} alt="Fleur naturelle" />
        </div>
        <div className="logos_flex_rond">
          <img src={sandwatch} alt="Affinage lent" />
        </div>
        <div className="logos_flex_rond">
          <img src={dotbogi} alt="Logo viandes sélectionnées" />
        </div>
      </div>
      <div className="logos_desc">
        <p>Artisan Français</p>
        <p>Fleur Naturelle</p>
        <p>Affinage Lent</p>
        <p>Viandes Rigoureusement Sélectionnées</p>
      </div>
    </section>
  );
}
