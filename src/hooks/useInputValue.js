import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useInputValue() {
  const { inputValue } = useContext(AppStateContext);

  return inputValue;
}
