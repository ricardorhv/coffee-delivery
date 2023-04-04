import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
`

export const ThemeSwitcherButton = styled.button<{
  isLightTheCurrentTheme: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) =>
    props.isLightTheCurrentTheme
      ? props.theme['yellow-light']
      : props.theme['purple-light']};
  color: ${(props) =>
    props.isLightTheCurrentTheme
      ? props.theme['yellow-dark']
      : props.theme['purple-dark']};

  transition: filter 0.4s;

  :hover {
    filter: brightness(0.9);
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  gap: 0.25rem;

  text-decoration: none;
  line-height: 0;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;
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
