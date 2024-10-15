import { ActionTypes } from "./actions";
import { produce } from "immer";

export interface ICoffee {
  id: number;
  coffee: string;
  quantidade: number | null;
  valor: string;
  startDate: Date;
}

interface ICoffeeState {
  coffees: ICoffee[];
  selectedCoffeeId: number | null;
}

export function coffeeReducers(
  state: ICoffeeState,
  action: any,
) {
  switch(action.type) {
    case ActionTypes.SELECT_NEW_COFFEE: {
      return produce(state, draft => {
        draft.coffees.push(action.payload.newCoffe)
      })
    }

    case ActionTypes.SET_ACTIVE_COFFEE: {
      return produce(state, (draft) => {
        draft.selectedCoffeeId = action.payload.id
      })
    }
    
    default: {
      return state;
    }
  }
}