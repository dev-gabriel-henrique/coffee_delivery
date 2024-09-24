import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityContainer } from "./Quantity";

export function Quantity() {
  return (
    <QuantityContainer>
    <button type="button">
      <Minus weight="bold" size={14} />
    </button>
    <input type="number" id="number" />
    <button type="button">
      <Plus weight="bold" size={14} />
    </button>
  </QuantityContainer>
  )
}