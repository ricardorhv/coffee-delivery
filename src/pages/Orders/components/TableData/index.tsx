import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { formatNumber } from '../../../../utils/format-number'

import { HeaderColumn } from '../HeaderColumn'
import { StatusColumn } from '../StatusColumn'

import { Order } from '../../../../context/CoffeeContext'

import {
  Product,
  ProductFooter,
  ProductHeader,
  ProductInfo,
  ProductsList,
  TableDataContainer,
  Wrapper,
  WrapperHeaderInfo,
} from './styles'

interface TableDataProps {
  order: Order
  isShowDetailsClicked: boolean
}

export function TableData({
  order: {
    status,
    deliveryPrice,
    info,
    selectedCoffeeList,
    subtotal,
    total,
    createdAt,
  },
  isShowDetailsClicked,
}: TableDataProps) {
  return (
    <TableDataContainer isShowDetailsClicked={isShowDetailsClicked}>
      <WrapperHeaderInfo>
        <StatusColumn status={status} />
        <HeaderColumn
          title="Data"
          content={format(new Date(createdAt), 'dd/MM/yyyy HH:mm', {
            locale: ptBR,
          })}
        />
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
                  width={80}
                />
                <div>
                  <span>{selectedCoffee.name}</span>
                  <span>{selectedCoffee.description}</span>
                  <span>Quantidade: {selectedCoffee.quantity}</span>
                </div>
              </ProductInfo>
              <strong>
                R${' '}
                {formatNumber(selectedCoffee.price * selectedCoffee.quantity)}
              </strong>
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
    </TableDataContainer>
  )
}
