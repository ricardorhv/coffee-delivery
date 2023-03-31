import { useContext } from 'react'

import { CoffeeContext } from '../../../../context/CoffeeContext'
import { formatNumber } from '../../../../utils/format-number'

import { CoffeeSelected } from '../CoffeeSelected'
import { CartContainer, ConfirmOrderButton } from './styles'

export function Cart() {
  const {
    cart: { deliveryPrice, subtotal, total, selectedCoffeeList },
  } = useContext(CoffeeContext)

  return (
    <CartContainer>
      <section>
        {selectedCoffeeList.map((selectedCoffee) => (
          <CoffeeSelected key={selectedCoffee.id} {...selectedCoffee} />
        ))}
      </section>
      <footer>
        <div>
          <span>Total de itens</span>
          <span>R$ {formatNumber(subtotal)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ {formatNumber(deliveryPrice)}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$ {formatNumber(total)}</strong>
        </div>
        <ConfirmOrderButton type="submit">Confirmar Pedido</ConfirmOrderButton>
      </footer>
    </CartContainer>
  )
}
