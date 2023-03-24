import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  counter: number
  handleIncreaseCounter: () => void
  handleDecreaseCounter: () => void
}

export function Counter({
  counter,
  handleDecreaseCounter,
  handleIncreaseCounter,
}: CounterProps) {
  const isQuantityEqualsToOne = counter === 1

  return (
    <CounterContainer>
      <button
        type="button"
        onClick={handleDecreaseCounter}
        disabled={isQuantityEqualsToOne}
      >
        <Minus size={14} />
      </button>

      <span>{counter}</span>

      <button type="button" onClick={handleIncreaseCounter}>
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}
