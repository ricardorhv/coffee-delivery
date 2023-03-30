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

export const PaymentWays = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const EmptyCart = styled.div`
  width: 100%;
  padding: 10rem 0;

  display: flex;
  justify-content: center;
`
