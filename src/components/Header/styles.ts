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
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardLocation = styled(BaseCard)`
  background: ${(props) => props.theme['purple-light']};
  text-decoration: none;
  color: ${(props) => props.theme.purple};
  gap: 0.25rem;
`

export const CardCart = styled(BaseCard)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme.yellow};
`
