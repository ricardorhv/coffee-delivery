import { MapPin, Moon, ShoppingCart, Sun } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  CartLink,
  Location,
  HeaderContainer,
  Wrapper,
  ThemeSwitcherButton,
} from './styles'
import logoLight from '../../assets/logoLight.svg'
import logoDark from '../../assets/logoDark.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Header() {
  const {
    cartState: { selectedCoffeeList },
    orders,
    switchCurrentTheme,
    isLightTheCurrentTheme,
  } = useContext(CoffeeContext)
  const totalItemsIntoTheCart = selectedCoffeeList.length

  const hasOrderedAlready = orders.length !== 0
  const lastOrder = orders[orders.length - 1]

  function handleSwitchTheme() {
    switchCurrentTheme(isLightTheCurrentTheme ? 'dark' : 'light')
  }

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={isLightTheCurrentTheme ? logoLight : logoDark}
          alt="Logo do Coffee Delivery"
        />
      </NavLink>
      <Wrapper>
        <ThemeSwitcherButton
          isLightTheCurrentTheme={isLightTheCurrentTheme}
          onClick={handleSwitchTheme}
        >
          {isLightTheCurrentTheme ? (
            <Sun size={22} weight="fill" />
          ) : (
            <Moon size={22} weight="fill" />
          )}
        </ThemeSwitcherButton>

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
