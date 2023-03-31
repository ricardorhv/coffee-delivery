import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import illustration from '../../assets/Illustration.svg'
import { CoffeeContext } from '../../context/CoffeeContext'

import { Item, OrderInfo, SuccessContainer, Wrapper } from './styles'

export function Success() {
  const { orders } = useContext(CoffeeContext)
  const lastOrderIndex = orders.length - 1
  const { info } = orders[lastOrderIndex]

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <Wrapper>
        <OrderInfo>
          <Item backgroundIcon="purple">
            <div>
              <MapPin size={16} weight="fill" />
            </div>
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {info.street}, {info.houseNumber}
                </strong>
              </span>
              <span>
                {info.neighborhood} - {info.city}, {info.UF}
              </span>
            </div>
          </Item>
          <Item backgroundIcon="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </Item>
          <Item backgroundIcon="yellow-dark">
            <div>
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <div>
              <span>Pagamento na entrega</span>
              <strong>{info.paymentWay}</strong>
            </div>
          </Item>
        </OrderInfo>
        <img src={illustration} alt="" />
      </Wrapper>
    </SuccessContainer>
  )
}
