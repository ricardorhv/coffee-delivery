import { MapPin, Moon, Scroll, ShoppingCart, Sun } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  CartLink,
  Location,
  HeaderContainer,
  Wrapper,
  ThemeSwitcherButton,
  OrdersLink,
} from './styles'
import logoLight from '../../assets/logoLight.svg'
import logoDark from '../../assets/logoDark.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Header() {
  const {
    cartState: { selectedCoffeeList },
    switchCurrentTheme,
    isLightTheCurrentTheme,
  } = useContext(CoffeeContext)
  const totalItemsIntoTheCart = selectedCoffeeList.length

  function handleSwitchTheme() {
    switchCurrentTheme(isLightTheCurrentTheme ? 'dark' : 'light')
  }
  //
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={isLightTheCurrentTheme ? logoLight : logoDark}
          alt="Logo do Coffee Delivery"
        />
      </NavLink>

      <Wrapper>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Assis Chateaubriand, PR</span>
        </Location>

        <ThemeSwitcherButton
          isLightTheCurrentTheme={isLightTheCurrentTheme}
          onClick={handleSwitchTheme}
          title="Mudar o tema"
        >
          {isLightTheCurrentTheme ? (
            <Sun size={22} weight="fill" />
          ) : (
            <Moon size={22} weight="fill" />
          )}
        </ThemeSwitcherButton>

        <OrdersLink to="/orders" title="Pedidos">
          <Scroll size={22} weight="fill" />
        </OrdersLink>

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
