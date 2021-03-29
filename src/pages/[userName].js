import { useContext } from "react";
import { Header } from "../components/Header";
import { FormLogin } from "../StyledComponents/FormLogin";
import { LoginContext } from "../contexts/LoginContext";
import { api } from "../services/api";

export default function SignUp(props) {
  const { userData } = props;

  const {
    setEmail,
    setUser_name,
    setPassword,
    confirmPassword,
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
              value={userData.email}
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
              value={userData.user_name}
              onChange={event => setUser_name(event.target.value)}
              onInvalid={event =>
                event.target.setCustomValidity("Prencha com seu email")
              }
            />
          </div>
          <div className='input-block'>
            <label htmlFor='password'>Nova senha</label>
            <input
              required
              id='password'
              name='password'
              type='password'
              maxLength='16'
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <div className='input-block'>
            <label htmlFor='confirmPassword'>Confirmar nova senha</label>
            <input
              required
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              maxLength='16'
              onChange={event => setConfirmPassword(event.target.value)}
            />
            {!isPasswordValid && confirmPassword && <p>Senhas não conferem</p>}
          </div>
          <div className='input-block'>
            <label htmlFor='oldPassword'>Senha</label>
            <input
              required
              id='oldPassword'
              name='oldPassword'
              type='password'
              maxLength='16'
              onChange={event => setConfirmPassword(event.target.value)}
            />
          </div>
          <button>Criar conta</button>
        </FormLogin>
      </main>
    </>
  );
}

export const getServerSideProps = async context => {
  const { token } = await context.req.cookies;

  console.log(token);
  const response = await api.get("/user", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const { userData } = response.data;

  return {
    props: { userData },
  };
};
