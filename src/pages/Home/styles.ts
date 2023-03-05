import styled from 'styled-components'
import backgroundIntro from '../../assets/backgroundIntro.svg'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.875rem 0 6.75rem;
  gap: 3.5rem;
`

export const Background = styled.div`
  background: url(${backgroundIntro});
  width: 100%;
  height: 100%;

  position: absolute;
  top: 6.75rem;
  left: 0;
  z-index: -1;
`

export const TitleContainer = styled.div`
  line-height: 1.3;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
  }

  p {
    font-size: 1.25;
  }
`

export const GroupItems = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`

interface ItemProps {
  backgroundIcon: 'yellow-dark' | 'yellow' | 'purple' | 'base-text'
  gridArea: string
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  grid-area: ${(props) => props.gridArea};

  div {
    background: ${(props) => props.theme[props.backgroundIcon]};
    color: ${(props) => props.theme.background};

    padding: 0.5rem;
    border-radius: 9999px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
