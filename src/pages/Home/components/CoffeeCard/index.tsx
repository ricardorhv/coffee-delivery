import { useContext, useState } from 'react'

import { ShoppingCart } from 'phosphor-react'
import { Buy, CartButton, CoffeeCardContainer, TagList } from './styles'

import { formatNumber } from '../../../../utils/format-number'
import { Coffee, CoffeeContext } from '../../../../context/CoffeeContext'

import { Counter } from '../../../../components/Counter'

export function CoffeeCard({
  id,
  name,
  description,
  coffeeImage,
  price,
  tags,
}: Coffee) {
  const { addCoffeeToTheCart } = useContext(CoffeeContext)
  const [counter, setCounter] = useState(1)

  function handleIncreaseCounter() {
    setCounter((state) => state + 1)
  }

  function handleDecreaseCounter() {
    if (counter !== 1) {
      setCounter((state) => state - 1)
    }
  }

  function handleAddCoffeeToTheCart() {
    addCoffeeToTheCart({
      id,
      name,
      description,
      coffeeImage,
      price,
      tags,
      quantity: counter,
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
          <Counter
            counter={counter}
            handleDecreaseCounter={handleDecreaseCounter}
            handleIncreaseCounter={handleIncreaseCounter}
          />
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
