import { useState } from 'react'
import { formatNumber } from '../../../../utils/format-number'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { CaretDown, CaretUp } from 'phosphor-react'
import {
  TableRowContainer,
  HeaderRow,
  MoreDetailsButton,
  MoreDetailsButtonColumn,
} from './styles'

import { Order } from '../../../../context/CoffeeContext'
import { HeaderColumn } from '../HeaderColumn'
import { StatusColumn } from '../StatusColumn'
import { TableData } from '../TableData'

interface RowProps {
  order: Order
}

export function Row({ order }: RowProps) {
  const [isShowDetailsClicked, setIsShowDetailsClicked] = useState(false)
  const { id, info, total, createdAt, status } = order

  function handleIsShowDetailsClicked() {
    setIsShowDetailsClicked((state) => !state)
  }

  return (
    <TableRowContainer>
      <HeaderRow>
        <HeaderColumn title="ID do Pedido" content={id} />
        <StatusColumn status={status} />
        <HeaderColumn
          title="Data"
          content={format(new Date(createdAt), 'dd/MM/yyyy HH:mm', {
            locale: ptBR,
          })}
        />
        <HeaderColumn title="Pagamento" content={info.paymentWay} />
        <HeaderColumn title="Total" content={`R$ ${formatNumber(total)}`} />
        <MoreDetailsButtonColumn>
          <MoreDetailsButton onClick={handleIsShowDetailsClicked}>
            <span>Detalhes do pedido</span>
            {isShowDetailsClicked ? (
              <CaretUp size={16} weight="bold" />
            ) : (
              <CaretDown size={16} weight="bold" />
            )}
          </MoreDetailsButton>
        </MoreDetailsButtonColumn>
      </HeaderRow>

      <TableData order={order} isShowDetailsClicked={isShowDetailsClicked} />
    </TableRowContainer>
  )
}
