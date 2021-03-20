import styled from "styled-components";

const linearGradiente = ({ theme }) => theme.colors.linearGradient;

const IndexComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 5px;
  width: 100%;
  height: 100vh;
  background: ${linearGradiente};
  @media (min-width: 768px) {
    padding-top: 20vh;
  }
  @media (min-width: 1025px) {
    padding-top: 10px;
  }
`;
const Actions = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  font-size: 1.3rem;
  font-family: sans-serif;
  color: #999;
  @media (min-width: 768px) {
    align-self: center;
    width: 500px;
  }
  @media (min-width: 1025px) {
    align-self: flex-end;
    width: 200px;
  }
`;

Actions.addWord = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;

  .add-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    padding: 2.5px 0 2.5px 0;
    transition: background-color 200ms;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.border.radius};
  }
  .add-icon {
    margin-left: 2.5px;
    padding: 2px;
  }
  .add-icon:hover {
    background-color: #1a542b3d;
  }
`;

Actions.options = styled.a`
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-size: 1.3rem;
  font-family: sans-serif;
  color: #999;
  border-radius: ${({ theme }) => theme.border.radius};
  transition: background-color 200ms;
  :hover {
    background-color: #1a542b3d;
  }
  .user-icon,
  .options-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    padding: 2.5px 0 2.5px 0;
  }
  .user-icon {
    padding: 0;
    margin-left: 2.5px;
  }
  .user-icon svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
  }
  .options-icon {
    width: 22.5px;
  }
  .options-icon svg {
    width: 10px;
    height: 22.5px;
  }
`;

const LogoBlock = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 20px 0;
  .logo-icon {
    width: 8.5rem;
    fill: #fefefe;
    transition: background-color 200ms;
  }
  .logo-title {
    width: 275px;
    height: 45px;
    fill: #fefefe;
    transition: background-color 200ms;
  }
  @media (min-width: 765px) {
    margin-top: 70px;
    align-self: center;
    .logo-icon {
      width: 10rem;
      fill: #fefefe;
      transition: background-color 200ms;
    }
    .logo-title {
      width: 350px;
      height: 45px;
      fill: #fefefe;
      transition: background-color 200ms;
    }
    @media (min-width: 1025px) {
      margin-top: 25vh;
      width: 300px;
      .logo-icon {
        width: 7rem;
      }
      .logo-title {
        width: 300px;
      }
    }
  }
`;

export { IndexComponent, Actions, LogoBlock };
