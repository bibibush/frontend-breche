import logoArtisan from "../images/logo artisan.png";
import leaf from "../images/나뭇잎.png";
import sandwatch from "../images/모래시계.png";
import dotbogi from "../images/돋보기.png";

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
        <h2>Artisan Français</h2>
        <h2>Fleur Naturelle</h2>
        <h2>Affinage Lent</h2>
        <h2>Viandes Rigoureusement Sélectionnées</h2>
      </div>
    </section>
  );
}
