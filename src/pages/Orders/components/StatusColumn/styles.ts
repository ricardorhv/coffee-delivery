import styled from 'styled-components'

const STATUS_CODE = {
  Entregue: 'green',
  'Em andamento': 'yellow',
} as const

export interface StatusProps {
  status: keyof typeof STATUS_CODE
}

export const StatusColumnContainer = styled.div<StatusProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${(props) => props.theme['base-label']};

  strong {
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    color: ${(props) => props.theme[STATUS_CODE[props.status]]};
    font-weight: 700;
    text-transform: uppercase;
  }
`
