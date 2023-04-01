import { v4 as uuid } from 'uuid'
import { ActionTypes } from './actions'

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

export interface Cart {
  selectedCoffeeList: CoffeeCart[]
  deliveryPrice: number
  subtotal: number
  total: number
}

export const DELIVERY_PRICE = 3.5

export function cartReducer(state: Cart, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_THE_CART: {
      return {
        ...state,
        selectedCoffeeList: [
          ...state.selectedCoffeeList,
          action.payload.newCoffee,
        ],
      }
    }
    case ActionTypes.REMOVE_COFFEE_FROM_THE_CART: {
      return {
        ...state,
        selectedCoffeeList: state.selectedCoffeeList.filter(
          (coffee) => coffee.id !== action.payload.selectedCoffeeId,
        ),
      }
    }
    case ActionTypes.INCREASE_QUANTITY_OF_SELECTED_COFFEE: {
      return {
        ...state,
        selectedCoffeeList: state.selectedCoffeeList.map((selectedCoffee) => {
          if (selectedCoffee.id === action.payload.selectedCoffeeId) {
            return {
              ...selectedCoffee,
              quantity: selectedCoffee.quantity + 1,
            }
          } else {
            return selectedCoffee
          }
        }),
      }
    }
    case ActionTypes.DECREASE_QUANTITY_OF_SELECTED_COFFEE: {
      return {
        ...state,
        selectedCoffeeList: state.selectedCoffeeList.map((selectedCoffee) => {
          if (selectedCoffee.id === action.payload.selectedCoffeeId) {
            return {
              ...selectedCoffee,
              quantity: selectedCoffee.quantity - 1,
            }
          } else {
            return selectedCoffee
          }
        }),
      }
    }
    case ActionTypes.CALCULATE_TOTAL: {
      const subtotal = state.selectedCoffeeList.reduce((acc, item) => {
        return acc + item.price * item.quantity
      }, 0)

      const total = subtotal + DELIVERY_PRICE

      return {
        ...state,
        subtotal,
        total,
      }
    }
    case ActionTypes.RESET_CART: {
      return {
        ...state,
        selectedCoffeeList: [],
      }
    }
    default: {
      return state
    }
  }
}
