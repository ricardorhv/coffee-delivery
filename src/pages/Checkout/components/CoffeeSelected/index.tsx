import { useContext, useState } from 'react'

import { Trash } from 'phosphor-react'
import {
  CoffeeSelectedContainer,
  Info,
  RemoveCoffeeFromCartButton,
} from './styles'

import { CoffeeContext } from '../../../../context/CoffeeContext'
import { formatNumber } from '../../../../utils/format-number'

import { Counter } from '../../../../components/Counter'
import { CoffeeCart } from '../../../../reducers/cart/reducer'

import { toast } from 'react-toastify'

export function CoffeeSelected({
  name,
  coffeeImage,
  price,
  quantity,
  id,
}: CoffeeCart) {
  const [counter, setCounter] = useState<number>(quantity)
  const { removeCoffeeFromTheCart, increaseQuantity, decreaseQuantity } =
    useContext(CoffeeContext)

  function handleIncreaseCounter() {
    setCounter((state) => state + 1)
    increaseQuantity(id)
  }

  function handleDecreaseCounter() {
    if (counter !== 1) {
      setCounter((state) => state - 1)
      decreaseQuantity(id)
    }
  }

  function handleRemoveCoffee() {
    removeCoffeeFromTheCart(id)
    toast(`${name} removido do carrinho!`)
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
            <RemoveCoffeeFromCartButton
              type="button"
              onClick={handleRemoveCoffee}
            >
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
