import { useState, createContext } from "react";
import { ThemeStore } from "./ThemesContext";
import Theme from "../themes/Theme";
import { api } from "../services/api";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  async function handlerSubmit(event) {
    event.preventDefault();

    const response = await api.post("signIn", { email, password });

    const { token, userData, message } = response.data;

    console.log(userData);
    console.log({ token });
    console.log(message);
  }
  return (
    <ThemeStore>
      <Theme>
        <LoginContext.Provider
          value={{ setEmail, setPassword, userData, token, handlerSubmit }}
        >
          {children}
        </LoginContext.Provider>
        ;
      </Theme>
    </ThemeStore>
  );
}

export { LoginContext, LoginProvider };
