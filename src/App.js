import "./styles/Present.css";
import "./styles/Header.css";
import "./styles/Promotion.css";
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
import "./styles/Desc.css";

import Header from "./components/Header";
import Present from "./components/Present";
import Promotion from "./components/Promotion";
import PromotionTitle from "./components/PromotionTitle";
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
import Search from "./components/Search";
import Histoire from "./components/Histoire";
import Nosproduits from "./components/Nosproduits";
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
import ArtisanaleDesc from "./components/ArtisanaleDesc";
import TraditionnelleDesc from "./components/TraditionnelleDesc";
import CuireDesc from "./components/CuireDesc";
import SpecialiteDesc from "./components/SpecialiteDesc";
import GrignotageDesc from "./components/GrignotageDesc";
import AllegeeDesc from "./components/AllegeDesc";

import axios from "axios";
import HowToOrder from "./components/HowToOrder";
import OrderSuccess from "./components/OrderSuccess";
import LoginRequired from "./components/LoginRequired";

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
              <section className="promotion">
                <PromotionTitle />
                <Promotion />
              </section>
              <Footer />
            </AppStateProvider>
          </>
        }
      />
      <Route
        path="/nossaucissons"
        element={
          <>
            <Header />
            <NosSaucissonsDesc />
            <Footer />
          </>
        }
      />
      <Route
        path="/nossaucissons/artisanale"
        element={
          <>
            <AppStateProvider>
              <Header />
              <NosSaucissonsDesc />
              <ArtisanaleDesc />
              <Artisanales />
              <Footer />
            </AppStateProvider>
          </>
        }
      />
      <Route
        path="/nossaucissons/traditionnelle"
        element={
          <>
            <AppStateProvider>
              <Header />
              <NosSaucissonsDesc />
              <TraditionnelleDesc />
              <Traditionnelle />
              <Footer />
            </AppStateProvider>
          </>
        }
      />
      <Route
        path="/nossaucissons/cuires"
        element={
          <>
            <AppStateProvider>
              <Header />
              <NosSaucissonsDesc />
              <CuireDesc />
              <Cuire />
              <Footer />
            </AppStateProvider>
          </>
        }
      />
      <Route
        path="/nossaucissons/specialite"
        element={
          <>
            <AppStateProvider>
              <Header />
              <NosSaucissonsDesc />
              <SpecialiteDesc />
              <Specialite />
              <Footer />
            </AppStateProvider>
          </>
        }
      />
      <Route
        path="/nossaucissons/grignotage"
        element={
          <>
            <AppStateProvider>
              <Header />
              <NosSaucissonsDesc />
              <GrignotageDesc />
              <Grignotage />
              <Footer />
            </AppStateProvider>
          </>
        }
      />
      <Route
        path="/nossaucissons/allegee"
        element={
          <>
            <AppStateProvider>
              <Header />
              <NosSaucissonsDesc />
              <AllegeeDesc />
              <Allegee />
              <Footer />
            </AppStateProvider>
          </>
        }
      />
      <Route
        path="/nosselection"
        element={
          <>
            <Header />
            <Aide />
            <NosSelectionDesc />
            <Footer />
          </>
        }
      />
      <Route
        path="/nosselection/jambon"
        element={
          <>
            <AppStateProvider>
              <Header />
              <Aide />
              <ToUp />
              <NosSelectionDesc />
              <Jambon />
              <Footer />
            </AppStateProvider>
          </>
        }
      />
      <Route
        path="/nosselection/terrine"
        element={
          <>
            <AppStateProvider>
              <Header />
              <Aide />
              <ToUp />
              <NosSelectionDesc />
              <Terrine />
              <Footer />
            </AppStateProvider>
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
        path="/search"
        element={
          <>
            <AppStateProvider>
              <Header />
              <Aide />
              <ToUp />
              <Search />
              <Footer />
            </AppStateProvider>
          </>
        }
      />
      <Route
        path="/histoire"
        element={
          <>
            <Header />
            <ToUp />
            <Histoire />
            <Footer />
          </>
        }
      />
      <Route
        path="/nosproduits"
        element={
          <>
            <AppStateProvider>
              <Header />
              <Nosproduits />
              <Footer />
            </AppStateProvider>
          </>
        }
      />
      <Route
        path="/commande"
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
        path="/astuce"
        element={
          <>
            <Header />
            <HowToOrder />
            <Footer />
          </>
        }
      />
      <Route
        path="/commande/success"
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
        path="/mescommandes"
        element={
          <>
            <Header />
            <MesCommande />
            <Footer />
          </>
        }
      />
      <Route
        path="/mescommandes/detail"
        element={
          <>
            <Header />
            <DetailCommande />
            <Footer />
          </>
        }
      />
      <Route
        path="/lescommandes"
        element={
          <>
            <Header />
            <LesCommandes />
            <Footer />
          </>
        }
      />
      <Route
        path="/lescommandes/detail"
        element={
          <>
            <Header />
            <ManageCommande />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
