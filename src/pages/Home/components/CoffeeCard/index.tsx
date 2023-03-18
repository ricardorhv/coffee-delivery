import { ShoppingCart } from 'phosphor-react'
import { Buy, CartButton, CoffeeCardContainer, TagList } from './styles'

import { QuantityCounter } from '../../../../components/QuantityCounter'
import { formatNumber } from '../../../../utils/format-number'

interface Coffee {
  name: string
  description: string
  tags: string[]
  price: number
  coffeeImage: string
}

export function CoffeeCard({
  name,
  description,
  coffeeImage,
  price,
  tags,
}: Coffee) {
  return (
    <CoffeeCardContainer>
      <img src={coffeeImage} alt="" />

      <TagList>
        {tags.map((tag) => {
          return (
            <div key={tag}>
              <span>{tag}</span>
            </div>
          )
        })}
      </TagList>

      <h4>{name}</h4>
      <p>{description}</p>

      <Buy>
        <span>
          R$
          <strong> {formatNumber(price)}</strong>
        </span>

        <div>
          <QuantityCounter />
          <CartButton title="Adicionar Café no carrinho">
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </div>
      </Buy>
    </CoffeeCardContainer>
  )
}
