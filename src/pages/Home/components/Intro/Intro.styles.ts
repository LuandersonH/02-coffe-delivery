import styled from "styled-components";

export const IntroContainer = styled.div`
  width: 100%;
  height: 34rem;

  display: flex;
  align-items: row;
  justify-content: space-between;

  padding: 5.75rem 10rem;
  gap: 56px;

  > img {
    width: 29.75rem;
    height: 22.5rem;
  }

  .introTextsDiv {
    width: 36.75rem;

    h1 {
      font-family: "Baloo 2", serif;
      font-size: 3rem;
      font-weight: bolder;
      color: ${(props) => props.theme["base-title"]};
    }

    h2 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.25rem;
    }
  }

  .introTitleAndSubtitle {
    height: 12rem;
    margin-bottom: 4.125rem;
  }

  .serviceAdvantages {
    display: grid;
    grid-template-columns: 14.4375rem 18.375rem;
    column-gap: 2rem;

    width: 36.75rem;
    height: 5.25rem;
    padding-right: 1.32rem;
    gap: 20px;
    color: ${(props) => props.theme["base-text"]};

    p {
      display: flex;
      align-items: center;
      gap: 0 0.75rem;

      svg {
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
        color: white;
        border-radius: 50%;
      }
    }

    p:nth-child(1) svg {
      background: ${(props) => props.theme["yellow-dark"]};
    }

    p:nth-child(2) svg {
      background: ${(props) => props.theme["base-text"]};
    }

    p:nth-child(3) svg {
      background: ${(props) => props.theme.yellow};
    }

    p:nth-child(4) svg {
      background: ${(props) => props.theme.purple};
    }
  }
`;
