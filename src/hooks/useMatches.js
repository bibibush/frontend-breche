import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useMatches() {
  const { matches, setMatches, getMatches } = useContext(AppStateContext);
  return { matches, setMatches, getMatches };
}
