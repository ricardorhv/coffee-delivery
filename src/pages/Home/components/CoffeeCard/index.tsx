import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { BuyInfo, CartButton, CoffeeCardContainer } from './styles'

import minhaImagem from '../../../../assets/Americano.png'
import { CoffeeCounter } from '../../../../components/CoffeeCounter'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={minhaImagem} alt="Algo" />

      <div>
        <span>Tradicional</span>
      </div>

      <h4>Expresso Tradicional</h4>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <BuyInfo>
        <span>
          R$
          <strong> 9,90</strong>
        </span>

        <div>
          <CoffeeCounter />
          <CartButton title="Adicionar Café no carrinho">
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </div>
      </BuyInfo>
    </CoffeeCardContainer>
  )
}
