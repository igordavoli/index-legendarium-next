import { useContext } from 'react';
import { FormLogin } from '../StyledComponents/FormLogin';
import Link from 'next/link';
import { Header } from '../components/Header';
import { LoginContext } from '../contexts/LoginContext';

export default function SignIn() {
  const { setEmail, setPassword, handlerSubmitSignIn } = useContext(
    LoginContext
  );

  return (
    <>
      <Header />
      <main>
        <FormLogin onSubmit={handlerSubmitSignIn} className="log-in">
          <div className="input-block">
            <label htmlFor="email">Email</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              onChange={event => setEmail(event.target.value)}
              onInvalid={event =>
                event.target.setCustomValidity("Prencha com seu email")
              }
            />
          </div>
          <div className="input-block">
            <label htmlFor="password">Senha</label>
            <input
              required
              id="password"
              name="password"
              type="password"
              onChange={event => setPassword(event.target.value)}
            />
            <Link href="/signUp">
              <a>Criar conta</a>
            </Link>
          </div>
          <button disabled="">Login</button>
        </FormLogin>
      </main>
    </>
  );
}
