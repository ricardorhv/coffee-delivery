import styled from 'styled-components'

export const CoffeeCatalogContainer = styled.main`
  padding: 2rem 0;

  h3 {
    font-size: 2rem;
    font-weight: 800;
  }
`

export const HeaderCatalog = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const FilterByCategory = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`

export const CoffeeList = styled.section`
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  gap: 2rem 2.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 525px) {
    grid-template-columns: repeat(1, 1fr);
  }

  margin-top: 3.375rem;
`

export const EmptyCoffeeList = styled.section`
  display: flex;
  justify-content: center;

  padding: 5rem 0;

  h4 {
    color: ${(props) => props.theme['base-text']};
    font-size: 1.5rem;
  }
`
