import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function QuantityCounter() {
  return (
    <CounterContainer>
      <button type="button">
        <Minus size={14} />
      </button>
      <span>1</span>
      <button type="button">
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}
