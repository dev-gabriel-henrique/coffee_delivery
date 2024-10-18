import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { 
  ICoffee, 
  IAddress, 
  addressReducers ,
  cartReducers,
  } from "./reducers"
import { differenceInSeconds } from "date-fns";
import { 
  addNewAddressAction, 
  setActiveAddressIdAction,
  addToCartAction,
  removeFromCartAction,
} from "./actions";

interface IAddressData {
  id?: number;
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface ICartState {
  coffee: ICoffee[]
}

interface ICombinedContext {
  addresses: IAddress[];
  activeAddress: IAddress | undefined;
  activeAddressId: number | null;
  amountSecondsPassed: number;
  cart: ICoffee[];
  setSecondsPassed: (seconds: number) => void;
  createNewAddress: (data: IAddressData) => void;
  addCoffeeToCart: (data: ICoffee) => void;
  removeCoffeeFromCart: (coffeeId: number) => void;
}

interface ICombinedContextProviderProps {
  children: ReactNode;
}

export const CombinedContext = createContext({} as ICombinedContext);

export function CombinedContextProvider({ children }: ICombinedContextProviderProps) {
  const [addressState, dispatchAddress] = useReducer(
    addressReducers,
    {
      addresses: [],
      activeAddressId: null,
    },
    (initialState) => {
      const storedAddressState = localStorage.getItem("@delivery:address-state");
      return storedAddressState ? JSON.parse(storedAddressState) : initialState;
    }
  );

  function loadStoredCartState(defaultCartState: ICartState): ICartState {
    const storedCartState = localStorage.getItem("@delivery:cart-state");
    const parsedState = storedCartState ? JSON.parse(storedCartState) : defaultCartState;
  
    return {
      coffee: parsedState.coffee || [],
    };
  }
  

  const [cartState, dispatchCart] = useReducer(
    cartReducers,
    {coffee: []},
    loadStoredCartState
  );

  const { addresses, activeAddressId } = addressState;
  const cart = cartState.coffee;

  const activeAddress = addresses.find((address) => address.id === activeAddressId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(() => {
    if (activeAddress) {
      return differenceInSeconds(new Date(), new Date(activeAddress.startDate));
    }
    return 0;
  });

  useEffect(() => {
    try {
      const addressStateJSON = JSON.stringify(addressState);
      const cartStateJSON = JSON.stringify(cartState);

      localStorage.setItem("@delivery:address-state", addressStateJSON);
      localStorage.setItem("@delivery:cart-state", cartStateJSON);
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }, [addressState, cartState]);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }
  function createNewAddress(data: IAddressData) {
    const newAddress: IAddress = {
      id: new Date().getTime(),
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
      complemento: data.complemento,
      startDate: new Date(),
    };

    dispatchAddress(addNewAddressAction(newAddress));
    dispatchAddress(setActiveAddressIdAction(newAddress.id));
    setAmountSecondsPassed(0);
  }

  function addCoffeeToCart(coffee: ICoffee) {
    dispatchCart(addToCartAction(coffee));
  }

  function removeCoffeeFromCart(coffeeId: number) {
    dispatchCart(removeFromCartAction(coffeeId));
  }
  
  return (
    <CombinedContext.Provider
      value={{
        addresses,
        cart,
        activeAddress,
        activeAddressId,
        amountSecondsPassed,
        setSecondsPassed,
        createNewAddress,
        addCoffeeToCart,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CombinedContext.Provider>
  );
}
