import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeStore } from "./ThemesContext";
import Theme from "../themes/Theme";
import { api } from "../services/api";
import cookies from "js-cookie";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const router = useRouter();
  const [isLoged, setIsLoged] = useState(false);
  const [userName, setUserName] = useState(null);

  const [email, setEmail] = useState("");
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState("");

  useEffect(() => {
    const storedCoockie = cookies.get("token");

    if (storedCoockie) {
      api.defaults.headers.Authorization = `Bearer ${storedCoockie}`;
      setIsLoged(true);
    }
  }, []);

  function logout() {
    cookies.remove("token");

    api.defaults.headers.Authorization = null;

    setIsLoged(false);
  }

  async function handlerSubmitSignIn(event) {
    event.preventDefault();

    const response = await api.post("signIn", { email, password });

    const { token, userNameDB, message } = response.data;

    if (message) {
      return alert(message);
    }

    cookies.set("token", token);

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUserName(userNameDB);
    console.log(userNameDB);
    setIsLoged(true);

    router.back();
  }

  useEffect(() => {
    if (password !== "" && confirmPassword !== "") {
      setIsPasswordValid(password === confirmPassword);
    }

    if (password && confirmPassword && isPasswordValid) {
      setConfirmPassword("");
    }

    console.log(password);
  }, [password, confirmPassword]);

  async function handlerSubmitSignUp(event) {
    event.preventDefault();

    if (!isPasswordValid) {
      return alert("Senhas nao conferem!");
    }

    const newUser = { email, user_name, password };

    const response = await api.post("signUp", { newUser });

    const { token, userNameDB, message } = response.data;

    if (message) {
      return alert(message);
    }

    cookies.set("token", token);

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUserName(userNameDB);
    setIsLoged(true);

    router.replace("/");
  }

  return (
    <ThemeStore>
      <Theme>
        <LoginContext.Provider
          value={{
            isLoged,
            userName,
            logout,
            setEmail,
            setUser_name,
            setPassword,
            confirmPassword,
            setConfirmPassword,
            isPasswordValid,
            handlerSubmitSignIn,
            handlerSubmitSignUp,
          }}
        >
          {children}
        </LoginContext.Provider>
      </Theme>
    </ThemeStore>
  );
}

export { LoginContext, LoginProvider };
