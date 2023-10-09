export default function Logos() {
  return (
    <section className="logos">
      <div className="logos_flex">
        <div className="logos_flex_rond">
          <img src="images/logo artisan.png" alt="Logo artisan" />
        </div>
        <div className="logos_flex_rond">
          <img src="images/나뭇잎.png" alt="Fleur naturelle" />
        </div>
        <div className="logos_flex_rond">
          <img src="images/모래시계.png" alt="Affinage lent" />
        </div>
        <div className="logos_flex_rond">
          <img src="images/돋보기.png" alt="Logo viandes sélectionnées" />
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
