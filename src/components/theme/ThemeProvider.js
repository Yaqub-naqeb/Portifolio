"use client";

import { createContext, useEffect, useState } from "react";

export const themeContext = createContext(undefined);

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

export function ThemeProvider({ children }) {
  const [isLight, setIsLightState] = useState(true);

  useEffect(() => {
    setIsLightState(isLightFromDom());
  }, []);

  const setIsLight = (nextIsLight) => {
    applyTheme(nextIsLight);
    setIsLightState(nextIsLight);
  };

  const toggleTheme = () => {
    setIsLight(document.documentElement.classList.contains("dark"));
  };

  return (
    <themeContext.Provider value={{ isLight, setIsLight, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}
