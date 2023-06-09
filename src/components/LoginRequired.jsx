import axios from "axios";
import { useCallback } from "react";
import { Button, Form } from "react-bootstrap";

export default function LoginRequired() {
  const login = useCallback(() => {
    const formdata = new FormData(document.getElementById("login"));

    axios
      .post("/api/login/", formdata)
      .then((res) => {
        console.log("login success", res);
        window.location.href = "/astuce";
      })
      .catch((err) => {
        console.log("login fail", err.response);
        alert(err.response.statusText);
      });
  }, []);

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
          <Button variant="success" onClick={login}>
            Connectez-vous
          </Button>
        </Form>
      </div>
      <div className="ps">
        <p>
          Si vous n'avez pas votre compte, vous devez nous contacter pour
          recevoir un compte
        </p>
      </div>
    </section>
  );
}