import { IAddress } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ADDRESS = 'ADD_NEW_ADDRESS',
  SET_ACTIVE_ADDRESS_ID = "SET_ACTIVE_ADDRESS_ID"
}

export function addNewAddressAction(newAddress: IAddress) {
  return {
    type: ActionTypes.ADD_NEW_ADDRESS,
    payload: {
      newAddress,
    },
  }
}

export function setActiveAddressId(id: number) {
  return {
    type: ActionTypes.SET_ACTIVE_ADDRESS_ID,
    payload: {
      id,
    }
  }
}