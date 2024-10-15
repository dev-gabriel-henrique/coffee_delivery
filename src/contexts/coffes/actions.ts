import { ICoffee } from "./reducer";

export enum ActionTypes {
  SELECT_NEW_COFFEE = 'SELECT_NEW_COFFEE',
  SET_ACTIVE_COFFEE = 'SET_ACTIVE_COFFEE',
}

export function selectNewCoffeeAction(newCoffe: ICoffee) {
  return {
    type: ActionTypes.SELECT_NEW_COFFEE,
    payload: {
      newCoffe,
    },
  }
}

export function setActiveAddressIdAction(id: number) {
  return {
    type: ActionTypes.SET_ACTIVE_COFFEE,
    payload: {
      id,
    }
  }
}