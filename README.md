# Salaisons de la Brèche

## Frontend

#### 소개

Salaisons de la Brèche라는 회사는 돼지고기를 가공해 만든 식품인 Saucisson( 쏘시쏭 )을 제조하는 회사입니다.
<br />회사가 추구하는 웹사이트의 목적은 고품질 재료와 전통적인 방법을 사용한 제품생산이라는 사실을 강조하는것 입니다. 또한 제품관련 문의를 많이 받기 때문에 회사 연락처와 문의하기 페이지를 웹사이트에 잘 나타나도록 했습니다.
<br />특히 주 고객들의 연령층이 50 ~ 80 정도의 연세가 있으신 분들이기 때문에 제품소개 페이지로 잘 도달할 수 있도록 페이지 클릭 강조 효과를 추가했습니다.

---

#### 프로젝트 구조

```
- src
  - components
  - contexts
  - hooks
  - providers
  - styles
    .
    .
    .
```

모든 컴포넌트들은 components 폴더 안에 넣었고 contexts 폴더 안에는 AppStateContext.jsx 라는 jsx 파일을 만들어

```
import React from "react";

const AppStateContext = React.createContext();

export default AppStateContext;
```

리엑트 Context를 생성했습니다.

그리고 providers 폴더 안에 AppStateProvider.jsx 파일을 만들어
함수와 state들을 hook으로 전달하기 위해 모아놨고 그 hook들은 hooks 폴더 안에 정리했습니다.

css 파일들은 styles 폴더 안에 넣었습니다.

---

### 페이지들

- 지금 서비스 되고있는 웹사이트는 제품 소개 페이지들과 '문의하기' 페이지로 이루어져있습니다. 로그인, 주문, 주문확인 등의 페이지는 아직 서비스 되고 있지 않습니다. 모든 페이지들이 포함된 코드를 보시려면 'master' branche를 'CSE' branche로 변경해 주시면 감사하겠습니다.

#### 문의하기

