import styled from "styled-components";

const borderRadius = ({ theme }) => theme.border.radius;
const tertiaryHover = ({ theme }) => theme.colors.tertiaryHover;

export const AddWordComponent = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius};

  .add-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    padding: 2.5px;
    cursor: pointer;
    font-size: 0;
    transition: background-color 300ms;
  }

  @media (min-width: 1025px) {
    :hover {
      background-color: ${tertiaryHover};
    }
  }
`;
