import styled from "styled-components";

export const InputBlockComponent = styled.div`
  form {
    width: 96.62vw;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: ${({ theme }) => theme.border.radius};

    box-shadow: 0px 3.75062px 3.75062px rgba(0, 0, 0, 0.25);
  }
  input {
    width: 100%;
    height: 35px;
    padding: 2px 3px 2px 6px;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.font.colorPrimary};
    transition: all 200ms;

    border: ${({ theme }) => theme.border.border};
    border-right: none;

    background: ${({ theme }) => theme.colors.inputColor};

    border-radius: ${({ theme }) => theme.border.radius} 0px 0px
      ${({ theme }) => theme.border.radius};
  }
  input::placeholder {
    color: ${({ theme }) => theme.font.colorPrimary};
    font-family: sans-serif;
    font-size: 1.2rem;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 50px;

    background: ${({ theme }) => theme.colors.button};

    border: ${({ theme }) => theme.border.border};

    border-radius: 0px ${({ theme }) => theme.border.radius}
      ${({ theme }) => theme.border.radius} 0px;

    border-left: none;
    transition: background-color 200ms;
    outline: none;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
  button svg {
    width: 17px;
    height: 17px;
    
    fill: ${({ theme }) => theme.svg.primaryFill};
    
    transition: background-color 200ms;
  }

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
