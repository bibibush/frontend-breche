import { useCallback, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function Header() {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
  const [pwdshow, setPwdshow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setPwdshow(false);
  };
  const handleShow = () => {
    setShow(true);
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
  const loginEnter = useCallback((event) => {
    if (event.key === "Enter") {
      login();
    }
  }, []);
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
        if (err.response.status === 401) {
          return alert(
            "Vous devez mettre mot de passe different que l'ancienne"
          );
        }
        alert("c'est pas bon");
      });
  };
  const enterPwdChange = useCallback((e) => {
    if (e.key === "Enter") {
      pwdchange();
    }
  }, []);
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
    window.location.href = "/télécharge-cse";
  };
  const clickLogin = () => {
    window.location.href = "/login";
  };
  return (
    <header>
      <div className="header-contact">
        <div className="numero">
          <div className="material-symbols-outlined">call</div>
          <p>04 77 54 38 55</p>
        </div>
        <div className="email">
          <div className="material-symbols-outlined">mail</div>
          <p>contact@salaisonsdelabreche.com</p>
        </div>
      </div>
      <div className="up-menu">
        <a href="/">
          <img
            src="./images/logo-Salaisons-de-la-Brèche-Blanc.png"
            alt="Logo salaisons de la bréche"
            className="logo"
          />
        </a>

        <div className="sub-menu">
          <ul>
            {user.username !== "" ? (
              <>
                <li>{user.username}</li>
                <li onClick={logout}>Déconnectez-vous</li>
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
                          onKeyDown={enterPwdChange}
                          placeholder="Votre mots du passe presentielles"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Nouvelles mots du passe</Form.Label>
                        <Form.Control
                          name="new_password1"
                          type="password"
                          required
                          onKeyDown={enterPwdChange}
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
                          onKeyDown={enterPwdChange}
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
                      window.location.href = "/les-commandes";
                    }}
                  >
                    Gérer les commandes
                  </li>
                ) : (
                  <li
                    onClick={() => {
                      window.location.href = "/mes-commandes";
                    }}
                  >
                    Mes commandes
                  </li>
                )}
              </>
            ) : (
              <>
                <li onClick={handleShow}>Connectez-vous</li>
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
                          onKeyDown={loginEnter}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          name="password"
                          type="password"
                          required
                          placeholder="Password"
                          onKeyDown={loginEnter}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={login}>
                      Connectez-vous
                    </Button>
                  </Modal.Footer>
                </Modal>
                <li>
                  <a href="/demander-compte">
                    Vous n'avez pas un compte encore?
                  </a>
                </li>
              </>
            )}
          </ul>
          {/* <a className="search" href="/search">
            <input type="text" id="chercher" />
            <div className="material-symbols-outlined">search</div>
          </a> */}
        </div>
      </div>
      <div className="inner">
        <ul className="main-menu">
          <li className="NosSaucissons">
            <a href="/nos-saucissons">
              <div className="menu-name">Nos saucissons</div>
            </a>
            <div className="hidden-menu">
              <div className="inner">
                <ul>
                  <li className="hidden-menu-name">
                    <a href={"/nos-saucissons/artisanale"}>
                      <p>Gamme artisanale</p>
                    </a>
                  </li>
                  <li className="hidden-menu-name">
                    <a href="/nos-saucissons/traditionnelle">
                      <p>Gamme traditionnelle</p>
                    </a>
                  </li>
                  <li className="hidden-menu-name">
                    <a href="/nos-saucissons/cuires">
                      <p>Gamme saucisson à cuire</p>
                    </a>
                  </li>
                  <li className="hidden-menu-name">
                    <a href="/nos-saucissons/spécialité">
                      <p>Nos spécialités artisanale 200g</p>
                    </a>
                  </li>
                  <li className="hidden-menu-name">
                    <a href="/nos-saucissons/grignotage">
                      <p>Gamme grignotage</p>
                    </a>
                  </li>
                  <li className="hidden-menu-name">
                    <a href="/nos-saucissons/allégé">
                      <p>Gamme allégée</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="NosSelections">
            <a href="/nos-selection">
              <div className="menu-name">Notre selections</div>
            </a>
            <div className="hidden-menu">
              <div className="inner">
                <ul>
                  <li className="hidden-menu-name">
                    <a href={"/nos-selection/jambon"}>
                      <p>Gamme jambon</p>
                    </a>
                  </li>
                  <li className="hidden-menu-name">
                    <a href="/nos-selection/terrine">
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
