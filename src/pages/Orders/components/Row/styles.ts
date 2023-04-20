import styled from 'styled-components'

export const TableRowContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 4px;

  font-size: 0.875rem;
`

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${(props) => props.theme['base-label']};

    strong {
      text-transform: uppercase;
      color: ${(props) => props.theme['base-text']};
    }

    &:first-child {
      flex: 2;
    }

    &:nth-child(4) {
      span {
        color: ${(props) => props.theme.yellow};
        font-weight: 700;
        text-transform: uppercase;
      }
    }

    &:last-child {
      justify-content: center;
      align-items: center;
    }
  }
`

const STATUS_CODE = {
  Entregue: 'green',
  'Em andamento': 'yellow',
} as const

interface StatusProps {
  statusCode: keyof typeof STATUS_CODE
}

export const StatusColumn = styled.div<StatusProps>`
  span {
    color: ${(props) => props.theme[STATUS_CODE[props.statusCode]]};
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const ShowDetailsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: 700;

  background: transparent;
  color: ${(props) => props.theme.yellow};

  line-height: 0;

  transition: color 0.4s;

  &:hover {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const TableDataDetailed = styled.div<{
  isShowDetailsClicked: boolean
}>`
  display: ${(props) => (props.isShowDetailsClicked ? 'flex' : 'none')};
  flex-direction: column;
  gap: 2rem;

  border-top: 1px solid ${(props) => props.theme['base-button']};
  padding-top: 1.5rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    display: block;
  }
`

export const ProductHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 1rem 4rem 1rem 0;
`

export const ProductsList = styled.section``

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid ${(props) => props.theme['base-button']};
  padding: 1rem 2rem 1rem 0;

  & > span:last-child {
    font-size: 1.25rem;
  }

  & + div {
    margin-top: 1rem;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 80%;

  div {
    span:first-child {
      font-weight: 700;
      font-size: 1.25rem;
    }
  }
`

export const ProductFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem 2.5rem 1rem 1rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div:last-child {
    strong {
      color: ${(props) => props.theme.yellow};
    }
  }
`
