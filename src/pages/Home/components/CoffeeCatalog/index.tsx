import React, { useContext, useState } from 'react'

import { Category } from '../Category'
import { CoffeeCard } from '../CoffeeCard'

import {
  CoffeeCatalogContainer,
  CoffeeList,
  FilterByCategory,
  HeaderCatalog,
} from './styles'
import { FilterContext } from '../../../../context/FilterContext'

export function CoffeeCatalog() {
  const { categoriesOrderedByChecked, coffeeListFiltered } =
    useContext(FilterContext)

  return (
    <CoffeeCatalogContainer>
      <HeaderCatalog>
        <h3>Nossos cafés</h3>
        <FilterByCategory>
          {categoriesOrderedByChecked.map((category) => (
            <Category categoryName={category} key={category} />
          ))}
        </FilterByCategory>
      </HeaderCatalog>
      <CoffeeList>
        {coffeeListFiltered.map((coffee) => (
          <CoffeeCard {...coffee} key={coffee.id} />
        ))}
      </CoffeeList>
    </CoffeeCatalogContainer>
  )
}
