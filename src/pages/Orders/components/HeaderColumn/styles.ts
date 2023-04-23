import styled from 'styled-components'

export const HeaderColumnContainer = styled.div<{ title: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${(props) => props.theme['base-label']};

  strong {
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }

  ${(props) =>
    props.title === 'Pagamento'
      ? `span {
      color: ${props.theme.yellow};
      font-weight: 700;
      text-transform: uppercase;
    }`
      : ''}
`
