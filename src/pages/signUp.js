import { useContext } from "react";
import { Header } from "../components/Header";
import { FormLogin } from "../StyledComponents/FormLogin";
import { LoginContext } from "../contexts/LoginContext";
export default function SignUp() {
  const {
    setEmail,
    setUser_name,
    setPassword,
    setConfirmPassword,
    handlerSubmitSignUp,
    isPasswordValid,
  } = useContext(LoginContext);

  return (
    <>
      <Header />
      <main>
        <FormLogin onSubmit={handlerSubmitSignUp} className='form'>
          <div className='input-block'>
            <label htmlFor='email'>Email</label>
            <input
              required
              id='email'
              name='email'
              type='email'
              onChange={event => setEmail(event.target.value)}
              onInvalid={event =>
                event.target.setCustomValidity("Prencha com seu email")
              }
            />
          </div>
          <div className='input-block'>
            <label htmlFor='user_name'>User name</label>
            <input
              required
              id='user_name'
              name='user_name'
              type='text'
              onChange={event => setUser_name(event.target.value)}
              onInvalid={event =>
                event.target.setCustomValidity("Prencha com seu email")
              }
            />
          </div>
          <div className='input-block'>
            <label htmlFor='password'>Senha</label>
            <input
              required
              id='password'
              name='password'
              type='text'
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <div className='input-block'>
            <label htmlFor='confirmPassword'>Senha</label>
            <input
              required
              id='confirmPassword'
              name='confirmPassword'
              type='text'
              maxLength='16'
              onChange={event => setConfirmPassword(event.target.value)}
            />
            {!isPasswordValid && <p>Senhas não conferem</p>}
          </div>
          <button>Criar conta</button>
        </FormLogin>
      </main>
    </>
  );
}
