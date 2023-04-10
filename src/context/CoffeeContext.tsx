import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { v4 as uuid } from 'uuid'

import {
  addCoffeeToTheCartAction,
  calculateTotal,
  decreaseQuantityAction,
  increaseQuantityAction,
  removeCoffeeFromTheCartAction,
  resetCartAction,
} from '../reducers/cart/actions'
import {
  cartReducer,
  Cart,
  CoffeeCart,
  DELIVERY_PRICE,
} from '../reducers/cart/reducer'

export interface FormDataType {
  CEP: string
  street: string
  houseNumber: number
  complement?: string
  neighborhood: string
  city: string
  UF: string
  paymentWay: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
}

export interface Order extends Cart {
  id: string
  info: FormDataType
}

type ThemeProps = 'light' | 'dark'

interface CoffeeContextType {
  orders: Order[]
  cartState: Cart
  isLightTheCurrentTheme: boolean
  currentTheme: ThemeProps
  addCoffeeToTheCart: (data: CoffeeCart) => void
  removeCoffeeFromTheCart: (coffeeId: string) => void
  increaseQuantity: (coffeeId: string) => void
  decreaseQuantity: (coffeeId: string) => void
  createNewOrder: (formData: FormDataType) => void
  switchCurrentTheme: (newTheme: ThemeProps) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      selectedCoffeeList: [],
      deliveryPrice: DELIVERY_PRICE,
      subtotal: 0,
      total: 0,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const [orders, setOrders] = useState<Order[]>([])
  const { selectedCoffeeList } = cartState

  const storedTheme = localStorage?.getItem('theme') ?? 'light'

  const [currentTheme, setCurrentTheme] = useState<ThemeProps>(
    storedTheme as ThemeProps,
  )
  const isLightTheCurrentTheme = currentTheme === 'light'

  useEffect(() => {
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  useEffect(() => {
    dispatch(calculateTotal())
  }, [selectedCoffeeList])

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addCoffeeToTheCart(data: CoffeeCart) {
    const newCoffee = {
      ...data,
      id: uuid(),
    }
    dispatch(addCoffeeToTheCartAction(newCoffee))
  }

  function removeCoffeeFromTheCart(coffeeId: string) {
    dispatch(removeCoffeeFromTheCartAction(coffeeId))
  }

  function increaseQuantity(coffeeId: string) {
    dispatch(increaseQuantityAction(coffeeId))
  }

  function decreaseQuantity(coffeeId: string) {
    dispatch(decreaseQuantityAction(coffeeId))
  }

  function resetCart() {
    dispatch(resetCartAction())
  }

  function createNewOrder(formData: FormDataType) {
    const newOrder = {
      id: uuid(),
      info: formData,
      ...cartState,
    }

    setOrders((state) => [...state, newOrder])
    resetCart()
  }

  function switchCurrentTheme(newTheme: ThemeProps) {
    setCurrentTheme(newTheme)
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
        cartState,
        switchCurrentTheme,
        isLightTheCurrentTheme,
        currentTheme,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
