import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

const BaseCard = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;
`

export const Location = styled(BaseCard)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  gap: 0.25rem;

  text-decoration: none;
  line-height: 0;
`

export const CartLink = styled(BaseCard)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  position: relative;

  div {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    border-radius: 999px;

    font-size: 0.75rem;
    font-weight: 700;

    width: 1.25rem;
    height: 1.25rem;
    line-height: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
