import styled from 'styled-components'

export const CounterContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  button {
    color: ${(props) => props.theme.purple};
    background: transparent;
    line-height: 0;

    transition: color 0.4s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
