import { ButtonContainer } from "../../components/Variants/ButtonVariants";
import { DeliveryPaymentMethod } from "./components/DeliveryPaymentMethod";
import { Selecteds } from "./components/Selecteds";
import { CartContainer } from "./styles";

export function Cart() {
  return (
    <CartContainer>
    <Selecteds />
    <DeliveryPaymentMethod />

    <ButtonContainer variant="primary">
      Confirmar Pedido
    </ButtonContainer>
    </CartContainer>
  )
}