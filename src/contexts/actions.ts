import { IAddress, ICoffee } from "./reducers";

export enum ActionTypes {
  ADD_NEW_ADDRESS = 'ADD_NEW_ADDRESS',
  SET_ACTIVE_ADDRESS_ID = "SET_ACTIVE_ADDRESS_ID",
  ADD_TO_CART = 'ADD_TO_CART',
  UPDATE_CART = 'UPDATE_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART'
}

export interface AddAddressAction {
  type: typeof ActionTypes.ADD_NEW_ADDRESS;
  payload: {
    newAddress: IAddress
  }
}

export interface SetActiveAddressIdAction {
  type: typeof ActionTypes.SET_ACTIVE_ADDRESS_ID;
  payload: number
}

export interface AddCoffeeToCartAction {
  type: typeof ActionTypes.ADD_TO_CART;
  payload: {
    coffee: ICoffee;
  };
}

export interface UpdateCartAction {
  type: typeof ActionTypes.UPDATE_CART;
  payload: {
    coffeeId: number,
    newQuantity: number,
  }
}

export interface RemoveCoffeeFromCartAction {
  type: typeof ActionTypes.REMOVE_FROM_CART;
  payload: number;
}

export type AddressAction = AddAddressAction | SetActiveAddressIdAction
export type CartAction = 
 | AddCoffeeToCartAction 
 | UpdateCartAction 
 | RemoveCoffeeFromCartAction;

export function addNewAddressAction(newAddress: IAddress): AddAddressAction {
  return {
    type: ActionTypes.ADD_NEW_ADDRESS,
    payload: {
      newAddress,
    },
  }
}

export function setActiveAddressIdAction(id: number): SetActiveAddressIdAction {
  return {
    type: ActionTypes.SET_ACTIVE_ADDRESS_ID,
    payload: id,
  }
}

export const addToCartAction = (coffee: ICoffee): AddCoffeeToCartAction => ({
  type: ActionTypes.ADD_TO_CART,
  payload: { coffee },
});

export const updateCartAction = (coffeeId: number, newQuantity: number): UpdateCartAction => ({
  type: ActionTypes.UPDATE_CART,
  payload: {
    coffeeId,
    newQuantity
  }
})

export const removeFromCartAction = (coffeeId: number): RemoveCoffeeFromCartAction => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: coffeeId,
});