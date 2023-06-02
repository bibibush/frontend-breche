import { Form } from "react-bootstrap";

export default function LoginRequired() {
  return (
    <section className="login_required">
      <div className="dialogue">
        <h2>Vous devez avoir un compte pour commander CSE</h2>
        <Form id="login">
          <Form.Group className="mb-3">
            <Form.Label>Votre Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              required
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              required
              placeholder="Password"
            />
          </Form.Group>
        </Form>
        <h3>
          Si vous n'avez pas votre compte, vous devez nous contacter pour
          recevoir un compte
        </h3>
      </div>
    </section>
  );
}
