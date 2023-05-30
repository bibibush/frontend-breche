import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NosSelectionDesc() {
  return (
    <section className="nosselection-desc">
      <div className="desc-cover"></div>
      <div className="desc">
        <h1>Nos Selection</h1>
        <h2>desc</h2>
      </div>
      <ButtonGroup size="lg" className="mb-2">
        <Link to="/nosselection/jambon">
          <Button>
            Gamme <br />
            Jambon
          </Button>
        </Link>
        <Link to="/nosselection/terrine">
          <Button>
            Gamme <br />
            Terrines
          </Button>
        </Link>
      </ButtonGroup>
    </section>
  );
}
