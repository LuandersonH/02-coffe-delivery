import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10rem;
  gap: 2rem;

  .checkoutForm {
    width: 40rem;
    padding: 2.5rem 2rem;
    background-color: ${(props) => props.theme["purple-light"]};

    .infoForm {
      display: flex;
      padding-bottom: 2.5rem;

      > span {
        width: 2rem;
        height: 100%;

        > svg {
          color: ${(props) => props.theme["yellow-dark"]};
        }
      }
    }

    h1 {
      font-size: 1rem;
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: normal;
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
    }

    > form {
      width: 35rem;
      display: flex; /* Adicionado */
      flex-direction: column; /* Adicionado para alinhamento vertical */
      gap: 0.75rem 0rem; /* Agora o gap será aplicado */

      > span {
        display: flex;
        gap: 1rem;

        > input {
          font-size: 0.875rem;
          height: 2.625rem;
          padding: 0.75rem;
          background-color: ${(props) => props.theme["base-input"]};
          border: none;
        }
      }
    }
  }

  .checkoutOrder {
    width: 28rem;
  }
`;
