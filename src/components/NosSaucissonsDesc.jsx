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
        <a href="/nossaucissons/artisanale">
          <Button>
            Gamme <br />
            Artisanale
          </Button>
        </a>
        <a href="/nossaucissons/traditionnelle">
          <Button>
            Gamme <br />
            Traditionnelle
          </Button>
        </a>
        <a href="/nossaucissons/cuires">
          <Button>
            Gamme <br />
            Cuires
          </Button>
        </a>
        <a href="/nossaucissons/specialite">
          <Button>
            Gamme <br />
            Spécialité
          </Button>
        </a>
        <a href="/nossaucissons/grignotage">
          <Button>
            Gamme <br />
            Grignotage
          </Button>
        </a>
        <a href="/nossaucissons/allegee">
          <Button>
            Gamme <br />
            Allégé
          </Button>
        </a>
      </ButtonGroup>
    </section>
  );
}
