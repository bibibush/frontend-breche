import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototypes() {
  const {
    artisanales,
    traditionnelles,
    cuires,
    specialites,
    grignotages,
    allegees,
    jambons,
    terrines,
    prototypes,
  } = useContext(AppStateContext);

  return {
    artisanales,
    traditionnelles,
    cuires,
    specialites,
    grignotages,
    allegees,
    jambons,
    terrines,
    prototypes,
  };
}
