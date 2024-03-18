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
