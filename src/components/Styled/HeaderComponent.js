import styled from "styled-components";

const backgroundGradient = ({ theme }) => theme.colors.gradient;

export const HeaderComponent = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 7px;
  background: ${backgroundGradient};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 2;

  /* 
    # IPAD PRO VERSION #
  */

  @media (min-width: 768px) {
    padding: 7px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  /*
    # DESKTOP VERSION #
  */

  @media (min-width: 1025px) {
    position: fixed;
    padding: 10px;
  }
`;
