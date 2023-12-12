import { ButtonGroup, Button } from "react-bootstrap";

export default function NosSaucissonsDescMobile() {
  return (
    <section className="nossaucissons-desc nossaucissons-mobile">
      <div className="desc-cover"></div>

      <div className="desc">
        <h1>Nos Saucissons</h1>
        <h2>desc</h2>
      </div>
      <ButtonGroup size="lg" className="mb-2">
        <a href="/nos-saucissons/artisanale">
          <Button>L'Artisanale</Button>
        </a>
        <a href="/nos-saucissons/traditionnelle">
          <Button>Le Traditionnelle</Button>
        </a>
        <a href="/nos-saucissons/cuires">
          <Button>Les Saucissons à Cuire</Button>
        </a>
        <a href="/nos-saucissons/spécialité">
          <Button>Les Spécialités</Button>
        </a>
        <a href="/nos-saucissons/grignotage">
          <Button>Le Grignotage</Button>
        </a>
        <a href="/nos-saucissons/allégé">
          <Button>L'Allégée</Button>
        </a>
      </ButtonGroup>
    </section>
  );
}
