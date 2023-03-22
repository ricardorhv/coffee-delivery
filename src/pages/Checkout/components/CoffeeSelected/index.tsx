import { Trash } from 'phosphor-react'
import { QuantityCounter } from '../../../../components/QuantityCounter'
import {
  CoffeeSelectedContainer,
  Info,
  RemoveCoffeeFromCartButton,
} from './styles'
import AmericanoImg from '../../../../assets/Americano.png'
import { CoffeeCart } from '../../../../context/CoffeeContext'
import { formatNumber } from '../../../../utils/format-number'
import { useState } from 'react'

export function CoffeeSelected({
  name,
  coffeeImage,
  price,
  quantity,
}: CoffeeCart) {
  const [counter, setCounter] = useState(quantity)

  function handleIncreaseCounter() {
    setCounter((state) => state + 1)
  }

  function handleDecreaseCounter() {
    if (counter !== 1) {
      setCounter((state) => state - 1)
    }
  }

  return (
    <CoffeeSelectedContainer>
      <Info>
        <img src={coffeeImage} alt="" />
        <div>
          <span>{name}</span>
          <div>
            <QuantityCounter
              counter={counter}
              handleDecreaseCounter={handleDecreaseCounter}
              handleIncreaseCounter={handleIncreaseCounter}
            />
            <RemoveCoffeeFromCartButton>
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
