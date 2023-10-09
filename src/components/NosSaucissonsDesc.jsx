import { ButtonGroup, Button } from "react-bootstrap";

export default function NosSaucissonsDesc() {
  return (
    <section className="nossaucissons-desc">
      <div className="desc-cover"></div>

      <div className="desc">
        <h1>Nos Saucissons</h1>
        <h2>desc</h2>
      </div>
      <ButtonGroup size="lg" className="mb-2">
        <a href="/nos-saucissons/artisanale">
          <Button>
            Gamme <br />
            Artisanale
          </Button>
        </a>
        <a href="/nos-saucissons/traditionnelle">
          <Button>
            Gamme <br />
            Traditionnelle
          </Button>
        </a>
        <a href="/nos-saucissons/cuires">
          <Button>
            Gamme <br />
            Cuires
          </Button>
        </a>
        <a href="/nos-saucissons/spécialité">
          <Button>
            Gamme <br />
            Spécialité
          </Button>
        </a>
        <a href="/nos-saucissons/grignotage">
          <Button>
            Gamme <br />
            Grignotage
          </Button>
        </a>
        <a href="/nos-saucissons/allégé">
          <Button>
            Gamme <br />
            Allégé
          </Button>
        </a>
      </ButtonGroup>
    </section>
  );
}
