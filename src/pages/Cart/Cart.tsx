import { NavLink } from "react-router-dom";
import { DeliveryPaymentMethod } from "./components/DeliveryPaymentMethod";
import { Selecteds } from "./components/Selecteds";
import { CartContainer } from "./styles";
import { useContext } from "react";
import { CombinedContext } from "../../contexts/CombinedContext";
import { ButtonContainer } from "../../components/Variants/ButtonVariants";

export function Cart() {
  const { cart, activeAddress } = useContext(CombinedContext);
  return (
    <CartContainer>
      {cart.length ? (
        <CartContainer>
          <Selecteds />
          <DeliveryPaymentMethod />

          {activeAddress ? (
            <NavLink to="/success">Confirmar Pedido</NavLink>
          ) : (
            <ButtonContainer
              variant="primary"
              disabled={!activeAddress}
            >
              Selecione o Endereço por gentileza
            </ButtonContainer>
          )}
        </CartContainer>
      ) : (
        <Selecteds />
      )}
    </CartContainer>
  );
}
