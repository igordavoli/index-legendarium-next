import { useState, createContext } from "react";
import { ThemeStore } from "./ThemesContext";
import Theme from "../themes/Theme";
import { api } from "../services/api";
import cookies from "js-cookie";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState(null);

  async function handlerSubmit(event) {
    event.preventDefault();

    const response = await api.post("signIn", { email, password });

    const { data } = response.data;

    setToken(data.token);
    setUserData(data.userData);
    setMessage(data.message);

    cookies.set("token", token);
    cookies.set("userEmail", userData.email);
    cookies.set("userName", userData.user_name);
    cookies.set("sinceUser", userData.create_at);
  }

  return (
    <ThemeStore>
      <Theme>
        <LoginContext.Provider
          value={{
            setEmail,
            setPassword,
            token,
            userData,
            message,
            handlerSubmit,
          }}
        >
          {children}
        </LoginContext.Provider>
        ;
      </Theme>
    </ThemeStore>
  );
}

export { LoginContext, LoginProvider };
