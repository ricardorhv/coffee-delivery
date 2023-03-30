import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartLink, Location, HeaderContainer, Wrapper } from './styles'
import Logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Header() {
  const { coffeeListCart, order } = useContext(CoffeeContext)
  const totalItemsIntoTheCart = coffeeListCart.length
  const hasOrderedAlready = order.coffeeList.length !== 0

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="Logo do Coffee Delivery" />
      </NavLink>
      <Wrapper>
        {hasOrderedAlready && (
          <Location>
            <MapPin size={22} weight="fill" />
            <span>
              {order.info.city}, {order.info.UF}
            </span>
          </Location>
        )}

        <CartLink to="/checkout" title="Carrinho de compra">
          <ShoppingCart size={22} weight="fill" />
          <div>
            <span>{totalItemsIntoTheCart}</span>
          </div>
        </CartLink>
      </Wrapper>
    </HeaderContainer>
  )
}
