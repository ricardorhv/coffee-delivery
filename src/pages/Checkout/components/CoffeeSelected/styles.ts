import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.125rem;

  padding: 0.5rem 0.25rem 2rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  /* margin-bottom: 1.5rem; */
`

export const Info = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  img + div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    & > span {
      color: ${(props) => props.theme['base-subtitle']};
    }

    span + div {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.5rem;
    }
  }
`

export const RemoveCoffeeFromCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  padding: 0.5rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;

  transition: all 0.4s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
