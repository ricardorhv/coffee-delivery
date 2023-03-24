import { createContext, ReactNode, useState } from 'react'
import { v4 as uuid } from 'uuid'

export interface Coffee {
  id: string
  name: string
  description: string
  tags: string[]
  price: number
  coffeeImage: string
}

export interface CoffeeCart extends Coffee {
  quantity: number
}

interface CartInfo {
  subtotal: number
  deliveryPrice: number
  total: number
}

interface CoffeeContextType {
  coffeeListCart: CoffeeCart[]
  addCoffeeToTheCart: (data: CoffeeCart) => void
  removeCoffeeFromTheCart: (coffeeId: string) => void
  increaseQuantity: (coffeeId: string, counter: number) => void
  decreaseQuantity: (coffeeId: string, counter: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeListCart, setCoffeeListCart] = useState<CoffeeCart[]>([])

  function addCoffeeToTheCart(newCoffee: CoffeeCart) {
    const newCoffeeCart = {
      ...newCoffee,
      id: uuid(),
    }
    setCoffeeListCart((state) => [...state, newCoffeeCart])
  }

  function removeCoffeeFromTheCart(coffeeId: string) {
    const newCoffeeListCart = coffeeListCart.filter(
      (coffee) => coffee.id !== coffeeId,
    )
    setCoffeeListCart(newCoffeeListCart)
  }

  function increaseQuantity(coffeeId: string, counter: number) {
    const newCoffeeListCart = coffeeListCart.map((coffeeCart) => {
      if (coffeeCart.id === coffeeId) {
        return {
          ...coffeeCart,
          quantity: coffeeCart.quantity + 1,
        }
      }
      return coffeeCart
    })
    setCoffeeListCart(newCoffeeListCart)
  }

  function decreaseQuantity(coffeeId: string, counter: number) {
    const newCoffeeListCart = coffeeListCart.map((coffeeCart) => {
      if (coffeeCart.id === coffeeId) {
        return {
          ...coffeeCart,
          quantity: coffeeCart.quantity - 1,
        }
      }
      return coffeeCart
    })
    setCoffeeListCart(newCoffeeListCart)
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeListCart,
        addCoffeeToTheCart,
        removeCoffeeFromTheCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
