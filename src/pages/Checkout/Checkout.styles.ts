import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10rem;
  gap: 2rem;

  .info {
    display: flex;
    padding-bottom: 2.5rem;

    > span {
      width: 2rem;
      height: 100%;
    }

    .infoMapSvg {
      color: ${(props) => props.theme["yellow-dark"]};
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

  .checkoutForm {
    width: 40rem;
    padding: 2.5rem 2rem;
    background-color: ${(props) => props.theme["base-card"]};

    > form {
      width: 35rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem 0rem;

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

  .paymentMethodContainer {
    margin-top: 0.75rem;
    width: 40rem;
    padding: 2.5rem 2rem;
    background-color: ${(props) => props.theme["base-card"]};
    color: ${(props) => props.theme["purple-dark"]};
  }

  .infoDollarSvg {
    color: ${(props) => props.theme["purple-dark"]};
  }

  .methods {
    display: flex;
    gap: 0rem 0.75rem;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      width: 11.25rem;
      height: 3.2rem;
      gap: 0rem 0.75rem;

      background-color: ${(props) => props.theme["base-button"]};

      > p {
        font-size: 0.75rem;
      }
    }
  }

  .checkoutOrder {
    width: 28rem;
  }

  /* Remover os botões de controle do input:number: */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    appearance: none;
    -moz-appearance: textfield;
    -webkit-appearance: none;
  }
`;
