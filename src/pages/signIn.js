import { useContext } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { LoginContext } from "../contexts/LoginContext";

const secundaryBackgroundColor = ({ theme }) => theme.colors.secundaryHover;
const boxShadow = ({ theme }) => theme.boxShadow;
const inputBackground = ({ theme }) => theme.colors.inputColor;
const primaryFontColor = ({ theme }) => theme.font.colorPrimary;
const borderRadius = ({ theme }) => theme.border.radius;
const formBackground = ({ theme }) => theme.colors.formBackground;
const ValidborderColor = ({ theme }) => theme.font.tertiaryColor;

const FormLogIn = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100%;
  padding: 20px 30px 20px 30px;
  background-color: ${formBackground};
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  line-height: 2.25rem;
  font-size: 1.5rem;
  color: #9bafa0;
  transition: background-color 200ms;

  .input-block {
    margin: 15px 0 15px 0;
    width: 100%;
  }

  label {
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
  }

  input {
    height: 35px;
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    border: 1px solid ${secundaryBackgroundColor};
    border-radius: 5px;
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: sans-serif;
    background-color: ${inputBackground};
    color: ${primaryFontColor};
  }

  input:valid {
    border-color: ${ValidborderColor};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    height: 35px;
    background: #37c77f;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 200ms;
    margin-top: 6.4rem;
    font-size: 1.6rem;
    line-height: 26px;
    color: #ffffff;
    text-decoration: none;
  }

  @media (min-width: 1025px) {
    /* width: fit-content; */
    .input-block {
      width: 40rem;
    }
  }
`;

export default function SignIn() {
  const { setEmail, setPassword, handlerSubmit } = useContext(LoginContext);

  return (
    <>
      <Header />
      <main>
        <FormLogIn onSubmit={handlerSubmit} className='log-in'>
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
            <label htmlFor='password'>Senha</label>
            <input
              required
              id='password'
              name='password'
              type='text'
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <button>Login</button>
        </FormLogIn>
      </main>
    </>
  );
}
