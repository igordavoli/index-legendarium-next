import { useState, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { api } from '../services/api';
import cookies from 'js-cookie';

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
    const storedToken = cookies.get("token");
    const storedUserName = cookies.get("userName");

    if (storedToken && storedUserName) {
      api.defaults.headers.Authorization = `Bearer ${storedToken}`;

      setUserName(storedUserName);
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

    let response = null;

    try {
      response = await api.post("signIn", { email, password });
    } catch (error) {
      if (error.response) return alert(error.response.data.message);
    }

    const { token, userNameDB } = response.data;

    if (!token || !userNameDB) {
      return;
    }

    cookies.set("token", token);
    cookies.set("userName", userNameDB);

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUserName(userNameDB);
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

  );
}

export { LoginContext, LoginProvider };
