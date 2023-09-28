import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NosSaucissonsDesc() {
  return (
    <section className="nossaucissons-desc">
      <div className="desc-cover"></div>

      <div className="desc">
        <h1>Nos Saucissons</h1>
        <h2>desc</h2>
      </div>
      <ButtonGroup size="lg" className="mb-2">
        <Link to="/nossaucissons/artisanale">
          <Button>
            Gamme <br />
            Artisanale
          </Button>
        </Link>
        <Link to="/nossaucissons/traditionnelle">
          <Button>
            Gamme <br />
            Traditionnelle
          </Button>
        </Link>
        <Link to="/nossaucissons/cuires">
          <Button>
            Gamme <br />
            Cuires
          </Button>
        </Link>
        <Link to="/nossaucissons/specialite">
          <Button>
            Gamme <br />
            Spécialité
          </Button>
        </Link>
        <Link to="/nossaucissons/grignotage">
          <Button>
            Gamme <br />
            Grignotage
          </Button>
        </Link>
        <Link to="/nossaucissons/allegee">
          <Button>
            Gamme <br />
            Allégé
          </Button>
        </Link>
      </ButtonGroup>
    </section>
  );
}