- ['문의하기' 페이지](https://www.salaisonsdelabreche.com/contact)
- ['문의하기' 기능 Backend 코드 보기](https://github.com/bibibush/salaisons-de-la-breche)

```
const [value, setValue] = useState("");
const [btnState, setBtnState] = useState(false);

const submit = useCallback(() => {
    setBtnState(true);
    const formdata = new FormData(document.getElementById("contact_form"));
    formdata.append("create_dt", "");
    axios
      .post("/user/contact/", formdata)
      .then((res) => {
        window.location.href = "/contact/envoyé";
      })
      .catch((err) => {
        console.log(err.response);
        alert(
          "La demande n’a pas pu être envoyée. \nMerci de renseigner correctement tous les champs obligatoires (*)."
        );
        setBtnState(false)
      });
  }, []);
```

전송 버튼을 누르면 submit 함수가 실행 되도록 하였습니다.
<br />전송이 성공적으로 실행되면 전송이 잘 되었다는 문구가 적힌 페이지로 이동이 되고 실패하면 alert 메세지를 띄웁니다.

```
{btnState ? (
        <button style={{ padding: "5px 0" }} disabled>
          <Oval width={30} height={30} secondaryColor="black" />
        </button>
      ) : (
        <button onClick={submit}>Envoyer</button>
      )}
```

전송버튼을 누르고 서버가 응답할 때까지 걸리는 시간 중에 버튼을 또 누르지 않도록 disabled 처리와 스피너가 보여지도록 했습니다.

---

#### Commandez CSE 페이지

Commandez CSE 페이지는 '주문하기' 페이지 입니다. 그런데 로그인이 안되어있는 상태로 '주문하기'페이지를 클릭하면 로그인 페이지로, 로그인이 되어있는 상태라면 '주문하기'페이지로 가게 했습니다.

```
<li onClick={user.username === "" ? clickLogin : clickCommande}>
    <div className="menu-name">Commandez CSE</div>
</li>
```

```
const clickLogin = () => {
    window.location.href = "/login";
  };
```

```
const clickCommande = () => {
    window.location.href = "/télécharge-cse";
  };
```

먼저 로그인 페이지 입니다.

```
import axios from "axios";
import { useCallback } from "react";
import { Button, Form } from "react-bootstrap";

export default function LoginRequired() {
  const login = useCallback(() => {
    const formdata = new FormData(document.getElementById("loginrequired"));

    axios
      .post("/api/login/", formdata)
      .then((res) => {
        console.log("login success", res);
        window.location.href = "/télécharge-cse";
      })
      .catch((err) => {
        console.log("login fail", err.response);
        alert(err.response.statusText);
      });
  }, []);

  const loginenter = useCallback(
    (event) => {
      if (event.key === "Enter") {
        login();
      }
    },
    [login]
  );

  return (
    <section className="login_required">
      <div className="dialogue">
        <p>Vous devez avoir un compte pour commander CSE</p>
        <Form id="loginrequired">
          <Form.Group className="mb-3">
            <Form.Label>Votre Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              required
              placeholder="Email"
              onKeyDown={loginenter}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              required
              placeholder="Password"
              onKeyDown={loginenter}
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
```

로그인 폼은 React bootstrap을 사용했고 엔터키를 눌러도 로그인이 될 수 있도록 onKeyDown을 설정했습니다.
<br />로그인이 성공하면 '주문하기'페이지로 자동으로 넘어갑니다.

주문하기 페이지 입니다.

```
export default function HowToOrder() {
  const getme = useCallback(async () => {
    try {
      const res = await axios.get("/api/getme/");
      console.log("check", res);
      if (res.data.username === "") {
        window.location.href = "/login";
      }
    } catch (err) {
      console.log(err.response);
      window.location.href = "/";
    }
  }, []);
  const { matches, setMatches, getMatches } = useMatches();

  useEffect(() => {
    getme();
    getMatches();
  }, [getme, matches]);

  const [show, setShow] = useState(false);
  return (
    <section className="order_how">
      <div className="steps">
        <div className="steps-cover"></div>
        <div className="step">
          <div className="step_num">Etape 1</div>
          {matches ? (
            <div className="desc">
              Ovrez notre site à l'ordinateur S'il vous plaît
            </div>
          ) : (
            <div className="desc">
              Téléchargez
              <strong
                style={
                  matches
                    ? {
                        fontWeight: "700",
                        fontSize: "0.8rem",
                        textDecoration: "underline",
                      }
                    : {
                        fontWeight: "700",
                        fontSize: "21px",
                        textDecoration: "underline",
                      }
                }
              >
                'MODELE Tableau CSE 2022.xlsx'
              </strong>
              fiche
            </div>
          )}
        </div>
        <div className="step">
          <div className="step_num">Etape 2</div>
          <div className="desc">Rempliez votre commande dans le fiche</div>
        </div>
        <div className="step">
          <div className="step_num">Etape 3</div>
          <div className="desc">
            Continuez finir votre commande
            <br /> comme vous appuyez le bouton 'Aller commander'
          </div>
        </div>
      </div>
      <Download />
      <BondeCommande />
      <button
        className="guide"
        onClick={() => {
          setShow(true);
        }}
      >
        Guide pour remplir le fiche
      </button>
      <button
        className="commander"
        onClick={() => {
          window.location.href = "/commande-cse";
        }}
      >
        Aller Commander
      </button>
      <Modal
        show={show}
        className="how_to-modal"
        size="lg"
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Guide pour remplir le fiche</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={conseil} alt="Guide pour commander CSE" />
          <img src={group1} alt="Guide pour commander CSE" />
          <img src={nomPrenom} alt="Guide pour commander CSE" />
          <img src={quantite} alt="Guide pour commander CSE" />
          <img src={totaltarif} alt="Guide pour commander CSE" />
          <img src={recappe} alt="Guide pour commander CSE" />
        </Modal.Body>
      </Modal>
    </section>
  );
}
```

혹시 로그인이 안되어있는 상태로 접속을 해도 바로 접속을 튕길 수 있도록
getme 함수를 정의하고 useEffect로 실행시켜줬습니다.

주문서 양식을 다운로드 받을 수 있는 Download 컴포넌트와 BondeCommande 컴포넌트를 정의해서 코드 중간에 넣었습니다.

```
import { useCallback } from "react";
import axios from "axios";
import excel from "../images/excel.png";

export default function Download() {
  const download = useCallback(async () => {
    try {
      const res = await axios.get("/api/download/", { responseType: "blob" });
      console.log(res);
      const blob = new Blob([res.data]);
      const fileObjectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = fileObjectUrl;
      link.style.display = "none";

      const injectFilename = (res) => {
        const disposition = res.headers["content-disposition"];

        const fileName = decodeURI(
          disposition
            .match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
            .replace(/['"]/g, "")
        );
        return fileName;
      };
      link.download = injectFilename(res);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(fileObjectUrl);
    } catch (err) {
      alert(err.response.statusText);
      console.log("err", err.response);
    }
  }, []);

  return (
    <div className="download" onClick={download}>
      <img src={excel} alt="Fiche excel" />
      <div className="desc">MODELE Tableau CSE 2022.xlsx</div>
      <div className="material-symbols-outlined">download</div>
    </div>
  );
}
```

Download 컴포넌트와 BondeCommande 컴포넌트는 파일과 형식만 다르기 때문에 Download 컴포넌트 코드만 보여드렸습니다.

그리고 주문서 양식을 어떻게 작성하는지의 가이드를 React bootstrap 모달창을 띄어 보여주도록 했습니다.

```
  const [show, setShow] = useState(false);

<button
  className="guide"
  onClick={() => {
  setShow(true);
    }}
>
  Guide pour remplir le fiche
</button>

<Modal
  show={show}
  className="how_to-modal"
  size="lg"
  onHide={() => {
  setShow(false);
    }}
>
        <Modal.Header closeButton>
          <Modal.Title>Guide pour remplir le fiche</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={conseil} alt="Guide pour commander CSE" />
          <img src={group1} alt="Guide pour commander CSE" />
          <img src={nomPrenom} alt="Guide pour commander CSE" />
          <img src={quantite} alt="Guide pour commander CSE" />
          <img src={totaltarif} alt="Guide pour commander CSE" />
          <img src={recappe} alt="Guide pour commander CSE" />
        </Modal.Body>
      </Modal>
```

---

#### 주문 정보 입력 및 주문서 업로드 페이지

- 주문 정보 입력 부분입니다.

```
<div className="user_info">
        <p>Votre Information</p>
        <Form id="info">
          <div className="nom-prenom">
            <Form.Group className="mb-3 nom">
              <Form.Label>Votre Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Votre Nom"
                defaultValue={user.nom}
                name="nom"
              />
            </Form.Group>
            <Form.Group className="mb-3 prenom">
              <Form.Label>Votre prenom</Form.Label>
              <Form.Control
                defaultValue={user.prenom}
                type="text"
                placeholder="Votre prenom"
                name="prenom"
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3 entreprise">
            <Form.Label>Votre entreprise</Form.Label>
            <Form.Control
              defaultValue={user.entreprise}
              type="text"
              placeholder="Votre entreprise"
              name="entreprise"
            />
          </Form.Group>
          <Form.Group className="mb-3 adresse">
            <Form.Label>Votre adresse</Form.Label>
            <Form.Control
              defaultValue={user.adresse}
              type="text"
              placeholder="Votre adresse"
              name="adresse"
            />
          </Form.Group>
          <Form.Group className="mb-3 telephone">
            <Form.Label>Votre numero de téléphone</Form.Label>
            <Form.Control
              defaultValue={user.phonenumber}
              type="tel"
              placeholder="01-23-45-67-89"
              name="phonenumber"
            />
          </Form.Group>
          <Form.Group className="mb-3 email">
            <Form.Label>Votre adresse Email</Form.Label>
            <Form.Control
              defaultValue={user.email}
              type="email"
              placeholder="name@example.com"
              name="email"
            />
          </Form.Group>
        </Form>
      </div>
```

특별할 거 없이 폼을 사용해서 코드를 작성했습니다.

주문서 업로드 와 날짜 정하는 코드입니다.

```
<label htmlFor="fileupload">
          {files.length === 0
            ? "Enregistrez votre commande ici"
            : files[0].name}
        </label>
        <input
          id="fileupload"
          type="file"
          onChange={onChangeupload}
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          required
        />
        {btnState ? (
          matches ? (
            <Button onClick={upload} disabled>
              <Oval width={20} height={20} secondaryColor="black" />
            </Button>
          ) : (
            <Button onClick={upload} disabled>
              <Oval width={40} height={40} secondaryColor="black" />
            </Button>
          )
        ) : (
          <Button onClick={upload}>Envoyer</Button>
        )}
        <div className="calendar">
          <p>Choisisez la date que vous voulez recevoir votre commande</p>
          <ReactDatePicker
            className="date"
            showMonthDropdown
            showYearDropdown
            shouldCloseOnSelect={false}
            filterDate={isWeekday}
            minDate={new Date().setDate(new Date().getDate() + 15)}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale={"fr"}
            dateFormat={"dd/ MMMM /yyyy"}
            customInput={<ExampleCustomInput />}
            disabledKeyboardNavigation
          />
        </div>
```

첨부파일을 올릴 때 엑셀 파일만 업로드 할 수 있게 하였습니다.

ReactDatePicker를 사용해 고객이 제품을 받고싶은 날짜를 정할 수 있도록 했습니다.

---
