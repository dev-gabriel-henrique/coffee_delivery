import * as zod from "zod"
import { FormProvider, useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import { zodResolver } from "@hookform/resolvers/zod";

import { PricesContainer } from "./Prices";
import { ButtonContainer } from "../../../../components/Variants/ButtonVariants";
import { Quantity } from "../../../../components/Quantity";
import { CoffeeContext } from "../../../../contexts/coffes/coffeContext";

interface PricesProps {
  coffeePrice: number;
}

const quantityValidationSchema = zod.object({
  quantity: zod
  .number()
  .min(1, "Selecione ao menos 1 café para prosseguir")
})

type TQuantityFormData = zod.infer<typeof quantityValidationSchema>;

export function Prices({coffeePrice}: PricesProps) {
  const newCoffeeForm = useForm<TQuantityFormData>({
    resolver: zodResolver(quantityValidationSchema),
    defaultValues: {
      quantity: null,
    },
  });
  const { selectNewCoffee } = useContext(CoffeeContext)
  const { handleSubmit, watch } = newCoffeeForm 

  const {formState: { errors }} = newCoffeeForm;

  useEffect(() => {
    if (Object.keys(errors).length) {
      console.log("Erros de validação:", errors);
    }
  }, [errors])

  const handleShopNewCoffee = (data: TQuantityFormData) => {
    selectNewCoffee(data)
  }

  const coffeeQuantity = watch("quantity")

  return (
  <PricesContainer>
    <FormProvider {...newCoffeeForm}>
    <form onSubmit={handleSubmit(handleShopNewCoffee)}>
  <span>
    <small>R$</small> {coffeePrice ? coffeePrice.toFixed(2).replace(".", ",") : "0,00"}
  </span>
  
  <Quantity />

  <ButtonContainer 
  disabled={!coffeeQuantity} 
  type="submit" 
  variant="icon"
  >
    <ShoppingCart size={22} weight="fill" />
  </ButtonContainer>
  </form>
    </FormProvider>
</PricesContainer>
)
}