import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 104px;
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;

  :last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0 0.75rem;
    text-align: center;

    > div {
      display: flex;
      padding: 0.5rem;
      border-radius: 0.375rem;
      gap: 0 0.25rem;
    }

    div.local {
      background: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme.purple};

      > span {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }

    div.shop {
      position: relative;
      display: inline-block;
      background: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};
      padding: 0.5rem;
    }

    > div > svg {
      display: inline-block;
      vertical-align: middle;
    }

    .countShop {
      position: absolute;
      top: -10px;
      right: -10px; 

      display: flex;
      align-items: center;
      justify-content: center;

      width: 20px;
      height: 20px;
      border-radius: 50%;

      background: ${(props) => props.theme["yellow-dark"]}; 
      color: white;

      font-size: 0.75rem;
      font-weight: bold;
}
  }
`;

