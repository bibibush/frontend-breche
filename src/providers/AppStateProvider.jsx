import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";
import axios from "axios";

const AppStateProvider = ({ children }) => {
  const [inputValue, SetInputValue] = useState({});
  const [user, setUser] = useState({});

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
      console.log("getme res", res);
      setUser(res.data);
    } catch (err) {
      console.log("err", err.response);
    }
  }, []);

  return (
    <AppStateContext.Provider
      value={{
        inputValue,
        user,
        putName,
        putEntreprise,
        putAdresse,
        putNumero,
        putEmail,
        setUser,
        getMe,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
