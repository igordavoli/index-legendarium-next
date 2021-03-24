import styled from "styled-components";

const buttonbBackground = ({ theme }) => theme.colors.button;
const inputBackground = ({ theme }) => theme.colors.inputColor;
const primaryHoverColor = ({ theme }) => theme.colors.primaryHover;
const primaryFontColor = ({ theme }) => theme.font.colorPrimary;
const primarySvgFill = ({ theme }) => theme.svg.primaryFill;
const borderRadius = ({ theme }) => theme.border.radius;
const borderConfiguration = ({ theme }) => theme.border.border;

export const InputBlockComponent = styled.div`
  form {
    width: 96.62vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${borderRadius};
    box-shadow: 0px 3.75062px 3.75062px rgba(0, 0, 0, 0.25);
  }

  input {
    width: 100%;
    height: 35px;
    padding: 2px 3px 2px 6px;
    font-size: 1.4rem;
    color: ${primaryFontColor};
    border: ${borderConfiguration};
    border-right: none;
    background: ${inputBackground};
    border-radius: ${borderRadius} 0px 0px ${borderRadius};
    transition: all 200ms;
  }

  input::placeholder {
    color: ${primaryFontColor};
    font-family: sans-serif;
    font-size: 1.2rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 50px;
    background: ${buttonbBackground};
    border: ${borderConfiguration};
    border-radius: 0px ${borderRadius} ${borderRadius} 0px;
    border-left: none;
    transition: background-color 200ms;
    outline: none;
  }
  @media (min-width: 1025px) {
    button:hover {
      background-color: ${primaryHoverColor};
    }
  }

  button svg {
    width: 17px;
    height: 17px;
    fill: ${primarySvgFill};
    transition: background-color 200ms;
  }

  /* 
    # IPAD VERSION #
  */

  @media (min-width: 648px) {
    margin: 0 auto;
    height: 30px;

    form {
      width: 75vw;
      height: 30px;
      border-right: none;
      font-size: 1.5rem;
      color: #91a79a;
    }

    input {
      height: 30px;
    }

    button {
      width: 65px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: none;
    }
  }

  /* 
    # IPAD PRO VERSION #
  */

  @media (min-width: 768px) {
    form {
      width: clamp(100px, 40vw, 900px);
      height: 30px;
      border-right: none;
      font-size: 1.5rem;
      color: #91a79a;
    }
  }
`;
