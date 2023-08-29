import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
  const [artisanales] = useState([
    {
      id: "a-01",
      title: "Saucisson ARTISANAL 250g",
      category: "saucisson nature artisanal 250g",
      price: 10,
      desc: "Saucisson ARTISANAL 250g",
      imgurl: "images/250 nature.JPG",
    },
    {
      id: "a-02",
      title: "Saucisson ARTISANAL\n bridé main 400g",
      category: "saucisson nature artisanal bride main 400",
      price: 10,
      desc: "Saucisson ARTISANAL bridé main 400g",
      imgurl: "images/IMG_3860.JPG",
    },
    {
      id: "a-03",
      title: "Saucisson ARTISANAL\n Courbe 300-400g",
      category: "Saucisson nature ARTISANAL Courbe 300g 400g",
      price: 10,
      desc: "Saucisson ARTISANAL Courbe 300-400g",
      imgurl: "images/single saus.png",
    },
    {
      id: "a-04",
      title: "Saucisson ARTISANAL\n bridé 600-700g",
      category: "Saucisson nature ARTISANAL bride 600g 700g",
      price: 10,
      desc: "Saucisson ARTISANAL bridé 600-700g",
      imgurl: "images/single saus.png",
    },
  ]);
  const [traditionnelles] = useState([
    {
      id: "b-01",
      title: "Saucisson Bridé 400g",
      category: "Saucisson traditionnelles Bride 400g",
      price: 20,
      desc: "Saucisson Bridé 400g",
      imgurl: "images/single saus.png",
    },
    {
      id: "b-02",
      title: "Saucisson Bridé 600-700g",
      category: "Saucisson traditionnelles Bride 600g 700g",
      price: 20,
      desc: "Saucisson Bridé 600-700g",
      imgurl: "images/7-800 nature.JPG",
    },
    {
      id: "b-03",
      title: "Saucisson 650g",
      category: "Saucisson traditionnelles 650g",
      price: 20,
      desc: "Saucisson 650g",
      imgurl: "images/650.JPG",
    },
    {
      id: "b-04",
      title: "Saucisse droite 250g",
      category: "Saucisse traditionnelles droite 250g",
      price: 20,
      desc: "Saucisse droite 250g",
      imgurl: "images/single saus.png",
    },
    {
      id: "b-05",
      title: "Mini-rosette 400g",
      category: "Mini-rosette traditionnelles 400g",
      price: 20,
      desc: "Mini-rosette 400g",
      imgurl: "images/single saus.png",
    },
    {
      id: "b-06",
      title: "Rosette 1 - 1.2kg",
      category: "Rosette traditionnelles 1kg 1.2kg",
      price: 20,
      desc: "Rosette 1 - 1.2kg",
      imgurl: "images/Rosette Complete.png",
    },
  ]);
  const [cuires] = useState([
    {
      id: "c-01",
      title: "Saucisson à cuire des Monts du Lyonnais 400g",
      category: "Saucisson a cuire des Monts du Lyonnais 400g",
      price: 30,
      desc: "Saucisson à cuire des Monts du Lyonnais 400g",
      imgurl: "images/single saus.png",
    },
    {
      id: "c-02",
      title: "Saucisson à cuire des Monts du Lyonnais à la Pistache 3% 400g",
      category: "Saucisson a cuire des Monts du Lyonnais a la Pistache 3% 400g",
      price: 30,
      desc: "Saucisson à cuire des Monts du Lyonnais à la Pistache 3% 400g",
      imgurl: "images/single saus.png",
    },
    {
      id: "c-03",
      title:
        "Saucisson à cuire des Monts du Lyonnais à la Truffe Française 3% 400g",
      category:
        "Saucisson a cuire des Monts du Lyonnais a la Truffe Française 3% 400g",
      price: 30,
      desc: "Saucisson à cuire des Monts du Lyonnais à la Truffe Française 3% 400g",
      imgurl: "images/single saus.png",
    },
    {
      id: "c-04",
      title: `Sabodet à cuire des Monts du
      Lyonnais 600g`,
      category: "Sabodet a cuire des Monts du Lyonnais 600g",
      price: 30,
      desc: "Sabodet à cuire des Monts du Lyonnais 600g",
      imgurl: "images/single saus.png",
    },
  ]);
  const [specialites] = useState([
    {
      id: "d-01",
      title: "Saucisson pur porc",
      category: "Saucisson spécialités specialites pur porc 200g",
      price: 40,
      desc: "Saucisson pur porc",
      imgurl: "images/bn200.JPG",
    },
    {
      id: "d-02",
      title: "Saucisson aux noisettes",
      category: "Saucisson spécialités specialites aux noisettes 200g",
      price: 40,
      desc: "Saucisson aux noisettes",
      imgurl: "images/single saus.png",
    },
    {
      id: "d-03",
      title: "Saucisson aux cèpes",
      category: "saucisson spécialités specialites cepes 200g",
      price: 40,
      desc: "Saucisson aux cèpes",
      imgurl: "images/single saus.png",
    },
    {
      id: "d-04",
      title: "Saucisson au beaufort",
      category: "saucisson spécialités specialites fromages 200g",
      price: 40,
      desc: "Saucisson au beaufort",
      imgurl: "images/single saus.png",
    },
    {
      id: "d-05",
      title: `Saucisson au 
      Porc et Sanglier`,
      category: "saucisson spécialités specialites gibier 200g",
      price: 40,
      desc: "Saucisson au Porc et Sanglier",
      imgurl: "images/single saus.png",
    },
    {
      id: "d-06",
      title: "Saucisson aux noix",
      category: "saucisson spécialités specialites 200g",
      price: 40,
      desc: "Saucisson aux noix",
      imgurl: "images/single saus.png",
    },
    {
      id: "d-07",
      title: `Saucisson au
      fromage de chèvre`,
      category: "saucisson spécialités specialites fromages 200g",
      price: 40,
      desc: "Saucisson au fromage de chèvre",
      imgurl: "images/single saus.png",
    },
    {
      id: "d-08",
      title: "Saucisson au roquefort",
      category: "saucisson spécialités specialites fromages 200g",
      price: 40,
      desc: "Saucisson au roquefort",
      imgurl: "images/saucisson-sec-parfume-salaisons-du-velay.jpg",
    },
    {
      id: "d-09",
      title: "Saucisson aux figues",
      category: "saucisson spécialités specialites 200g",
      price: 40,
      desc: "Saucisson aux figues",
      imgurl:
        "images/saucisson-sec-reduit-en-matieres-grasses-salaisons-du-velay.jpg",
    },
    {
      id: "d-10",
      title: "Saucisson pimenté",
      category: "saucisson spécialités specialites pimente 200g",
      price: 40,
      desc: "Saucisson pimenté",
      imgurl: "images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg",
    },
    {
      id: "d-11",
      title: "Saucisson au Porc et Cerf",
      category: "saucisson spécialités specialites 200g",
      price: 40,
      desc: "Saucisson au Porc et Cerf",
      imgurl: "images/saucisson-sec-parfume-salaisons-du-velay.jpg",
    },
    {
      id: "d-12",
      title: `Saucisson au
       Porc et Taureau`,
      category: "saucisson spécialités specialites gibier 200g",
      price: 40,
      desc: "Saucisson au Porc et Taureau",
      imgurl:
        "images/saucisson-sec-reduit-en-matieres-grasses-salaisons-du-velay.jpg",
    },
    {
      id: "d-13",
      title: "Saucisson aux olives",
      category: "saucisson spécialités specialites 200g",
      price: 40,
      desc: "Saucisson aux olives",
      imgurl: "images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg",
    },
    {
      id: "d-14",
      title: "Sauci'flette",
      category: "saucisson spécialités specialites 200g fromages",
      price: 40,
      desc: "Emmental et oignons frits",
      imgurl: "images/saucisson-sec-parfume-salaisons-du-velay.jpg",
    },
    {
      id: "d-15",
      title: "Saucisson aux myrtilles",
      category: "saucisson spécialités specialites 200g",
      price: 40,
      desc: "Saucisson aux myrtilles",
      imgurl:
        "images/saucisson-sec-reduit-en-matieres-grasses-salaisons-du-velay.jpg",
    },
    {
      id: "d-16",
      title: "Saucisson au génépi",
      category: "saucisson spécialités specialites genepi 200g",
      price: 40,
      desc: "Saucisson au génépi",
      imgurl: "images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg",
    },
    {
      id: "d-17",
      title: "Saucisson herbes intérieures",
      category: "saucisson spécialités specialites interieures 200g",
      price: 40,
      desc: "Saucisson herbes intérieures",
      imgurl: "images/saucisson-sec-parfume-salaisons-du-velay.jpg",
    },
    {
      id: "d-18",
      title: "Saucisson au fenouil",
      category: "saucisson spécialités specialites 200g",
      price: 40,
      desc: `Saucisson au fenouil
      (disponible de mai à septembre)`,
      imgurl:
        "images/saucisson-sec-reduit-en-matieres-grasses-salaisons-du-velay.jpg",
    },
    {
      id: "d-19",
      title: "Saucisson à l'ail des ours",
      category: "saucisson spécialités specialites a l'ail 200g",
      price: 40,
      desc: `Saucisson à l'ail des ours
      (disponible à partir du mois de mai)`,
      imgurl: "images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg",
    },
    {
      id: "d-20",
      title: "Saucisson à l'ail",
      category: "saucisson spécialités specialites a l'ail",
      price: 40,
      desc: "Saucisson à l'ail 200g",
      imgurl: "images/saucisson-sec-parfume-salaisons-du-velay.jpg",
    },
    {
      id: "d-21",
      title: "Saucisson fumé",
      category: "saucisson spécialités specialites fume 200g",
      price: 40,
      desc: "Saucisson fumé",
      imgurl:
        "images/saucisson-sec-reduit-en-matieres-grasses-salaisons-du-velay.jpg",
    },
    {
      id: "d-22",
      title: "Saucisson cendré",
      category: "saucisson spécialités specialites cendre 200g",
      price: 40,
      desc: "Saucisson cendré",
      imgurl: "images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg",
    },
    {
      id: "d-23",
      title: "Saucisson enrobé aux Saveurs Provençales",
      category: "saucisson spécialités specialites enrobe provencales 200g",
      price: 40,
      desc: `mélange de plantes aromatiques,
       épices et fleurs`,
      imgurl: "images/saucisson-sec-parfume-salaisons-du-velay.jpg",
    },
    {
      id: "d-24",
      title: "Saucisson enrobé aux herbes de Provence",
      category: "saucisson spécialités specialites enrobe 200g",
      price: 40,
      desc: "Saucisson enrobé aux herbes de Provence",
      imgurl:
        "images/saucisson-sec-reduit-en-matieres-grasses-salaisons-du-velay.jpg",
    },
    {
      id: "d-25",
      title: "Saucisson enrobé au poivre noir",
      category: "saucisson spécialités specialites enrobe 200g",
      price: 40,
      desc: "Saucisson enrobé au poivre noir",
      imgurl: "images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg",
    },
    {
      id: "d-26",
      title: "Saucisson enrobé au piment fort concassé",
      category: "saucisson spécialités specialites concasse 200g",
      price: 40,
      desc: "Saucisson enrobé au piment fort concassé",
      imgurl: "images/saucisson-sec-parfume-salaisons-du-velay.jpg",
    },
  ]);
  const [grignotages] = useState([
    {
      id: "e-01",
      title: "Mignonettes",
      category: "grignotages Mignonettes Fagot de 8 pieces 240g environ",
      price: 40,
      desc: "Fagot de 8 pieces 240g environ",
      imgurl: "images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg",
    },
  ]);
  const [allegees] = useState([
    {
      id: "f-01",
      title: "Saucisson Allégé \nen Gras 700g",
      category: "saucisson allege",
      price: 50,
      desc: "Saucisson Allégé en Gras 700g",
      imgurl: "images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg",
    },
    {
      id: "f-02",
      title: "Demi Saucisson Allégé \nen Gras",
      category: "saucisson Demi allege",
      price: 50,
      desc: "Demi Saucisson Allégé en Gras",
      imgurl: "images/saucisson-sec-parfume-salaisons-du-velay.jpg",
    },
    {
      id: "f-03",
      title: "Filet mignon séché",
      category: "saucisson Filet mignon allege seche",
      price: 50,
      desc: "Filet mignon séché",
      imgurl:
        "images/saucisson-sec-reduit-en-matieres-grasses-salaisons-du-velay.jpg",
    },
  ]);
  const [jambons] = useState([
    {
      id: "g-01",
      title: "Jambon Sec\n Sans Os VPF",
      category: "Jambon Sec Sans Os VPF",
      price: 50,
      desc: "Jambon Sec Sans Os VPF",
      imgurl: "images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg",
    },
    {
      id: "g-02",
      title: "Jambon Sec\n Sans Os Supérieur VPF",
      category: "Jambon sec Sans Os superieur VPF",
      price: 50,
      desc: "Jambon Sec Sans Os Supérieur VPF",
      imgurl: "images/saucisson-sec-parfume-salaisons-du-velay.jpg",
    },
    {
      id: "g-03",
      title: "1/2 Jambon Sec\n Sans Os Sans Jarret VPF",
      category: "Jambon sec Sans Os Sans Jarret VPF",
      price: 50,
      desc: "1/2 Jambon Sec Sans Os Sans Jarret VPF",
      imgurl:
        "images/saucisson-sec-reduit-en-matieres-grasses-salaisons-du-velay.jpg",
    },
    {
      id: "g-04",
      title: "1/6 Jambon Sec\n Sans Os Sans Jarret VPF",
      category: "1/6 Jambon sec Sans Os Sans Jarret VPF",
      price: 50,
      desc: "1/6 Jambon Sec Sans Os Sans Jarret VPF",
      imgurl: "images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg",
    },
    {
      id: "g-05",
      title: "Jambon Sec 10 Tranches\n 250g VPF",
      category: "Jambon Sec 10 Tranches",
      price: 50,
      desc: "Jambon Sec 10 Tranches 250g VPF",
      imgurl: "images/saucisson-sec-parfume-salaisons-du-velay.jpg",
    },
  ]);
  const [terrines] = useState([
    {
      id: "h-01",
      title: "Assortiment de\n 12 Terrines de 180g",
      category: "",
      price: 50,
      desc: "Assortiment de 12 Terrines de 180g",
      imgurl: "images/saucisson-sec-auvergne-igp-salaisons-du-velay.jpg",
    },
  ]);
  const [prototypes] = useState([
    ...artisanales,
    ...traditionnelles,
    ...cuires,
    ...specialites,
    ...grignotages,
    ...allegees,
    ...jambons,
    ...terrines,
  ]);
  const [inputValue, SetInputValue] = useState({});

  const putName = useCallback((event) => {
    SetInputValue((inputValue) => {
      return {
        ...inputValue,
        name: event.target.value,
      };
    });
  }, []);
  const putEntreprise = useCallback((event) => {
    SetInputValue((inputValue) => {
      return {
        ...inputValue,
        entreprise: event.target.value,
      };
    });
  }, []);
  const putAdresse = useCallback((event) => {
    SetInputValue((inputValue) => {
      return {
        ...inputValue,
        adresse: event.target.value,
      };
    });
  }, []);
  const putNumero = useCallback((event) => {
    SetInputValue((inputValue) => {
      return {
        ...inputValue,
        numero: event.target.value,
      };
    });
  }, []);
  const putEmail = useCallback((event) => {
    SetInputValue((inputValue) => {
      return {
        ...inputValue,
        email: event.target.value,
      };
    });
  }, []);

  return (
    <AppStateContext.Provider
      value={{
        artisanales,
        traditionnelles,
        cuires,
        specialites,
        grignotages,
        allegees,
        jambons,
        terrines,
        prototypes,
        inputValue,
        putName,
        putEntreprise,
        putAdresse,
        putNumero,
        putEmail,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
