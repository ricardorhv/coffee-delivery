import styled from 'styled-components'
import backgroundIntro from '../../assets/backgroundIntro.svg'

export const IntroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3.5rem;
  position: relative;
  padding: 5.875rem 0 6.75rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
  }

  p {
    font-size: 1.25;
  }

  @media (max-width: 850px) {
    img {
      display: none;
    }
  }
`

export const Background = styled.div`
  background: url(${backgroundIntro});
  background-size: cover;
  width: 100vw;

  position: absolute;
  top: 0;
  bottom: 0;
  left: min((100vw - 70rem) / -2, 0px);
  z-index: -1;
`

export const GroupItems = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`

interface ItemProps {
  backgroundIcon: 'yellow-dark' | 'yellow' | 'purple' | 'base-text'
  gridArea: string
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

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
