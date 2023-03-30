import styled from 'styled-components'

export const RadioInputContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  outline: 1px solid ${(props) => props.theme['base-button']};

  width: 100%;
  cursor: pointer;

  border-radius: 6px;

  position: relative;
  transition: background-color 0.4s;

  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;

    width: 100%;
    height: 100%;

    text-transform: uppercase;
    font-size: 0.75rem;

    line-height: 0;

    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  input[type='radio'] {
    all: unset;
    visibility: hidden;
    max-height: 0;
  }

  &:has(input:checked) {
    background: ${(props) => props.theme['purple-light']};
    outline: 1px solid ${(props) => props.theme.purple};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
