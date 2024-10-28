import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityContainer } from "./Quantity";

interface QuantityProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function Quantity({ quantity, onIncrement, onDecrement }: QuantityProps) {
  return (
    <QuantityContainer>
      <button
        type="button"
        onClick={onDecrement}
        disabled={quantity <= 0}
        aria-label="Decrementar quantidade"
      >
        <Minus weight="bold" size={14} />
      </button>

      <input
        type="number"
        value={quantity}
        min={0}
      />

      <button
        type="button"
        onClick={onIncrement}
        aria-label="Incrementar quantidade"
      >
        <Plus weight="bold" size={14} />
      </button>
    </QuantityContainer>
  );
}
