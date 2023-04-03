import { v4 as uuid } from 'uuid'
import { ActionTypes } from './actions'
import { produce } from 'immer'

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
      return produce(state, (draft) => {
        draft.selectedCoffeeList.push(action.payload.newCoffee)
      })
    }
    case ActionTypes.REMOVE_COFFEE_FROM_THE_CART: {
      const selectedCoffeeId = state.selectedCoffeeList.findIndex(
        (selectedCoffee) =>
          selectedCoffee.id === action.payload.selectedCoffeeId,
      )

      if (selectedCoffeeId < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.selectedCoffeeList.splice(selectedCoffeeId, 1)
      })
    }
    case ActionTypes.INCREASE_QUANTITY_OF_SELECTED_COFFEE: {
      const selectedCoffeeId = state.selectedCoffeeList.findIndex(
        (selectedCoffee) =>
          selectedCoffee.id === action.payload.selectedCoffeeId,
      )

      if (selectedCoffeeId < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.selectedCoffeeList[selectedCoffeeId].quantity += 1
      })
    }
    case ActionTypes.DECREASE_QUANTITY_OF_SELECTED_COFFEE: {
      const selectedCoffeeId = state.selectedCoffeeList.findIndex(
        (selectedCoffee) =>
          selectedCoffee.id === action.payload.selectedCoffeeId,
      )

      if (selectedCoffeeId < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.selectedCoffeeList[selectedCoffeeId].quantity -= 1
      })
    }
    case ActionTypes.CALCULATE_TOTAL: {
      const subtotal = state.selectedCoffeeList.reduce((acc, item) => {
        return acc + item.price * item.quantity
      }, 0)

      const total = subtotal + DELIVERY_PRICE

      return produce(state, (draft) => {
        draft.subtotal = subtotal
        draft.total = total
      })
    }
    case ActionTypes.RESET_CART: {
      return produce(state, (draft) => {
        draft.selectedCoffeeList = []
      })
    }
    default: {
      return state
    }
  }
}
