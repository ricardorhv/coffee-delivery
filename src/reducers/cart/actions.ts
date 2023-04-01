import { CoffeeCart } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_THE_CART = 'ADD_COFFEE_TO_THE_CART',
  REMOVE_COFFEE_FROM_THE_CART = 'REMOVE_COFFEE_FROM_THE_CART',
  INCREASE_QUANTITY_OF_SELECTED_COFFEE = 'INCREASE_QUANTITY_OF_SELECTED_COFFEE',
  DECREASE_QUANTITY_OF_SELECTED_COFFEE = 'DECREASE_QUANTITY_OF_SELECTED_COFFEE',
  CALCULATE_TOTAL = 'CALCULATE_TOTAL',
  RESET_CART = 'RESET_CART',
}

export function addCoffeeToTheCartAction(newCoffee: CoffeeCart) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_THE_CART,
    payload: {
      newCoffee,
    },
  }
}

export function removeCoffeeFromTheCartAction(selectedCoffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_THE_CART,
    payload: {
      selectedCoffeeId,
    },
  }
}

export function increaseQuantityAction(selectedCoffeeId: string) {
  return {
    type: ActionTypes.INCREASE_QUANTITY_OF_SELECTED_COFFEE,
    payload: {
      selectedCoffeeId,
    },
  }
}

export function decreaseQuantityAction(selectedCoffeeId: string) {
  return {
    type: ActionTypes.DECREASE_QUANTITY_OF_SELECTED_COFFEE,
    payload: {
      selectedCoffeeId,
    },
  }
}

export function calculateTotal() {
  return {
    type: ActionTypes.CALCULATE_TOTAL,
  }
}

export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART,
  }
}
