import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartLink, Location, HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Header() {
  const { coffeeListCart } = useContext(CoffeeContext)
  const totalItemsIntoTheCart = coffeeListCart.length

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
            <span>{totalItemsIntoTheCart}</span>
          </div>
        </CartLink>
      </div>
    </HeaderContainer>
  )
}
