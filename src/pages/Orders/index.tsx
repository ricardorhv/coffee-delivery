import { EmptyOrder, OrderTable, OrdersContainer } from './styles'
import { Row } from './components/Row'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Orders() {
  const { orders } = useContext(CoffeeContext)
  const hasOrders = orders.length !== 0

  const ordersByLastToFirst = orders.slice(0).reverse()

  return hasOrders ? (
    <OrdersContainer>
      <header>
        <h2>Meus Pedidos</h2>
      </header>
      <OrderTable>
        {ordersByLastToFirst.map((order) => {
          return <Row key={order.id} order={order} />
        })}
      </OrderTable>
    </OrdersContainer>
  ) : (
    <EmptyOrder>
      <h1>Você não possui nenhum pedido!</h1>
    </EmptyOrder>
  )
}
