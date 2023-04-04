import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  h1 + span {
    margin-top: 0.25rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 850px) {
    img {
      display: none;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.375rem;

  margin-top: 2.75rem;
`

export const OrderInfo = styled.section`
  width: 100%;
  border: 1px solid transparent;
  border-radius: 6px 36px;

  background: ${(props) => props.theme.background};
  background-clip: padding-box;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    border-radius: inherit;
    margin: -1px;
    z-index: -1;

    background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
  }
`

interface ItemProps {
  backgroundIcon: 'yellow' | 'purple' | 'yellow-dark'
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div:first-child {
    background: ${(props) => props.theme[props.backgroundIcon]};
    color: ${(props) => props.theme.background};

    padding: 0.5rem;
    border-radius: 9999px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
  }
`
