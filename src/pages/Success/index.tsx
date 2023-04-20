import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import illustration from '../../assets/Illustration.svg'
import { CoffeeContext, Order } from '../../context/CoffeeContext'

import { Item, OrderInfo, SuccessContainer, Wrapper } from './styles'
import { useParams } from 'react-router-dom'

export function Success() {
  const { orders } = useContext(CoffeeContext)
  const { orderID } = useParams()

  const orderFound = orders.find((order) => order.id === orderID) as Order

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
                  {orderFound.info.street}, {orderFound.info.houseNumber}
                </strong>
              </span>
              <span>
                {orderFound.info.neighborhood} - {orderFound.info.city},{' '}
                {orderFound.info.UF}
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
              <strong>{orderFound.info.paymentWay}</strong>
            </div>
          </Item>
        </OrderInfo>
        <img src={illustration} alt="" />
      </Wrapper>
    </SuccessContainer>
  )
}
