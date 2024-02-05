import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";
import axios from "axios";

const AppStateProvider = ({ children }) => {
  const [inputValue, SetInputValue] = useState({});
  const [user, setUser] = useState({});
  const [matches, setMatches] = useState(false);

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
  const getMe = useCallback(async () => {
    try {
      const res = await axios.get("/api/getme/");
      setUser(res.data);
    } catch (err) {
      console.log("err", err.response);
    }
  }, []);
  const getMatches = useCallback(() => {
    const media = window.matchMedia("(max-width: 767px)");
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches]);

  return (
    <AppStateContext.Provider
      value={{
        inputValue,
        user,
        matches,
        putName,
        putEntreprise,
        putAdresse,
        putNumero,
        putEmail,
        setUser,
        setMatches,
        getMe,
        getMatches,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
