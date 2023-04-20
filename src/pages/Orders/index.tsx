import { OrderTable, OrdersContainer } from './styles'
import { Row } from './components/Row'
import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'
import { differenceInMinutes } from 'date-fns'

export function Orders() {
  const { orders } = useContext(CoffeeContext)

  const ordersByLastToFirst = orders.slice(0).reverse()

  return (
    <OrdersContainer>
      <header>
        <h2>Meus Pedidos</h2>
      </header>
      <OrderTable>
        {ordersByLastToFirst.map((order) => {
          return <Row key={order.id} {...order} />
        })}
      </OrderTable>
    </OrdersContainer>
  )
}
