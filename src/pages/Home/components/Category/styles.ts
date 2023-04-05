import styled from 'styled-components'

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  color: ${(props) => props.theme.yellow};
  border: 1px solid ${(props) => props.theme['yellow-dark']};

  border-radius: 100px;

  transition: all 0.5s;

  input[type='checkbox'] {
    all: unset;
  }

  &:has(input[type='checkbox']:checked) {
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  }

  label {
    width: 100%;
    height: 100%;
    border-radius: 100px;

    padding: 0.375rem 0.75rem;

    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;

    cursor: pointer;
  }
`
