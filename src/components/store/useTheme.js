"use client";

import { useContext } from "react";
import { themeContext } from "./ContextTheme";

export default function useTheme() {
  const color = useContext(themeContext);
  if (color === undefined) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return color;
}
