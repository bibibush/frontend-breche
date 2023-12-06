import "./styles/Present.css";
import "./styles/Header.css";
// import "./styles/Promotion.css";
import "./styles/Footer.css";
import "./styles/NosSaucissonsDesc.css";
import "./styles/Artisanales.css";
import "./styles/Traditionnelle.css";
import "./styles/Cuire.css";
import "./styles/Specialite.css";
import "./styles/Grignotage.css";
import "./styles/Allegee.css";
import "./styles/Jambon.css";
import "./styles/NosSelectionDesc.css";
import "./styles/Terrine.css";
import "./styles/ContactNous.css";
// import "./styles/Nosproduits.css";
// import "./styles/CommandeCSE.css";
// import "./styles/HowToOrder.css";
// import "./styles/OrderSuccess.css";
import "./styles/NotreHistoire.css";
// import "./styles/LoginRequired.css";
// import "./styles/MesCommande.css";
// import "./styles/DetailCommande.css";
import "./styles/Logos.css";
// import "./styles/Offcanvas.css";
// import "./styles/PasCompte.css";
// import "./styles/Calendar.css";
import "./styles/NotFound.scss";
// import "./styles/UserInfo.scss";

import Header from "./components/Header";
import Present from "./components/Present";
// import Promotion from "./components/Promotion";
// import PromotionTitle from "./components/PromotionTitle";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NosSaucissonsDesc from "./components/NosSaucissonsDesc";
import NosSaucissonsDescMobile from "./components/NosSaucissonsDescMobile";
import AppStateProvider from "./providers/AppStateProvider";
import Artisanales from "./components/Artisanales";
import Traditionnelle from "./components/Traditionnelle";
import Cuire from "./components/Cuire";
import Specialite from "./components/Specialite";
import Grignotage from "./components/Grignotage";
import Allegee from "./components/Allegee";
import Jambon from "./components/Jambon";
import NosSelectionDesc from "./components/NosSelectionDesc";
import Terrine from "./components/Terrine";
import ContactNous from "./components/ContactNous";
// import CommandeCSE from "./components/CommandeCSE";
import NotreHistoire from "./components/NotreHistoire";
// import MesCommande from "./components/MesCommande";
// import LesCommandes from "./components/LesCommandes";
// import DetailCommande from "./components/DetailCommande";
// import ManageCommande from "./components/ManageCommande";
import Logos from "./components/Logos";
// import Offcanvasss from "./components/Offcanvas";

import axios from "axios";
// import HowToOrder from "./components/HowToOrder";
// import OrderSuccess from "./components/OrderSuccess";
// import LoginRequired from "./components/LoginRequired";
// import PasCompte from "./components/PasCompte";
// import Calendar from "./components/Calendar";
import NotFound from "./components/NotFound";
// import UserInfo from "./components/UserInfo";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppStateProvider>
            <Header />
            <Present />
            <Logos />
            <NotreHistoire />
            <NosSaucissonsDesc />
            {/* <section className="promotion">
                <PromotionTitle />
                <Promotion />
              </section> */}
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/nos-saucissons"
        element={
          <AppStateProvider>
            <Header />
            <NosSaucissonsDescMobile />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/nos-saucissons/artisanale"
        element={
          <AppStateProvider>
            <Header />
            <Artisanales />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/nos-saucissons/traditionnelle"
        element={
          <AppStateProvider>
            <Header />
            <Traditionnelle />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/nos-saucissons/cuires"
        element={
          <AppStateProvider>
            <Header />
            <Cuire />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/nos-saucissons/spécialité"
        element={
          <AppStateProvider>
            <Header />
            <Specialite />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/nos-saucissons/grignotage"
        element={
          <AppStateProvider>
            <Header />
            <Grignotage />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/nos-saucissons/allégé"
        element={
          <AppStateProvider>
            <Header />
            <Allegee />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/nos-selection"
        element={
          <AppStateProvider>
            <Header />
            <NosSelectionDesc />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/nos-selection/jambon"
        element={
          <AppStateProvider>
            <Header />
            <Jambon />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/nos-selection/terrine"
        element={
          <AppStateProvider>
            <Header />
            <Terrine />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/contact"
        element={
          <AppStateProvider>
            <Header />
            <ContactNous />
            <Footer />
          </AppStateProvider>
        }
      />
      {/* <Route
        path="/commande-cse"
        element={
          <>
            <AppStateProvider>
              <Header />
              <CommandeCSE />
              <Footer />
            </AppStateProvider>
          </>
        }
      />
      <Route
        path="/télécharge-cse"
        element={
          <AppStateProvider>
            <Header />
            <HowToOrder />
            <Footer />
          </AppStateProvider>
        }
      /> */}
      {/* <Route
        path="/commande-cse/success"
        element={
          <AppStateProvider>
            <Header />
            <OrderSuccess />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/login"
        element={
          <AppStateProvider>
            <Header />
            <LoginRequired />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/mes-commandes"
        element={
          <AppStateProvider>
            <Header />
            <MesCommande />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/mes-commandes/detail"
        element={
          <AppStateProvider>
            <Header />
            <DetailCommande />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/les-commandes"
        element={
          <AppStateProvider>
            <Header />
            <LesCommandes />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/les-commandes/detail"
        element={
          <AppStateProvider>
            <Header />
            <ManageCommande />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/demander-compte"
        element={
          <AppStateProvider>
            <Header />
            <PasCompte />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/les-commandes/gestion"
        element={
          <AppStateProvider>
            <Header />
            <Calendar />
            <Footer />
          </AppStateProvider>
        }
      />
      <Route
        path="/user"
        element={
          <AppStateProvider>
            <Header />
            <UserInfo />
            <Footer />
          </AppStateProvider>
        }
      /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
