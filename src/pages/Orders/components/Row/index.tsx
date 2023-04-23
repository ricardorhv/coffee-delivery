import { useState } from 'react'
import { formatNumber } from '../../../../utils/format-number'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { CaretDown, CaretUp } from 'phosphor-react'
import {
  TableRowContainer,
  TableRow,
  ShowDetailsButton,
  TableDataDetailed,
  Wrapper,
  ProductsList,
  Product,
  ProductHeader,
  ProductInfo,
  ProductFooter,
  StatusColumn,
  WrapperHeaderInfo,
} from './styles'

import { Order } from '../../../../context/CoffeeContext'

export function Row({
  id,
  deliveryPrice,
  selectedCoffeeList,
  info,
  subtotal,
  total,
  createdAt,
  status,
}: Order) {
  const [isShowDetailsClicked, setIsShowDetailsClicked] = useState(false)

  function handleIsShowDetailsClicked() {
    setIsShowDetailsClicked((state) => !state)
  }

  return (
    <TableRowContainer>
      <TableRow>
        <div>
          <strong>ID do Pedido</strong>
          <span>{id}</span>
        </div>
        <StatusColumn statusCode={status}>
          <strong>Status</strong>
          <span>{status}</span>
        </StatusColumn>
        <div>
          <strong>Data</strong>
          <span>
            {format(new Date(createdAt), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
          </span>
        </div>
        <div>
          <strong>Pagamento</strong>
          <span>{info.paymentWay}</span>
        </div>
        <div>
          <strong>Total</strong>
          <span>R$ {formatNumber(total)}</span>
        </div>
        <div>
          <ShowDetailsButton onClick={handleIsShowDetailsClicked}>
            <span>Detalhes do pedido</span>
            {isShowDetailsClicked ? (
              <CaretUp size={16} weight="bold" />
            ) : (
              <CaretDown size={16} weight="bold" />
            )}
          </ShowDetailsButton>
        </div>
      </TableRow>
      <TableDataDetailed isShowDetailsClicked={isShowDetailsClicked}>
        <WrapperHeaderInfo>
          <StatusColumn statusCode={status}>
            <strong>Status </strong>
            <span>{status}</span>
          </StatusColumn>
          <div>
            <strong>Data </strong>
            <span>
              {format(new Date(createdAt), 'dd/MM/yyyy HH:mm', {
                locale: ptBR,
              })}
            </span>
          </div>
        </WrapperHeaderInfo>
        <Wrapper>
          <strong>Endereço</strong>
          <div>
            <span>
              {info.street}, N° {info.houseNumber}{' '}
              {info.complement && ` - ${info.complement},`}
            </span>
            <span>
              {info.neighborhood}, CEP {info.CEP} - {info.city}, {info.UF}
            </span>
          </div>
        </Wrapper>

        <Wrapper>
          <ProductHeader>
            <strong>Produto(s)</strong>
            <strong>Total</strong>
          </ProductHeader>
          <ProductsList>
            {selectedCoffeeList.map((selectedCoffee) => (
              <Product key={selectedCoffee.id}>
                <ProductInfo>
                  <img
                    src={selectedCoffee.coffeeImage}
                    alt={selectedCoffee.name}
                  />
                  <div>
                    <span>{selectedCoffee.name}</span>
                    <span>{selectedCoffee.description}</span>
                    <span>Quantidade: {selectedCoffee.quantity}</span>
                  </div>
                </ProductInfo>
                <span>
                  R${' '}
                  {formatNumber(selectedCoffee.price * selectedCoffee.quantity)}
                </span>
              </Product>
            ))}

            <ProductFooter>
              <div>
                <strong>Total Produto(s)</strong>
                <span>R$ {formatNumber(subtotal)}</span>
              </div>
              <div>
                <strong>Preço de entrega</strong>
                <span>R$ {formatNumber(deliveryPrice)}</span>
              </div>
              <div>
                <strong>Total Pedido</strong>
                <strong>R$ {formatNumber(total)}</strong>
              </div>
            </ProductFooter>
          </ProductsList>
        </Wrapper>
      </TableDataDetailed>
    </TableRowContainer>
  )
}
