import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartLink, Location, HeaderContainer, Wrapper } from './styles'
import Logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Header() {
  const {
    cartState: { selectedCoffeeList },
    orders,
  } = useContext(CoffeeContext)
  const totalItemsIntoTheCart = selectedCoffeeList.length
  const hasOrderedAlready = orders.length !== 0
  const lastOrder = orders[orders.length - 1]

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
              {lastOrder.info.city}, {lastOrder.info.UF}
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
