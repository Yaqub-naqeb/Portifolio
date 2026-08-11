import React, { createContext, useEffect, useReducer } from "react";

export const themeContext = createContext();

const STORAGE_KEY = "yaqwb-theme-mode";

const getInitialMode = () => {
  if (typeof window === "undefined") return false;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light") return true;
    if (stored === "dark") return false;
  } catch {
    // ignore storage errors
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches;
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    case "CHANGE_UNDER":
      return { ...state, un: action.payload };
    default:
      return state;
  }
};

export function ContextTheme(props) {
  const [state, dispatch] = useReducer(themeReducer, {
    mode: getInitialMode(),
    un: false,
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, state.mode ? "light" : "dark");
    } catch {
      // ignore storage errors
    }
  }, [state.mode]);

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  const Under = (un) => {
    dispatch({ type: "CHANGE_UNDER", payload: un });
  };

  return (
    <themeContext.Provider value={{ ...state, changeMode, Under }}>
      {props.children}
    </themeContext.Provider>
  );
}
