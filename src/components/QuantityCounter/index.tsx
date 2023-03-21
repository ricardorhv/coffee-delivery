import { useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function QuantityCounter() {
  const [quantity, setQuantity] = useState(1)

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity !== 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <CounterContainer>
      <button type="button" onClick={handleDecreaseQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={handleIncreaseQuantity}>
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}
