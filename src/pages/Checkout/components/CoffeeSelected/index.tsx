import { Trash } from 'phosphor-react'
import { CoffeeCounter } from '../../../../components/CoffeeCounter'
import {
  CoffeeSelectedContainer,
  Info,
  RemoveCoffeeFromCartButton,
} from './styles'
import AmericanoImg from '../../../../assets/Americano.png'

export function CoffeeSelected() {
  return (
    <CoffeeSelectedContainer>
      <Info>
        <img src={AmericanoImg} alt="" />
        <div>
          <span>Expresso Tradicional</span>
          <div>
            <CoffeeCounter />
            <RemoveCoffeeFromCartButton>
              <Trash size={16} />
              <span>Remover</span>
            </RemoveCoffeeFromCartButton>
          </div>
        </div>
      </Info>
      <strong>R$ 9,90</strong>
    </CoffeeSelectedContainer>
  )
}
