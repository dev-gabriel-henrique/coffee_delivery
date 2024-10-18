import { Trash } from "@phosphor-icons/react";
import { Quantity } from "../../../../components/Quantity";
import { ButtonContainer } from "../../../../components/Variants/ButtonVariants";
import {
  CoffeeSelected,
  DeliveryTax,
  H1Selected,
  SelectedsContainer,
  SelectedsMain,
  TotalValue,
  ValueOfTotalItems,
} from "./Selecteds";
import { useContext, useState } from "react";
import { CombinedContext } from "../../../../contexts/CombinedContext";
import { FormProvider, useForm } from "react-hook-form";

export function Selecteds() {
  const { cart, removeCoffeeFromCart } = useContext(CombinedContext)
  
  const [deliveryTax] = useState<number>(3.5)

  const multiplyCoffes = (a: number, b: number) => {
    if (a > 1) {
      return b * a
    }
    return b
  }

  const totalItemsValue = cart.reduce((total, coffee) => {
    return total + multiplyCoffes(coffee.quantidade, Number(coffee.valor));
  }, 0);

  const totalValue = totalItemsValue + deliveryTax;
    
  return (
    <div>
      <H1Selected>Cafés Selecionados</H1Selected>
      <SelectedsContainer>
        <div>
          {cart.length ? (
            cart.map((selectedCoffee) => (
              <CoffeeSelected key={selectedCoffee!.id}>
                <img src={selectedCoffee.imgSrc} alt="" />
              <div>
                <p>{selectedCoffee!.coffee}</p>

                <div>
                  <FormProvider {...useForm({defaultValues: { quantity: selectedCoffee!.quantidade } })}>
                  <Quantity />
                  </FormProvider>
                <ButtonContainer 
                onClick={() => removeCoffeeFromCart}
                variant="secondary">
                  <Trash size={16} />
                  Remover
                </ButtonContainer>
                </div>
              </div>

              <p>
                <span>R$</span>
                {selectedCoffee!.valor},00
              </p>
            </CoffeeSelected> )
            )) : (
              <CoffeeSelected
                style={{justifyContent: "center",
                  borderBottom: "none"
                }}>
                <h1>
                  Selecione um café na página inicial
                  </h1>
              </CoffeeSelected>
            )
          }
        </div>


            {cart.length ? (
           <SelectedsMain>
            <ValueOfTotalItems>
            <p>Total de itens</p>
            <p>
            <small>R$</small> {totalItemsValue ? totalItemsValue.toFixed(2).replace(".", ",") : "0,00"}
            </p>
          </ValueOfTotalItems>
            
            
            <DeliveryTax>
            <p>Taxa de Entrega</p>

            <p>
              <small>R$ </small>
              { deliveryTax ? deliveryTax.toFixed(2).replace(".", ",") : "0,00" }
            </p>
          </DeliveryTax>

            <TotalValue>
            <p>Total</p>

            <strong>
              <small>R$ </small>
              {totalValue ? totalValue.toFixed(2).replace(".", ",") : "0,00"}
            </strong>
          </TotalValue>
        </SelectedsMain>
          ) : (
            ""
          )}
      </SelectedsContainer>
    </div>
  );
}
