import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeDeliveryImg from '../../assets/coffeeDeliveryImg.svg'

import { Background, GroupItems, IntroContainer, Item } from './styles'

import { CoffeeCatalog } from './components/CoffeeCatalog'

export function Home() {
  return (
    <div>
      <IntroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <GroupItems>
            <Item gridArea="1 / 1 / 2 / 2" backgroundIcon="yellow-dark">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </Item>
            <Item gridArea="1 / 2  / 2 / 3" backgroundIcon="base-text">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item gridArea="2 / 1 / 3 / 2" backgroundIcon="yellow">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Item>
            <Item gridArea="2 / 2 / 3 / 3" backgroundIcon="purple">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </Item>
          </GroupItems>
        </div>
        <img src={coffeeDeliveryImg} alt="" />
        <Background />
      </IntroContainer>
      <CoffeeCatalog />
    </div>
  )
}
