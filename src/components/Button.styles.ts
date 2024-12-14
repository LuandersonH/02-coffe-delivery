import styled from 'styled-components';

export const ButtonContainer = styled.button`
    color: ${props => props.theme['purple-light']};
    width: 800px;
    height: 400px;
    background: ${props => props.theme['yellow-dark']};

    &:hover {
        background: red;
    }

    &:not(:focus):hover {
    background: ${(props) => props.theme["yellow-light"]};
  }
`