import { ShoppingCart } from 'phosphor-react'
import { Buy, CartButton, CoffeeCardContainer, TagList } from './styles'

import { QuantityCounter } from '../../../../components/QuantityCounter'
import { formatNumber } from '../../../../utils/format-number'
import { Coffee, CoffeeContext } from '../../../../context/CoffeeContext'
import { useContext } from 'react'

export function CoffeeCard({
  id,
  name,
  description,
  coffeeImage,
  price,
  tags,
}: Coffee) {
  const { addCoffeeToTheCart } = useContext(CoffeeContext)

  function handleAddCoffeeToTheCart() {
    addCoffeeToTheCart({
      id,
      name,
      description,
      coffeeImage,
      price,
      tags,
      quantity: 1,
    })
    alert('Item adicionado no carrinho')
  }

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
          <CartButton
            title="Adicionar Café no carrinho"
            onClick={handleAddCoffeeToTheCart}
          >
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </div>
      </Buy>
    </CoffeeCardContainer>
  )
}
