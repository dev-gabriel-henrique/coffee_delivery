import { Trash } from "@phosphor-icons/react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
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

const quantityValidationSchema = zod.object({
  quantidade: zod
    .number()
    .min(1, "Selecione ao menos 1 café para prosseguir"),
});

type TQuantityFormData = zod.infer<typeof quantityValidationSchema>;

export function Selecteds() {
  const { cart, removeCoffeeFromCart, updateCoffeeQuantity } = useContext(CombinedContext);
  const newCoffeeForm = useForm<TQuantityFormData>({
    resolver: zodResolver(quantityValidationSchema),
    defaultValues: {
      quantidade: 0,
    },
  });

  const [deliveryTax] = useState<number>(3.5);

  const multiplyCoffes = (a: number, b: number) => (a > 1 ? b * a : b);

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
              <CoffeeSelected key={selectedCoffee.id!}>
                <img src={selectedCoffee.imgSrc!} alt="" />
                <div>
                  <p>{selectedCoffee.coffee!}</p>

                  <div>
                    <FormProvider {...newCoffeeForm}>
                      <Quantity
                        quantity={selectedCoffee.quantidade}
                        onIncrement={() => updateCoffeeQuantity(selectedCoffee.id!, selectedCoffee.quantidade + 1)}
                        onDecrement={() => updateCoffeeQuantity(selectedCoffee.id!, selectedCoffee.quantidade - 1)}
                      />
                    </FormProvider>
                    <ButtonContainer
                      onClick={() => removeCoffeeFromCart(selectedCoffee.id!)}
                      variant="secondary"
                    >
                      <Trash size={16} />
                      Remover
                    </ButtonContainer>
                  </div>
                </div>

                <p>
                  <span>R$</span>
                  {Number(selectedCoffee.valor).toFixed(2).replace(".", ",")}
                </p>
              </CoffeeSelected>
            ))
          ) : (
            <CoffeeSelected
              style={{ justifyContent: "center", borderBottom: "none" }}
            >
              <h1>Selecione um café na página inicial</h1>
            </CoffeeSelected>
          )}
        </div>

        {cart.length ? (
          <SelectedsMain>
            <ValueOfTotalItems>
              <p>Total de itens</p>
              <p>
                <small>R$</small>{" "}
                {totalItemsValue
                  ? totalItemsValue.toFixed(2).replace(".", ",")
                  : "0,00"}
              </p>
            </ValueOfTotalItems>

            <DeliveryTax>
              <p>Taxa de Entrega</p>

              <p>
                <small>R$ </small>
                {deliveryTax
                  ? deliveryTax.toFixed(2).replace(".", ",")
                  : "0,00"}
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
