import styled from "styled-components";

export const DeliveryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;

  .confirmationOrderMsg {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 2.5rem;

    > h1 {
      color: ${(props) => props.theme["yellow-dark"]};
      font-size: 2rem;
      font-weight: bolder;
    }

    > p {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.25rem;
    }
  }

  .infoAndImgContainer {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .OrderDetailsContainer {
      border: solid 1px transparent;
      border-radius: 6px 36px 6px 36px;
      background-image: linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      );
      background-origin: border-box;
      background-clip: border-box;
    }

    .OrderDetails {
      width: 32.875rem;
      height: 16.875rem;
      border-radius: 6px 36px 6px 36px;
      background: white;
      margin: 1px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;

      padding: 2.5rem;
      gap: 2rem;

      > div {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        svg {
          box-sizing: content-box;
          width: 1rem;
          height: 1rem;
          padding: 0.5rem;
          color: ${(props) => props.theme.white};
          border-radius: 50%;
        }

        .MapPin {
          background-color: ${(props) => props.theme.purple};
        }

        .Timer {
          background-color: ${(props) => props.theme.yellow};
        }
        .CurrencyDollar {
          background-color: ${(props) => props.theme["yellow-dark"]};
        }
      }
    }

    img {
      width: 30.75rem;
    }
  }
`;
