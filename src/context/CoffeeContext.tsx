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

interface CoffeeContextType {
  orders: Order[]
  cartState: Cart
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
  const [cartState, dispatch] = useReducer(cartReducer, {
    selectedCoffeeList: [],
    deliveryPrice: DELIVERY_PRICE,
    subtotal: 0,
    total: 0,
  })
  const [orders, setOrders] = useState<Order[]>([])
  const { selectedCoffeeList } = cartState

  useEffect(() => {
    dispatch(calculateTotal())
  }, [selectedCoffeeList])

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
    console.log(orders)

    resetCart()
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
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
