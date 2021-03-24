import { useState, createContext } from "react";
import { ThemeStore } from "./ThemesContext";
import Theme from "../themes/Theme";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <ThemeStore>
      <Theme>
        <LoginContext.Provider value={(userData, token)}>
          {children}
        </LoginContext.Provider>
        ;
      </Theme>
    </ThemeStore>
  );
}

export { LoginContext, LoginProvider };
