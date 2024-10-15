import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { coffeeReducers, ICoffee } from "./reducer";
import { differenceInSeconds } from "date-fns";
import { selectNewCoffeeAction, setActiveAddressIdAction } from "./actions";

interface ICoffeeData {
  value: string;
  coffee: string;
  quantity: number | null;
  payment: string;
  quantityAmount: (quantity: number, value: string) => void;
}

interface ICreateCoffeeContext {
  coffees: ICoffee[];
  amountSecondsPassed: number;
  selectedCoffeeId: number | null;
  selectedCoffee: ICoffee | undefined;
  setSecondsPassed: (seconds: number) => void;
  selectNewCoffee: (data: ICoffeeData) => void;
}

interface ICoffeeContextProvider {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as ICreateCoffeeContext)

export function CoffeeContextProvider({ children }: ICoffeeContextProvider) {
  const [coffeeState, dispatch] = useReducer(
    coffeeReducers,
    {
      coffees: [],
      selectedCoffeeId: null
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:coffee-state-1.0.0"
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return initialState;
    }
  );
  const { coffees, selectedCoffeeId } = coffeeState
  const selectedCoffee = coffees.find(
    (coffee) => coffee.id === selectedCoffeeId
  );

  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(() => {
    if (selectedCoffee) {
      return differenceInSeconds(new Date(), new Date(selectedCoffee.startDate))
    }
    return 0
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(selectedCoffee)

    localStorage.setItem("@coffee-delivery:coffee-state-1.0.0", stateJSON)
  }, [selectedCoffee])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  };

  function selectNewCoffee(data: ICoffeeData) {
    const newCoffee: ICoffee = {
      id: new Date().getTime(),
      coffee: data.coffee,
      quantidade: data.quantity,
      valor: data.value,
      startDate: new Date(),
    }

    dispatch(selectNewCoffeeAction(newCoffee))

    dispatch(setActiveAddressIdAction(newCoffee.id))

    setAmountSecondsPassed(0)
  }

  return (
    <CoffeeContext.Provider
    value={{
      amountSecondsPassed,
      coffees,
      selectedCoffee,
      selectedCoffeeId,
      selectNewCoffee,
      setSecondsPassed
    }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}