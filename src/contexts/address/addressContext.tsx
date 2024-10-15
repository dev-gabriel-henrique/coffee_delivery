import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { addressReducers, IAddress } from "./reducer";
import { differenceInSeconds } from "date-fns";
import { addNewAddressAction, setActiveAddressId } from "./actions";

interface IAddressData {
  id?: number;
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface ICreateAddressContext {
  addresses: IAddress[];
  amountSecondsPassed: number;
  activeAddressId: number | null;
  activeAddress: IAddress | undefined;
  setSecondsPassed: (seconds: number) => void;
  createNewAddress: (data: IAddressData) => void;
}

interface IAddressContextProvider {
  children: ReactNode;
}

export const AddressContext = createContext({} as ICreateAddressContext);

export function AddressContextProvider({ children }: IAddressContextProvider) {
  const [addressState, dispatch] = useReducer(
    addressReducers,
    {
      addresses: [],
      activeAddressId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:addresses-state-1.0.0"
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return initialState;
    }
  );
  const { addresses, activeAddressId } = addressState;
  const activeAddress = addresses.find(
    (address) => address.id === activeAddressId
  );
  
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(() => {
    if (activeAddress) {
      return differenceInSeconds(new Date(), new Date(activeAddress.startDate));
    }
    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(addressState)

    localStorage.setItem('@coffee-delivery:addresses-state-1.0.0', stateJSON)

  }, [addressState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
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
    }

    dispatch(addNewAddressAction(newAddress))

    dispatch(setActiveAddressId(newAddress.id))

    setAmountSecondsPassed(0)
  }
  return (
    <AddressContext.Provider
    value={{
      activeAddress,
      activeAddressId,
      addresses,
      amountSecondsPassed,
      createNewAddress,
      setSecondsPassed
    }}
    >
      {children}
    </AddressContext.Provider>
  )
}
