import styled from "styled-components";

export const CoffeListContainer = styled.div`
  width: 70rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 2.5rem 2rem;
`;

export const CoffeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme["base-card"]};
  gap: 0px;

  .imgCard {
    margin-top: -20px;
    margin-bottom: 8px;
    img {
      height: 120px;
    }
  }

  .typeCard {
    margin-bottom: 1rem;
    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    border-radius: 100px;
    font-size: 0.625rem;
    font-weight: bold;
  }

  .titleCard {
    padding: 0rem 1.25rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
  }

  .subtitleCard {
    padding: 0rem 1.25rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
    margin-bottom: 1.5rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  height: 2.375rem;
  padding: 0rem 1.25rem;
  justify-content: space-between;

  .priceCardFooter {
    display: flex;
    color: ${(props) => props.theme["base-text"]};
    gap: 0 0.25rem;
    font-size: 1.5rem;
    font-weight: bolder;

    span {
      font-size: 0.875rem;
      font-weight: normal;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;

    .buttonCardFooter {
      background: ${(props) => props.theme["base-button"]};
      border-radius: 0.375rem;
      gap: 0 0.25rem;
      button {
        background: transparent;
        border: none;
        width: 1rem;
        color: ${(props) => props.theme.purple};
        cursor: pointer;
      }
      button:disabled {
        cursor: not-allowed;
      }
    }

    svg {
      padding: 0.5rem;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme["purple-dark"]};
      border-radius: 0.375rem;
    }
  }
`;
