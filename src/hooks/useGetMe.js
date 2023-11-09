import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useGetMe() {
  const { user, getMe, setUser } = useContext(AppStateContext);
  return { user, getMe, setUser };
}
