import styled from "styled-components";

export const CoffeListFilterContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 5.75rem 10rem;

  .coffeListHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      display: inline-flex;

      font-family: "Baloo 2", serif;
      font-size: 2rem;
      font-weight: bolder;

      color: ${(props) => props.theme["base-subtitle"]};
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      > button {
        background: transparent;
        padding: 0.375rem 0.75rem;

        border: 1px solid ${(props) => props.theme.yellow};
        border-radius: 100px;

        font-size: 10px;
        font-weight: bold;
        color: ${(props) => props.theme["yellow-dark"]};
        
        &:focus {
            outline: none;
            box-shadow: 0 0 0 0.5px ${(props) => props.theme['yellow-dark']};
        }

        &:active {
            background: ${(props) => props.theme["yellow-light"]};
        }

        &:hover {
            background: ${(props) => props.theme["yellow-light"]};
            cursor: pointer;
        }
      }
    }
  }
`;
