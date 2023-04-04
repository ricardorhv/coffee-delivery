import styled from 'styled-components'

export const CartContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;

  section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  footer {
    margin-top: 1.5rem;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span:first-child {
        font-size: 0.875rem;
      }

      strong {
        font-size: 1.25rem;
      }
    }

    div + div {
      margin-top: 0.75rem;
    }
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;

  padding: 0.75rem 0;
  margin-top: 1.5rem;
  border-radius: 6px;

  line-height: 1.3;
  transition: background-color 0.4s;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
