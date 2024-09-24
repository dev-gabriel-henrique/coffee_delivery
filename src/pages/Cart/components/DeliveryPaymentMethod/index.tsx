import { CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
import {
  DeliveryPaymentContainer,
  PaymentMethod,
  PaymentSummary,
} from "./DeliveryPaymentMethod";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { ButtonContainer } from "../../../../components/Variants/ButtonVariants";

export function DeliveryPaymentMethod() {
  return (
    <DeliveryPaymentContainer>
      <PaymentSummary>
        <CurrencyDollar weight="regular" size={22} />

        <div>
          <h2>Forma de Pagamento</h2>

          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentSummary>

      <PaymentMethod>
        <ButtonContainer 
        type="button" 
        variant="checkbox"
        >
          <CreditCard size={16} />
          Cartão de Crédito
        </ButtonContainer>

        <ButtonContainer 
        type="button" 
        variant="checkbox"
        >
          <Bank size={16} />
          Cartão de Débito
        </ButtonContainer>

        <ButtonContainer 
        type="button" 
        variant="checkbox"
        >
          <Money size={16} />
          Dinheiro
        </ButtonContainer>
      </PaymentMethod>
    </DeliveryPaymentContainer>
  );
}