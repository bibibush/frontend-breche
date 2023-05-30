import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
  const { putName, putEntreprise, putAdresse, putNumero, putEmail } =
    useContext(AppStateContext);

  return { putName, putEntreprise, putAdresse, putNumero, putEmail };
}
