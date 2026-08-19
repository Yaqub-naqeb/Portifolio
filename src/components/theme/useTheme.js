"use client";

import { useContext } from "react";
import { themeContext } from "./ThemeProvider";

export default function useTheme() {
  const theme = useContext(themeContext);
  if (theme === undefined) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return theme;
}
