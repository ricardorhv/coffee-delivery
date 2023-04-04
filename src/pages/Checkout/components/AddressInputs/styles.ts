import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
    padding: 0.75rem;
    font-size: 0.875rem;

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    border: none;
    outline: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
  }

  input:focus {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  input:placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  input[placeholder='CEP'] {
    width: 12.5rem;
  }

  input[placeholder='UF'] {
    width: 3.75rem;
  }
`

export const ComplementInputWrapper = styled.div`
  position: relative;
  width: 100%;

  span {
    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme['base-label']};

    position: absolute;
    top: 13px;
    right: 12px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.red};
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / 12.5rem 1fr 3.75rem;
  gap: 1rem 0.75rem;

  div:has(input[placeholder='Número']) {
    grid-area: 1 / 1 / 2 / 2;
  }

  div:has(input[placeholder='Complemento']) {
    grid-area: 1 / 2 / 2 / 4;
  }

  @media (max-width: 580px) {
    grid-template: repeat(3, 1fr) / 12.5rem 1fr 3.75rem;

    div:has(input[placeholder='Bairro']) {
      grid-area: 2 / 1 / 3 / 4;
    }

    div:has(input[placeholder='Cidade']) {
      grid-area: 3 / 1 / 4 / 3;
    }
  }

  @media (max-width: 440px) {
    grid-template: repeat(4, 1fr) / 12.5rem 1fr 3.75rem;

    div:has(input[placeholder='Número']) {
      grid-area: 1 / 1 / 2 / 4;
    }

    div:has(input[placeholder='Complemento']) {
      grid-area: 2 / 1 / 3 / 4;
    }

    div:has(input[placeholder='Bairro']) {
      grid-area: 3 / 1 / 4 / 4;
    }

    div:has(input[placeholder='Cidade']) {
      grid-area: 4 / 1 / 5 / 3;
    }

    div:has(input[placeholder='UF']) {
      grid-area: 4 / 3 / 5 / 4;
    }
  }
`
