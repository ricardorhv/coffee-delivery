import { useContext } from 'react'

import { CoffeeContext } from '../../../../context/CoffeeContext'
import { formatNumber } from '../../../../utils/format-number'

import { CoffeeSelected } from '../CoffeeSelected'
import { CartContainer, ConfirmOrderButton } from './styles'

export function Cart() {
  const { coffeeListCart } = useContext(CoffeeContext)

  function getSubtotal() {
    const subtotal = coffeeListCart.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    return subtotal
  }

  function getTotal() {
    const subtotal = getSubtotal()
    const deliveryPrice = 3.5
    return subtotal + deliveryPrice
  }

  const cartInfo = {
    deliveryPrice: 3.5,
    subtotal: getSubtotal(),
    total: getTotal(),
  }

  return (
    <CartContainer>
      <section>
        {coffeeListCart.map((coffee) => (
          <CoffeeSelected key={coffee.id} {...coffee} />
        ))}
      </section>
      <footer>
        <div>
          <span>Total de itens</span>
          <span>R$ {formatNumber(cartInfo.subtotal)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ {formatNumber(cartInfo.deliveryPrice)}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$ {formatNumber(cartInfo.total)}</strong>
        </div>
        <ConfirmOrderButton type="submit">Confirmar Pedido</ConfirmOrderButton>
      </footer>
    </CartContainer>
  )
}
