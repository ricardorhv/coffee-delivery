import React, { useEffect, useState } from 'react'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeDeliveryImg from '../../assets/coffeeDeliveryImg.svg'

import { coffeeCatalog } from '../../data/coffeeCatalog'

import {
  Background,
  CoffeeList,
  CoffeeCatalog,
  GroupItems,
  IntroContainer,
  Item,
  FilterByCategory,
  HeaderCatalog,
} from './styles'

import { CoffeeCard } from './components/CoffeeCard'
import { Category } from './components/Category'

const categories = [
  'Tradicional',
  'Especial',
  'Com leite',
  'Alcoólico',
  'Gelado',
]

export function Home() {
  const [categoryListToFilter, setCategoryListToFilter] = useState<string[]>([])
  const [categoriesInOrderByChecked, setCategoriesInOrderByChecked] = useState<
    string[]
  >([])

  function handleFilterByCategory(event: React.ChangeEvent<HTMLInputElement>) {
    const isCheckboxChecked = event.target.checked
    const category = event.target.value

    if (isCheckboxChecked) {
      setCategoryListToFilter((state) => [...state, category])
    } else {
      const newCategoryListToFilter = categoryListToFilter.filter(
        (categoryToFilter) => categoryToFilter !== category,
      )
      setCategoryListToFilter(newCategoryListToFilter)
    }
  }

  useEffect(() => {
    const categoriesWithoutTheCheckedOne = categories.filter(
      (category) => !categoryListToFilter.includes(category),
    )
    setCategoriesInOrderByChecked([
      ...categoryListToFilter,
      ...categoriesWithoutTheCheckedOne,
    ])
  }, [categoryListToFilter])

  console.log(categoryListToFilter)

  return (
    <div>
      <IntroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <GroupItems>
            <Item gridArea="1 / 1 / 2 / 2" backgroundIcon="yellow-dark">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </Item>
            <Item gridArea="1 / 2  / 2 / 3" backgroundIcon="base-text">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item gridArea="2 / 1 / 3 / 2" backgroundIcon="yellow">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Item>
            <Item gridArea="2 / 2 / 3 / 3" backgroundIcon="purple">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </Item>
          </GroupItems>
        </div>
        <img src={coffeeDeliveryImg} alt="" />
        <Background />
      </IntroContainer>

      <CoffeeCatalog>
        <HeaderCatalog>
          <h3>Nossos cafés</h3>
          <FilterByCategory>
            {categoriesInOrderByChecked.length !== 0
              ? categoriesInOrderByChecked.map((category) => (
                  <Category
                    handleFilterByCategory={handleFilterByCategory}
                    categoryName={category}
                    key={category}
                  />
                ))
              : categories.map((category) => (
                  <Category
                    handleFilterByCategory={handleFilterByCategory}
                    categoryName={category}
                    key={category}
                  />
                ))}
          </FilterByCategory>
        </HeaderCatalog>
        <CoffeeList>
          {coffeeCatalog.map((coffee) => (
            <CoffeeCard {...coffee} key={coffee.id} />
          ))}
        </CoffeeList>
      </CoffeeCatalog>
    </div>
  )
}
