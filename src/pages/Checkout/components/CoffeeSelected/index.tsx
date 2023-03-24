import { useContext, useState } from 'react'

import { Trash } from 'phosphor-react'
import {
  CoffeeSelectedContainer,
  Info,
  RemoveCoffeeFromCartButton,
} from './styles'

import { Counter } from '../../../../components/Counter'
import { CoffeeCart, CoffeeContext } from '../../../../context/CoffeeContext'
import { formatNumber } from '../../../../utils/format-number'

export function CoffeeSelected({
  name,
  coffeeImage,
  price,
  quantity,
  id,
}: CoffeeCart) {
  const [counter, setCounter] = useState(quantity)
  const { removeCoffeeFromTheCart, increaseQuantity, decreaseQuantity } =
    useContext(CoffeeContext)

  function handleIncreaseCounter() {
    setCounter((state) => state + 1)
    increaseQuantity(id, counter)
  }

  function handleDecreaseCounter() {
    if (counter !== 1) {
      setCounter((state) => state - 1)
      decreaseQuantity(id, counter)
    }
  }

  function handleRemoveCoffee() {
    removeCoffeeFromTheCart(id)
  }

  return (
    <CoffeeSelectedContainer>
      <Info>
        <img src={coffeeImage} alt="" />
        <div>
          <span>{name}</span>
          <div>
            <Counter
              counter={counter}
              handleDecreaseCounter={handleDecreaseCounter}
              handleIncreaseCounter={handleIncreaseCounter}
            />
            <RemoveCoffeeFromCartButton onClick={handleRemoveCoffee}>
              <Trash size={16} />
              <span>Remover</span>
            </RemoveCoffeeFromCartButton>
          </div>
        </div>
      </Info>
      <strong>R$ {formatNumber(price)}</strong>
    </CoffeeSelectedContainer>
  )
}
