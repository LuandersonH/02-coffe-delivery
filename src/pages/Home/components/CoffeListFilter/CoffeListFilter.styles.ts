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
          box-shadow: 0 0 0 0.5px ${(props) => props.theme["yellow-dark"]};
        }

        &:hover {
          background: ${(props) => props.theme["yellow-light"]};
          cursor: pointer;
        }
      }

      input {
        background: transparent;
        padding: 0.375rem 0.75rem;

        border: 1px solid ${(props) => props.theme.yellow};
        border-radius: 100px;

        font-size: 10px;
        font-weight: bold;
        color: ${(props) => props.theme["yellow-dark"]};

        &:focus {
          outline: none;
          box-shadow: 0 0 0 0.5px ${(props) => props.theme["yellow-dark"]};
        }

        &:checked {
          background: red;
        }

        &:hover {
          background: ${(props) => props.theme["yellow-light"]};
          cursor: pointer;
        }
      }

      .checkbox-group {
        display: flex;
        gap: 0.5rem; /* Espaçamento entre os "botões" */
      }

      input[type="checkbox"] {
        display: none; /* Esconde os checkboxes */
      }

      label {
        background: transparent;
        padding: 0.375rem 0.75rem;
        border: 1px solid ${(props) => props.theme.yellow};
        border-radius: 100px;
        font-size: 10px;
        font-weight: bold;
        color: ${(props) => props.theme["yellow-dark"]};
        cursor: pointer;
        text-align: center;
        transition: background 0.2s ease, color 0.2s ease;
        display: inline-block;
        user-select: none;
      }

      label:hover {
        background: ${(props) => props.theme["yellow-light"]};
      }

      input[type="checkbox"]:checked + label {
        background: ${(props) => props.theme["yellow-light"]};
        border-color: red;
        box-shadow: 0 0 5px ${(props) => props.theme["yellow-dark"]};
      }
    }
  }
`;
