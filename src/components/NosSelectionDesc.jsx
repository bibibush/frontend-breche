import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NosSelectionDesc() {
  return (
    <section className="nosselection-desc">
      <div className="desc-cover"></div>
      <div className="desc">
        <h1>Nos Selections</h1>
      </div>
      <ButtonGroup size="lg" className="mb-2">
        <Link to="/nos-selection/jambons">
          <Button>Jambons</Button>
        </Link>
        <Link to="/nos-selection/terrines">
          <Button>Terrines</Button>
        </Link>
      </ButtonGroup>
    </section>
  );
}
