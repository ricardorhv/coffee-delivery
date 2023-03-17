import { ShoppingCart } from 'phosphor-react'
import { BuyInfo, CartButton, CoffeeCardContainer, TagList } from './styles'

import { CoffeeCounter } from '../../../../components/CoffeeCounter'

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

      <BuyInfo>
        <span>
          R$
          <strong> {price}</strong>
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
