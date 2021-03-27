import { useState, createContext, useEffect } from "react";
import { ThemeStore } from "./ThemesContext";
import Theme from "../themes/Theme";
import { api } from "../services/api";
import cookies from "js-cookie";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [isLoged, setIsLoged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedCoockie = cookies.get("token");

    if (storedCoockie) {
      api.defaults.headers.Authorization = `Bearer ${storedCoockie}`;
      setIsLoged(true);
    }
  }, []);

  async function handlerSubmit(event) {
    event.preventDefault();

    const response = await api.post("signIn", { email, password });

    const { token, message } = response.data;

    if (message) {
      console.log(message);
      alert(message);
    } else {
      cookies.set("token", token);

      setIsLoged(true);

      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }

  return (
    <ThemeStore>
      <Theme>
        <LoginContext.Provider
          value={{
            isLoged,
            setEmail,
            setPassword,
            handlerSubmit,
          }}
        >
          {children}
        </LoginContext.Provider>
      </Theme>
    </ThemeStore>
  );
}

export { LoginContext, LoginProvider };
