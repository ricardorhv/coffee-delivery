import { createContext, ReactNode, useState } from 'react'
import { coffeeCatalog } from '../data/coffeeCatalog'

export interface Coffee {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  coffeeImage: string
}

export interface CoffeeCart extends Coffee {
  quantity: number
}

interface Cart {
  coffeeList: CoffeeCart[]
  subtotal: number
  deliveryPrice: number
  total: number
}

interface CoffeeContextType {
  // coffeeCatalog: Coffee[]
  cart: Cart
  addCoffeeToTheCart: (data: CoffeeCart) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const cartInitial = {
    coffeeList: [],
    subtotal: 0,
    deliveryPrice: 3.5,
    total: 0,
  }

  const [cart, setCart] = useState<Cart>(cartInitial)

  function calculateSubtotal() {}

  function calculateTotal() {}

  function addCoffeeToTheCart(data: CoffeeCart) {
    setCart((state) => {
      return {
        ...state,
        coffeeList: [...state.coffeeList, data],
      }
    })
  }

  return (
    <CoffeeContext.Provider value={{ cart, addCoffeeToTheCart }}>
      {children}
    </CoffeeContext.Provider>
  )
}
