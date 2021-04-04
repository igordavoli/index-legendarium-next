import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/Globals";
import { ThemesContext } from "../contexts/ThemesContext";

export const themes = {
  light: {
    border: {
      radius: "7px",
      border: "1px solid #d3e5dc",
    },
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.25)",
    colors: {
      gradient:
        "radial-gradient(50% 1445.4% at -1.91% 50%, #219653 0%, #27ae60 100%)",
      linearGradient: "linear-gradient(345deg, #219653 0%, #27ae60 100%);",
      primary: "#fafafa",
      secundary: "#cccccc",
      inputColor: "#f5f8fa",
      primaryHover: "#d8dfdb",
      secundaryHover: "#d8dfdb",
      formBackground: "#f0f0f0",
      tertiaryHover: "#77e9a233",
      button: "#e7f0eb",
    },
    font: {
      primary: "Playfair Display",
      secundary: "sans-serif",
      colorPrimary: "#67776b",
      SecudaryColor: "#91A79A",
      tertiaryColor: "#219653",
    },
    svg: {
      primaryFill: "#27ae60",
      secundaryFill: "#91A79A",
    },
  },

  dark: {
    border: {
      radius: "7px",
      border: "1px solid #555",
    },
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.25)",
    colors: {
      gradient:
        "radial-gradient(50% 1445.4% at -1.91% 50%, #303033 0%, #444849 100%)",
      linearGradient: "linear-gradient(345deg, #303033 0%, #545859 100%);",
      primary: "#484f4e",
      secundary: "#2d2d2d",
      inputColor: "#616a69",
      inputBorder: "#d3e5dc",
      primaryHover: "#686f6e",
      formBackground: "#484f4e",
      secundaryHover: "#404447aa",
      tertiaryHover: "#666a6b",
      button: "#616a69",
    },
    font: {
      primary: "Playfair Display",
      secundary: "sans-serif",
      colorPrimary: "#fefefe",
      SecudaryColor: "#f0f0f0",
      tertiaryColor: "#27ae60",
    },
    svg: {
      primaryFill: "#fefefe",
      secundaryFill: "#fefefe",
    },
  },
};

const Theme = ({ children }) => {
  const { theme } = useContext(ThemesContext);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
export default Theme;
