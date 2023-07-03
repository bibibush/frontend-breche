import { useCallback, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function Header() {
  const [user, setUser] = useState({});
  const click = () => {
    window.location.href = "/search";
  };
  const [show, setShow] = useState(false);
  const [regShow, setRegShow] = useState(false);
  const [pwdshow, setPwdshow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setRegShow(false);
    setPwdshow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handalshow = () => {
    setRegShow(true);
  };
  const pwdhandleShow = () => {
    setPwdshow(true);
  };
  const login = () => {
    const loginData = new FormData(document.getElementById("login"));

    axios
      .post("/api/login/", loginData)
      .then((res) => {
        console.log("login res", res);
        setUser(res.data);
        setShow(false);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log("login error", err.response);
        alert(err.response.statusText);
        setShow(false);
      });
  };
  const logout = () => {
    axios
      .get("/api/logout/")
      .then((res) => {
        console.log("logout res", res);
        setUser({
          username: "",
        });
      })
      .catch((err) => {
        console.log("logout error", err.response);
      });
    window.location.href = "/";
  };
  const register = () => {
    const regidata = new FormData(document.getElementById("register"));

    axios
      .post("/api/register/", regidata)
      .then((res) => {
        console.log("register res", res);
        alert("c'est tout bon");
        setRegShow(false);
      })
      .catch((err) => {
        console.log("register error", err);
        alert("c'est pas bon");
      });
  };
  const pwdchange = () => {
    const pwddata = new FormData(document.getElementById("pwdchange"));

    axios
      .post("/api/pwdchange/", pwddata)
      .then((res) => {
        console.log("pwdchange res", res);
        setPwdshow(false);
      })
      .catch((err) => {
        console.log("pwdchange error", err.response);
        alert("c'est pas bon");
      });
  };
  const getMe = useCallback(async () => {
    try {
      const res = await axios.get("/api/getme/");
      console.log("getme res", res);
      setUser(res.data);
    } catch (err) {
      console.log("getme error", err.response);
    }
  }, []);

  useEffect(() => {
    getMe();
  }, [getMe]);

  const clickCommande = () => {
    window.location.href = "/astuce";
  };
  const clickLogin = () => {
    window.location.href = "/login";
  };
  return (
    <header>
      <div className="up-menu">
        <a href="/">
          <img
            src="./images/logo-Salaisons-de-la-Brèche-Blanc.png"
            alt=""
            className="logo"
          />
        </a>

        <div className="sub-menu">
          <ul>
            {user.username !== "" ? (
              <>
                <li>{user.username}</li>
                <li onClick={logout}>Log out</li>
                <li onClick={pwdhandleShow}>Changer les mots du passe</li>
                <Modal show={pwdshow} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>CHANGEZ VOTRE MOTS DU PASSE</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form id="pwdchange">
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Votre mots du passe presentielles
                        </Form.Label>
                        <Form.Control
                          name="old_password"
                          type="password"
                          required
                          placeholder="Votre mots du passe presentielles"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Nouvelles mots du passe</Form.Label>
                        <Form.Control
                          name="new_password1"
                          type="password"
                          required
                          placeholder="Nouvelles mots du passe"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Verifiez votres nouvelles mots du passe
                        </Form.Label>
                        <Form.Control
                          name="new_password2"
                          type="password"
                          required
                          placeholder="Verifiez votres nouvelles mots du passe"
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={pwdchange}>
                      Confirmez
                    </Button>
                  </Modal.Footer>
                </Modal>
                {user.email === "contact@salaisonsdelabreche.com" ? (
                  <li
                    onClick={() => {
                      window.location.href = "/lescommandes";
                    }}
                  >
                    Gérer les commandes
                  </li>
                ) : (
                  <li
                    onClick={() => {
                      window.location.href = "/mescommandes";
                    }}
                  >
                    Mes commandes
                  </li>
                )}
              </>
            ) : (
              <>
                <li onClick={handleShow}>Log in</li>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>CONNECTEZ VOUS</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
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
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={login}>
                      Log in
                    </Button>
                  </Modal.Footer>
                </Modal>
                <li onClick={handalshow}>Register</li>
                <Modal
                  size="lg"
                  show={regShow}
                  onHide={handleClose}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      VOUS INSCRIEZ VOUS
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form id="register">
                      <Form.Group className="mb-3">
                        <Form.Label>Votre Nom</Form.Label>
                        <Form.Control
                          name="nom"
                          type="text"
                          required
                          placeholder="Votre nom"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Votre prenom</Form.Label>
                        <Form.Control
                          name="prenom"
                          type="text"
                          required
                          placeholder="Votre prenom"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Votre Numero de téléphone</Form.Label>
                        <Form.Control
                          name="phonenumber"
                          type="text"
                          required
                          placeholder="Votre Numero de téléphone"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Votre Adresse</Form.Label>
                        <Form.Control
                          name="adresse"
                          type="text"
                          required
                          placeholder="Votre Adresse"
                        />
                      </Form.Group>
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
                        <Form.Label>mots du passe</Form.Label>
                        <Form.Control
                          name="password1"
                          type="password"
                          required
                          placeholder="Password"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Mettez vous les même mots du passe
                        </Form.Label>
                        <Form.Control
                          name="password2"
                          type="password"
                          required
                          placeholder="Password"
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={register}>
                      Register
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            )}
          </ul>
          <div className="search" onClick={click}>
            <input type="text" id="chercher" />
            <div className="material-symbols-outlined">search</div>
          </div>
        </div>
      </div>
      <div className="inner">
        <ul className="main-menu">
          <li className="NosSaucissons">
            <a href="/nossaucissons">
              <div className="menu-name">Nos saucissons</div>
            </a>
            <div className="hidden-menu">
              <div className="inner">
                <ul>
                  <li className="hidden-menu-name">
                    <a href={"/nossaucissons"}>
                      <p>Gamme artisanale</p>
                    </a>
                  </li>
                  <li className="hidden-menu-name">
                    <a href="/nossaucissons/traditionnelle">
                      <p>Gamme traditionnelle</p>
                    </a>
                  </li>
                  <li className="hidden-menu-name">
                    <a href="/nossaucissons/cuires">
                      <p>Gamme saucisson à cuire</p>
                    </a>
                  </li>
                  <li className="hidden-menu-name">
                    <a href="/nossaucissons/specialite">
                      <p>Nos spécialités artisanale 200g</p>
                    </a>
                  </li>
                  <li className="hidden-menu-name">
                    <a href="/nossaucissons/grignotage">
                      <p>Gamme grignotage</p>
                    </a>
                  </li>
                  <li className="hidden-menu-name">
                    <a href="/nossaucissons/allegee">
                      <p>Gamme allégée</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="NosSelections">
            <a href="/nosselection/jambon">
              <div className="menu-name">Notre selections</div>
            </a>
            <div className="hidden-menu">
              <div className="inner">
                <ul>
                  <li className="hidden-menu-name">
                    <a href={"/nosselection/jambon"}>
                      <p>Gamme jambon</p>
                    </a>
                  </li>
                  <li className="hidden-menu-name">
                    <a href="/nosselection/terrine">
                      <p>Gamme terrine</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li onClick={user.username === "" ? clickLogin : clickCommande}>
            <div className="menu-name">Commandez CSE</div>
          </li>

          <li>
            <a href="/contact">
              <div className="menu-name contact">Contactez-nous</div>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
