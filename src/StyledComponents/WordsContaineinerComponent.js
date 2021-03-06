import styled from "styled-components";

const primaryBackground = ({ theme }) => theme.colors.primary;
const secundaryBackgroundColor = ({ theme }) => theme.colors.secundaryHover;
const primaryFont = ({ theme }) => theme.font.primary;
const primaryFontColor = ({ theme }) => theme.font.colorPrimary;
const tertiaryFontColor = ({ theme }) => theme.font.tertiaryColor;
const borderRadius = ({ theme }) => theme.border.radius;
const secundarySvgFill = ({ theme }) => theme.svg.secundaryFill;
const boxShadow = ({ theme }) => theme.boxShadow;

export const WordsContainer = styled.main`
  width: 100%;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;

  .word {
    width: 100%;
    min-height: 129px;
    margin-bottom: 1rem;
    padding: 1.5rem 2rem 2rem 2rem;
    font-size: 2.25rem;
    line-height: 2.25rem;
    transition: box-shadow 200ms;
    border-radius: ${borderRadius};
    background-color: ${primaryBackground};
    color: ${primaryFontColor};
    box-shadow: ${boxShadow};
  }

  .word .word-options {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: auto;
  }

  .word .edit,
  .word .share {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    margin-right: 15px;
    transition: background-color 200ms;
    border-radius: ${borderRadius};
  }

  .word button {
    background-color: transparent;
    border: none;
  }

  .word-options svg {
    height: 25px;
    width: 25px;
    fill: ${secundarySvgFill};
  }

  .no-result-message {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 20px;
    border-radius: ${boxShadow};
    background-color: ${primaryBackground};
    box-shadow: ${boxShadow};
  }

  .no-result-message p {
    margin: 0;
    font-size: 1.7rem;
    font-family: sans-serif;
  }

  .no-result-message p em {
    color: ${tertiaryFontColor};
    font-family: ${primaryFont};
  }

  @media (min-width: 642px) {
    width: 95vw;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    justify-content: center;

    .word {
      width: 65%;
      min-width: 235px;
      min-height: 130px;
      margin: 5px 5px 5px 5px;
      padding: 15px 15px 10px 20px;
      line-height: 16px;
      font-size: 1.5rem;
    }

    .word h2 {
      font-size: 3rem;
    }

    .word p {
      margin-bottom: 10px;
      font-weight: normal;
      line-height: 20px;
      font-weight: 500;
    }

    .word-options {
      justify-self: end;
    }

    .word-options svg {
      height: 20px;
      width: 20px;
    }

    .word .edit,
    .word .share {
      height: 25px;
      width: 25px;
      margin-right: 5px;
      border-radius: ${borderRadius};
    }
  }

  /* Desktop version */

  @media (min-width: 1025px) {
    width: 100%;
    max-width: 750px;
    margin-top: 74px;

    .word {
      width: 100%;
    }

    .word .edit:hover,
    .word .share:hover {
      background-color: ${secundaryBackgroundColor};
    }
  }
`;
