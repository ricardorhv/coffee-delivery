import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartLink, Location, HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="Logo do Coffee Delivery" />
      </NavLink>
      <div>
        <Location to="/">
          <MapPin size={22} weight="fill" />
          <span>Assis Chateaubriand, PR</span>
        </Location>
        <CartLink to="/checkout" title="Carrinho de compra">
          <ShoppingCart size={22} weight="fill" />
          <div>
            <span>3</span>
          </div>
        </CartLink>
      </div>
    </HeaderContainer>
  )
}
