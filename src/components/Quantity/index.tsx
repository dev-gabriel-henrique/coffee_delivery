import {
  useFormContext,
} from 'react-hook-form'

import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityContainer } from "./Quantity";

export function Quantity() {
  const { register, setValue, watch } = useFormContext()

  const coffeeQuantity = watch("quantity");

  const handleIncrement = () => {
    coffeeQuantity == null ? (
      setValue('quantity', 1)
    ) : (
    setValue('quantity', coffeeQuantity + 1)
    )
  }

  const handleDecrement = () => {
    if(coffeeQuantity > 0) {
    setValue('quantity', coffeeQuantity - 1)
  }
  }

  const handleManualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 2 && /^[0-9]*$/.test(newValue)) {
      setValue("quantity", newValue ? Number(newValue) : null);
    }
  };

  return (
    <QuantityContainer>
    <button
    type="button"
    id="minusButton"
    onClick={handleDecrement}
    disabled={coffeeQuantity <= 0}>
      <Minus weight="bold" size={14} />
    </button>

    <input
    id="number" 
    type="number" 
    maxLength={2}
    value={coffeeQuantity == null ? null : coffeeQuantity}
    {...register("quantity", 
      { valueAsNumber: true,
        onChange: handleManualChange
       })}
    />

    <button 
    type="button"
    id="moreButton"
    onClick={handleIncrement}
    >
      <Plus weight="bold" size={14} />
    </button>
  </QuantityContainer>
  )
}