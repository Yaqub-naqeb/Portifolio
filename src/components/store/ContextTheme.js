"use client";

import { createContext, useEffect, useReducer } from "react";

export const themeContext = createContext();

export const THEME_STORAGE_KEY = "yaqwb-theme-mode";

const isLightFromDom = () =>
  typeof document === "undefined" ||
  !document.documentElement.classList.contains("dark");

const applyTheme = (isLight) => {
  document.documentElement.classList.toggle("dark", !isLight);
  document.documentElement.classList.toggle("dark-scrollbar", !isLight);
  document.body.classList.toggle("dark-scrollbar", !isLight);
  document.documentElement.style.colorScheme = isLight ? "light" : "dark";
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, isLight ? "light" : "dark");
  } catch {
    // ignore
  }
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

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    mode: true,
    un: false,
  });

  useEffect(() => {
    dispatch({ type: "CHANGE_MODE", payload: isLightFromDom() });
  }, []);

  const changeMode = (isLight) => {
    applyTheme(isLight);
    dispatch({ type: "CHANGE_MODE", payload: isLight });
  };

  const Under = (un) => {
    dispatch({ type: "CHANGE_UNDER", payload: un });
  };

  return (
    <themeContext.Provider value={{ ...state, changeMode, Under }}>
      {children}
    </themeContext.Provider>
  );
}
