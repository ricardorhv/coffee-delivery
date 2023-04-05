import React from 'react'
import { CategoryContainer } from './styles'

interface CategoryProps {
  categoryName: string
  handleFilterByCategory: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Category({
  categoryName,
  handleFilterByCategory,
}: CategoryProps) {
  return (
    <CategoryContainer>
      <input
        type="checkbox"
        name="category"
        id={categoryName}
        value={categoryName}
        onChange={handleFilterByCategory}
      />
      <label htmlFor={categoryName}>{categoryName}</label>
    </CategoryContainer>
  )
}
