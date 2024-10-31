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
  switch (action.type) {
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
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const { coffee } = action.payload;
      const existingCoffee = state.coffee.find(item => item.id === coffee.id);

      if (existingCoffee) {
        return {
          ...state,
          coffee: state.coffee.map(item =>
            item.id === coffee.id
              ? { ...item, quantidade: (item.quantidade || 0) + (coffee.quantidade || 0) }
              : item
          ),
        };
      }

      return {
        ...state,
        coffee: [...state.coffee, coffee],
      };
    }

    case ActionTypes.UPDATE_CART: {
      return {
        ...state,
        coffee: state.coffee.map((item) =>
          item.id === action.payload.coffeeId
            ? { ...item, quantidade: action.payload.newQuantity }
            : item
        ),
      };
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const coffeeIdToRemove = action.payload;
      console.log("Removendo ID:", coffeeIdToRemove);
      return {
        ...state,
        coffee: [...state.coffee.filter(item => item.id !== coffeeIdToRemove)],
      };
    }

    case ActionTypes.CLEAR_CART: {
      return {...state, coffee: []}
    }

    default:
      return state;
  }
}

