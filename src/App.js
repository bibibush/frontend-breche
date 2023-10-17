import "./styles/Present.css";
import "./styles/Header.css";
// import "./styles/Promotion.css";
import "./styles/Generation.css";
import "./styles/Lyonnais.css";
import "./styles/Explanation.css";
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
import "./styles/Search.css";
import "./styles/Histoire.css";
import "./styles/Nosproduits.css";
import "./styles/CommandeCSE.css";
import "./styles/Where.css";
import "./styles/HowToOrder.css";
import "./styles/OrderSuccess.css";
import "./styles/NotreHistoire.css";
import "./styles/LoginRequired.css";
import "./styles/MesCommande.css";
import "./styles/DetailCommande.css";
// import image from "./images/159050523548392000-arbresle-ouest-lyonnais-monts-beaujolais-pierres-dorees-nature-ot-pays-de-l-arbresle-emmanuelle-guellec.jpg";
import "./styles/Logos.css";
// import "./styles/Offcanvas.css";
import "./styles/PasCompte.css";
import "./styles/Calendar.css";

import Header from "./components/Header";
import Present from "./components/Present";
// import Promotion from "./components/Promotion";
// import PromotionTitle from "./components/PromotionTitle";
// import Explanation from "./components/Explanation";
// import Generation from "./components/Generation";
// import Lyonnais from "./components/Lyonnais";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NosSaucissonsDesc from "./components/NosSaucissonsDesc";
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
// import Search from "./components/Search";
import Aide from "./components/Aide";
import ToUp from "./components/ToUp";
// import Where from "./components/Where";
import CommandeCSE from "./components/CommandeCSE";
import NotreHistoire from "./components/NotreHistoire";
import MesCommande from "./components/MesCommande";
import LesCommandes from "./components/LesCommandes";
import DetailCommande from "./components/DetailCommande";
import ManageCommande from "./components/ManageCommande";
import Logos from "./components/Logos";
// import Offcanvasss from "./components/Offcanvas";

import axios from "axios";
import HowToOrder from "./components/HowToOrder";
import OrderSuccess from "./components/OrderSuccess";
import LoginRequired from "./components/LoginRequired";
import PasCompte from "./components/PasCompte";
import Calendar from "./components/Calendar";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AppStateProvider>
              <Header />
              <Aide />
              <ToUp />
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
          </>
        }
      />
      <Route
        path="/nos-saucissons"
        element={
          <>
            <Header />
            <div className="margin" style={{ paddingTop: "165px" }}></div>
            <NosSaucissonsDesc />
            <Footer />
          </>
        }
      />
      <Route
        path="/nos-saucissons/artisanale"
        element={
          <>
            <Header />
            <Artisanales />
            <Footer />
          </>
        }
      />
      <Route
        path="/nos-saucissons/traditionnelle"
        element={
          <>
            <Header />
            <Traditionnelle />
            <Footer />
          </>
        }
      />
      <Route
        path="/nos-saucissons/cuires"
        element={
          <>
            <Header />
            <Cuire />
            <Footer />
          </>
        }
      />
      <Route
        path="/nos-saucissons/spécialité"
        element={
          <>
            <Header />
            <Specialite />
            <Footer />
          </>
        }
      />
      <Route
        path="/nos-saucissons/grignotage"
        element={
          <>
            <Header />
            <Grignotage />
            <Footer />
          </>
        }
      />
      <Route
        path="/nos-saucissons/allégé"
        element={
          <>
            <Header />
            <Allegee />
            <Footer />
          </>
        }
      />
      <Route
        path="/nos-selection"
        element={
          <>
            <Header />
            <NosSelectionDesc />
            <Footer />
          </>
        }
      />
      <Route
        path="/nos-selection/jambon"
        element={
          <>
            <Header />
            <Jambon />
            <Footer />
          </>
        }
      />
      <Route
        path="/nos-selection/terrine"
        element={
          <>
            <Header />
            <Terrine />
            <Footer />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Header />
            <ContactNous />
            <Footer />
          </>
        }
      />
      <Route
        path="/commande-cse"
        element={
          <>
            <AppStateProvider>
              <Header />
              <Aide />
              <CommandeCSE />
              <Footer />
            </AppStateProvider>
          </>
        }
      />
      <Route
        path="/télécharge-cse"
        element={
          <>
            <Header />
            <HowToOrder />
            <Footer />
          </>
        }
      />
      <Route
        path="/commande-cse/success"
        element={
          <>
            <Header />
            <OrderSuccess />
            <Footer />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Header />
            <LoginRequired />
            <Footer />
          </>
        }
      />
      <Route
        path="/mes-commandes"
        element={
          <>
            <Header />
            <MesCommande />
            <Footer />
          </>
        }
      />
      <Route
        path="/mes-commandes/detail"
        element={
          <>
            <Header />
            <DetailCommande />
            <Footer />
          </>
        }
      />
      <Route
        path="/les-commandes"
        element={
          <>
            <Header />
            <LesCommandes />
            <Footer />
          </>
        }
      />
      <Route
        path="/les-commandes/detail"
        element={
          <>
            <Header />
            <ManageCommande />
            <Footer />
          </>
        }
      />
      <Route
        path="/demander-compte"
        element={
          <>
            <Header />
            <PasCompte />
            <Footer />
          </>
        }
      />
      <Route
        path="/les-commandes/gestion"
        element={
          <>
            <Header />
            <Calendar />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
