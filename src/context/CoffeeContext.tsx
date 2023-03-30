import { createContext, ReactNode, useEffect, useState } from 'react'
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

interface OrderInformation {
  CEP: string
  street: string
  houseNumber: number
  complement?: string
  neighborhood: string
  city: string
  UF: string
  paymentWay: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
}

interface Order {
  id: string
  coffeeList: CoffeeCart[]
  info: OrderInformation
  deliveryPrice: number
  subtotal: number
  total: number
}

interface CoffeeContextType {
  order: Order
  coffeeListCart: CoffeeCart[]
  addCoffeeToTheCart: (data: CoffeeCart) => void
  removeCoffeeFromTheCart: (coffeeId: string) => void
  increaseQuantity: (coffeeId: string) => void
  decreaseQuantity: (coffeeId: string) => void
  confirmOrder: (info: OrderInformation) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [order, setOrder] = useState<Order>({
    id: uuid(),
    coffeeList: [],
    info: {} as OrderInformation,
    deliveryPrice: 3.5,
    subtotal: 0,
    total: 0,
  })
  const [coffeeListCart, setCoffeeListCart] = useState<CoffeeCart[]>([])

  useEffect(() => {
    const getSubtotal = () =>
      coffeeListCart.reduce((acc, item) => {
        return acc + item.price * item.quantity
      }, 0)

    const getTotal = () => getSubtotal() + 3.5
    setOrder((state) => {
      return {
        ...state,
        subtotal: getSubtotal(),
        total: getTotal(),
      }
    })
  }, [coffeeListCart])

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
    setCoffeeListCart(() => newCoffeeListCart)
  }

  function increaseQuantity(coffeeId: string) {
    const newCoffeeListCart = coffeeListCart.map((coffeeCart) => {
      if (coffeeCart.id === coffeeId) {
        return {
          ...coffeeCart,
          quantity: coffeeCart.quantity + 1,
        }
      }
      return coffeeCart
    })
    setCoffeeListCart(() => newCoffeeListCart)
  }

  function decreaseQuantity(coffeeId: string) {
    const newCoffeeListCart = coffeeListCart.map((coffeeCart) => {
      if (coffeeCart.id === coffeeId) {
        return {
          ...coffeeCart,
          quantity: coffeeCart.quantity - 1,
        }
      }
      return coffeeCart
    })
    setCoffeeListCart(() => newCoffeeListCart)
  }

  function confirmOrder(info: OrderInformation) {
    setOrder((state) => {
      return {
        ...state,
        info,
        coffeeList: coffeeListCart,
      }
    })
    setCoffeeListCart([])
  }

  return (
    <CoffeeContext.Provider
      value={{
        order,
        addCoffeeToTheCart,
        removeCoffeeFromTheCart,
        increaseQuantity,
        decreaseQuantity,
        confirmOrder,
        coffeeListCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
