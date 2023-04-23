import styled from 'styled-components'

export const TableRowContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 1.5rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 4px;

  font-size: 0.875rem;
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  div:first-child {
    flex: 2;
  }

  @media (max-width: 768px) {
    div:first-child {
      width: 30%;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    div:nth-child(2),
    div:nth-child(3) {
      display: none;
    }
  }
`

export const MoreDetailsButtonColumn = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const MoreDetailsButton = styled.button`
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

  @media (max-width: 850px) {
    span {
      display: none;
    }
  }
`
