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
        <Link to="/nossaucissons">
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
            Gamme Saucisson
            <br /> à cuire
          </Button>
        </Link>
        <Link to="/nossaucissons/specialite">
          <Button>
            Nos spécialités <br />
            artisanale 200g
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
            Allégée
          </Button>
        </Link>
      </ButtonGroup>
    </section>
  );
}
