import styled from 'styled-components'

export const TableDataContainer = styled.div<{
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

export const WrapperHeaderInfo = styled(Wrapper)`
  flex-direction: row;

  @media (min-width: 768px) {
    display: none;
  }
`

export const ProductHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 1rem 0;
`

export const ProductsList = styled.section``

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  border-top: 1px solid ${(props) => props.theme['base-button']};
  padding: 1rem 0;

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

    span:nth-child(3) {
      font-weight: 700;
    }
  }
`

export const ProductFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem 0;

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
