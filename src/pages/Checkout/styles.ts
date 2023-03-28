import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 40rem 1fr;
  column-gap: 2rem;

  margin: 2.5rem 0;

  h4 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 0.9375rem;
  }
`

export const Card = styled.section`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  & + section {
    margin-top: 0.75rem;
  }
`

const BaseHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

export const AddressHeader = styled(BaseHeader)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentHeader = styled(BaseHeader)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Address = styled.div`
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
  grid-template: repeat(2, 1fr) / 12.5rem 17.25rem 3.75rem;
  gap: 1rem 0.75rem;

  div:has(input[placeholder='Número']) {
    grid-area: 1 / 1 / 2 / 2;
  }

  div:has(input[placeholder='Complemento']) {
    grid-area: 1 / 2 / 2 / 4;
  }
`

export const PaymentWays = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
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
  }
`

export const EmptyCart = styled.div`
  width: 100%;
  padding: 10rem 0;

  display: flex;
  justify-content: center;
`
