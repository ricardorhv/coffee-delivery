import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin: 2.5rem 0;

  h4 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 0.9375rem;
  }
`

interface WrapperProps {
  iconColor: 'yellow-dark' | 'purple'
}

export const InfoContainer = styled.section<WrapperProps>`
  padding: 2.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  header {
    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme[props.iconColor]};
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
    }
  }

  & + section {
    margin-top: 0.75rem;
  }
`

export const AddressWrapper = styled.div`
  display: grid;
  grid-template: repeat(4, 1fr) / 1fr 1.5fr 3.75rem;
  gap: 1rem 0.75rem;

  input {
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
    grid-area: 1 / 1 / 2 / 2;
  }

  input[placeholder='Rua'] {
    grid-area: 2 / 1 / 3 / 4;
  }

  input[placeholder='Número'] {
    grid-area: 3 / 1 / 4 / 2;
  }

  input[placeholder='Complemento'] {
    grid-area: 3 / 2 / 4 / 4;
  }

  input[placeholder='Bairro'] {
    grid-area: 4 / 1 / 5 / 2;
  }

  input[placeholder='Cidade'] {
    grid-area: 4 / 2 / 5 / 3;
  }

  input[placeholder='UF'] {
    grid-area: 4 / 3 / 5 / 4;
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

export const CartContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;

  min-width: 23rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  footer {
    margin-top: 1.5rem;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span:first-child {
        font-size: 0.875rem;
      }

      strong {
        font-size: 1.25rem;
      }
    }

    div + div {
      margin-top: 0.75rem;
    }
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;

  padding: 0.75rem 0;
  margin-top: 1.5rem;
  border-radius: 6px;

  line-height: 1.3;
  transition: background-color 0.4s;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const EmptyCart = styled.div`
  width: 100%;
  padding: 10rem 0;

  display: flex;
  justify-content: center;
`
