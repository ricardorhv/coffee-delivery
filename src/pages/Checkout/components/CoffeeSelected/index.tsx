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

export function CoffeeSelected({
  name,
  coffeeImage,
  price,
  quantity,
}: CoffeeCart) {
  return (
    <CoffeeSelectedContainer>
      <Info>
        <img src={coffeeImage} alt="" />
        <div>
          <span>{name}</span>
          <div>
            <QuantityCounter />
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
