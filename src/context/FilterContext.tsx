import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../reducers/cart/reducer'
import { coffeeData } from '../data/coffeeData'

interface ContextProviderProps {
  children: ReactNode
}

const categories = [
  'Todos',
  'Tradicional',
  'Especial',
  'Com leite',
  'Alcoólico',
  'Gelado',
] as const

export type CategoryType = (typeof categories)[number]

interface FilterContextType {
  coffeeListFiltered: Coffee[]
  categoriesOrderedByChecked: CategoryType[]
  isChecked: (categoryName: CategoryType) => boolean
  addCategoryToTheFilterList: (categoryName: CategoryType) => void
  removeCategoryFromTheFilterList: (categoryName: CategoryType) => void
}

export const FilterContext = createContext({} as FilterContextType)

export function FilterContextProvider({ children }: ContextProviderProps) {
  const [filterListByCategory, setFilterByCategory] = useState<CategoryType[]>([
    'Todos',
  ])

  function isChecked(categoryName: CategoryType) {
    return filterListByCategory.includes(categoryName)
  }

  function addCategoryToTheFilterList(categoryName: CategoryType) {
    const isTodosChecked = isChecked('Todos')
    const isTodosToBeChecked = categoryName === 'Todos'

    if (isTodosToBeChecked) {
      setFilterByCategory(['Todos'])
    } else {
      if (isTodosChecked) {
        setFilterByCategory([categoryName])
      } else {
        setFilterByCategory((state) => [...state, categoryName])
      }
    }
  }

  function removeCategoryFromTheFilterList(categoryName: string) {
    const newFilterListByCategory = filterListByCategory.filter(
      (category) => category !== categoryName,
    )
    const isFilterListByCategoryEmpty = newFilterListByCategory.length === 0
    setFilterByCategory(
      isFilterListByCategoryEmpty ? ['Todos'] : newFilterListByCategory,
    )
  }

  function orderCategoriesByChecked() {
    const categoriesWithoutTheCheckedOne = categories.filter(
      (category) => !filterListByCategory.includes(category),
    )
    return [...filterListByCategory, ...categoriesWithoutTheCheckedOne]
  }

  const coffeeListFiltered = coffeeData.filter((coffee) => {
    // const tagsFiltered = coffee.tags.filter((tag) =>
    //   filterListByCategory.includes(tag),
    // )
    const hasTheSameCategories =
      JSON.stringify(coffee.tags.sort()) ===
      JSON.stringify(filterListByCategory.sort())

    return hasTheSameCategories
  }) as Coffee[]

  const categoriesOrderedByChecked = orderCategoriesByChecked()

  return (
    <FilterContext.Provider
      value={{
        coffeeListFiltered,
        categoriesOrderedByChecked,
        isChecked,
        addCategoryToTheFilterList,
        removeCategoryFromTheFilterList,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
