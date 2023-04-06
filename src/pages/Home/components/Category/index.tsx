import React, { useContext } from 'react'
import { CategoryContainer } from './styles'
import { CategoryType, FilterContext } from '../../../../context/FilterContext'

interface CategoryProps {
  categoryName: CategoryType
}

export function Category({ categoryName }: CategoryProps) {
  const {
    isChecked,
    addCategoryToTheFilterList,
    removeCategoryFromTheFilterList,
  } = useContext(FilterContext)

  const isTodosChecked = categoryName === 'Todos' && isChecked('Todos')

  function handleFilterByCategory() {
    if (isChecked(categoryName)) {
      removeCategoryFromTheFilterList(categoryName)
    } else {
      addCategoryToTheFilterList(categoryName)
    }
  }

  return (
    <CategoryContainer>
      <input
        type="checkbox"
        name="category"
        id={categoryName}
        value={categoryName}
        onChange={handleFilterByCategory}
        checked={isChecked(categoryName)}
        disabled={isTodosChecked}
      />
      <label htmlFor={categoryName}>{categoryName}</label>
    </CategoryContainer>
  )
}
