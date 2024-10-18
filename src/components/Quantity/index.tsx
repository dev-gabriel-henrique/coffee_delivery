import { useFormContext } from 'react-hook-form';
import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityContainer } from "./Quantity";

export function Quantity() {
  const { register, setValue, watch } = useFormContext();

  const coffeeQuantity = watch("quantidade") ?? 0;

  const handleIncrement = () => {
    const newQuantity = coffeeQuantity === 0 ? 1 : coffeeQuantity + 1;
    setValue('quantidade', newQuantity);
  };

  const handleDecrement = () => {
    if (coffeeQuantity && coffeeQuantity > 0) {
      setValue('quantidade', coffeeQuantity - 1);
    }
  };

  const handleManualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d{0,2}$/.test(newValue)) {
      setValue("quantidade", newValue ? Number(newValue) : 0);
    }
  };

  return (
    <QuantityContainer>
      <button
        type="button"
        id="minusButton"
        onClick={handleDecrement}
        disabled={!coffeeQuantity}
      >
        <Minus weight="bold" size={14} />
      </button>

      <input
        id="number"
        type="number"
        value={coffeeQuantity}
        {...register("quantidade", {
          valueAsNumber: true,
          onChange: handleManualChange,
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
  );
}
