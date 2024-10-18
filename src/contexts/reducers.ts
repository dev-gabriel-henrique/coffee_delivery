import { ActionTypes, AddressAction, CartAction } from "./actions";
import { produce } from "immer";
import { ICartState } from "./CombinedContext";

export interface ICoffee {
  id?: number;
  coffee: string;
  imgSrc: string;
  quantidade: number;
  valor: number | string;
  startDate?: Date;
}

export interface IAddress {
  id: number;
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
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
  action: AddressAction,
) {
  switch(action.type) {
    case ActionTypes.ADD_NEW_ADDRESS: {
      return produce(state, draft => {
        draft.addresses.push(action.payload.newAddress),
        draft.activeAddressId = action.payload.newAddress.id
      })
    }

    case ActionTypes.SET_ACTIVE_ADDRESS_ID: {
      return produce(state, (draft) => {
        draft.activeAddressId = action.payload || null;
      });
    }

    default: {
      return state;
    }
  }
}

export function cartReducers(state: ICartState, action: CartAction): ICartState {
  switch(action.type) {
    case ActionTypes.ADD_TO_CART: {
      const { coffee } = action.payload;

      const existingCoffeeIndex = state.coffee.findIndex(item => item.id === coffee.id);

      if (existingCoffeeIndex !== -1) {
        const updatedCoffee = {
          ...state.coffee[existingCoffeeIndex],
          quantidade: state.coffee[existingCoffeeIndex].quantidade + coffee.quantidade
        };

        const updatedCart = [
          ...state.coffee.slice(0, existingCoffeeIndex),
          updatedCoffee,
          ...state.coffee.slice(existingCoffeeIndex + 1)
        ];

        return { ...state, coffee: updatedCart };
      }

      return { ...state, coffee: [...state.coffee, { ...coffee }] };
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const coffeeIdToRemove = action.payload;
      return { ...state, coffee: state.coffee.filter(item => item.id !== coffeeIdToRemove) };
    }

    default: 
      return state;
  }
}
