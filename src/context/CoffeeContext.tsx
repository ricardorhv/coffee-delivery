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

interface FormDataType {
  CEP: string
  street: string
  houseNumber: number
  complement?: string
  neighborhood: string
  city: string
  UF: string
  paymentWay: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
}

interface Cart {
  selectedCoffeeList: CoffeeCart[]
  deliveryPrice: number
  subtotal: number
  total: number
}

interface Order extends Cart {
  id: string
  info: FormDataType
}

interface CoffeeContextType {
  orders: Order[]
  cart: Cart
  addCoffeeToTheCart: (data: CoffeeCart) => void
  removeCoffeeFromTheCart: (coffeeId: string) => void
  increaseQuantity: (coffeeId: string) => void
  decreaseQuantity: (coffeeId: string) => void
  createNewOrder: (formData: FormDataType) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const deliveryPrice = 3.5
  const [orders, setOrders] = useState<Order[]>([])
  const [cart, setCart] = useState<Cart>({
    selectedCoffeeList: [],
    deliveryPrice,
    subtotal: 0,
    total: 0,
  })
  const { selectedCoffeeList } = cart

  useEffect(() => {
    const getSubtotal = () =>
      selectedCoffeeList.reduce((acc, item) => {
        return acc + item.price * item.quantity
      }, 0)

    const getTotal = () => getSubtotal() + deliveryPrice
    setCart((state) => {
      return {
        ...state,
        subtotal: getSubtotal(),
        total: getTotal(),
      }
    })
  }, [selectedCoffeeList])

  function addCoffeeToTheCart(newCoffee: CoffeeCart) {
    const newCoffeeSelected = {
      ...newCoffee,
      id: uuid(),
    }
    setCart((state) => {
      return {
        ...state,
        selectedCoffeeList: [...state.selectedCoffeeList, newCoffeeSelected],
      }
    })
  }

  function removeCoffeeFromTheCart(coffeeId: string) {
    setCart((state) => {
      return {
        ...state,
        selectedCoffeeList: state.selectedCoffeeList.filter(
          (coffee) => coffee.id !== coffeeId,
        ),
      }
    })
  }

  function increaseQuantity(coffeeId: string) {
    setCart((state) => {
      return {
        ...state,
        selectedCoffeeList: state.selectedCoffeeList.map((selectedCoffee) => {
          if (selectedCoffee.id === coffeeId) {
            return {
              ...selectedCoffee,
              quantity: selectedCoffee.quantity + 1,
            }
          } else {
            return selectedCoffee
          }
        }),
      }
    })
  }

  function decreaseQuantity(coffeeId: string) {
    setCart((state) => {
      return {
        ...state,
        selectedCoffeeList: state.selectedCoffeeList.map((selectedCoffee) => {
          if (selectedCoffee.id === coffeeId) {
            return {
              ...selectedCoffee,
              quantity: selectedCoffee.quantity - 1,
            }
          } else {
            return selectedCoffee
          }
        }),
      }
    })
  }

  function createNewOrder(formData: FormDataType) {
    const newOrder = {
      id: uuid(),
      info: formData,
      ...cart,
    }

    setOrders((state) => [...state, newOrder])
    setCart({
      selectedCoffeeList: [],
      deliveryPrice: 3.5,
      subtotal: 0,
      total: 0,
    })
  }

  return (
    <CoffeeContext.Provider
      value={{
        orders,
        addCoffeeToTheCart,
        removeCoffeeFromTheCart,
        increaseQuantity,
        decreaseQuantity,
        createNewOrder,
        cart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
