import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 1.25rem;

  background: ${(props) => props.theme['base-card']};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  position: relative;

  img {
    margin-top: -2.5rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const BuyInfo = styled.footer`
  display: flex;
  gap: 1.4375rem;
  align-items: center;
  margin-top: 2rem;

  span {
    font-size: 0.875rem;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
  }

  span + div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const TagList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};

    font-weight: 700;
    font-size: 0.625rem;

    border-radius: 100px;
    padding: 0.25rem 0.5rem;

    text-transform: uppercase;

    margin: 0.875rem 0 1rem;
  }
`

export const CartButton = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.4s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
