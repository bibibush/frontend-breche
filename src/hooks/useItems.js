import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useItems() {
  const items = useContext(AppStateContext);

  return items;
}
