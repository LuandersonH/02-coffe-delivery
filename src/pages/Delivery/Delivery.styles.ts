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
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .OrderDetails {
        width: ;
    }
  }
  
`;
