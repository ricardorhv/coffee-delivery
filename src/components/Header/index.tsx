import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CardCart, CardLocation, HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="Logo do Coffee Delivery" />
      </NavLink>
      <div>
        <CardLocation to="/">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </CardLocation>
        <CardCart to="/cart" title="Carrinho de compra">
          <ShoppingCart size={22} weight="fill" />
        </CardCart>
      </div>
    </HeaderContainer>
  )
}
