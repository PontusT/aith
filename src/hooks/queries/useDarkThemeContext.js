import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";

export function useDarkThemeContext() {
  return useContext(DarkModeContext);
}
