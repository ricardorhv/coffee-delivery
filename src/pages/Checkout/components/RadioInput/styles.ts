import styled from 'styled-components'

export const RadioInputContainer = styled.div`
  width: 100%;
  cursor: pointer;

  position: relative;

  label {
    background: ${(props) => props.theme['base-button']};
    outline: 1px solid ${(props) => props.theme['base-button']};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    border-radius: 6px;
    padding: 1rem;

    width: 100%;
    height: 100%;

    text-transform: uppercase;
    font-size: 0.75rem;

    line-height: 0;

    cursor: pointer;
    transition: background-color 0.4s;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }

  input[type='radio'] {
    all: unset;
    visibility: hidden;
    max-height: 0;
  }

  &:has(input:checked) label {
    background: ${(props) => props.theme['purple-light']};
    outline: 1px solid ${(props) => props.theme.purple};
  }
`
