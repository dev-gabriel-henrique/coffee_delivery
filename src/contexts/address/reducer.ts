import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface IAddress {
  id: number;
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  startDate: Date;
}

interface IAddressState {
  addresses: IAddress[];
  activeAddressId: number | null;
}

export function addressReducers(
  state: IAddressState,
  action: any,
) {
  switch(action.type) {
    case ActionTypes.ADD_NEW_ADDRESS: {
      return produce(state, draft => {
        draft.addresses.push(action.payload.newAddress),
        draft.activeAddressId = state.activeAddressId
      })
    }

    case ActionTypes.SET_ACTIVE_ADDRESS_ID: {
      return produce(state, (draft) => {
        draft.activeAddressId = action.payload.id;
      });
    }

    default: {
      return state;
    }
  }
}