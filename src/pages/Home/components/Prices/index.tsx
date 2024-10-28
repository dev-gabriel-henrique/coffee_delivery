import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import { zodResolver } from "@hookform/resolvers/zod";

import { PricesContainer } from "./Prices";
import { ButtonContainer } from "../../../../components/Variants/ButtonVariants";
import { Quantity } from "../../../../components/Quantity";
import { CombinedContext } from "../../../../contexts/CombinedContext";

interface PricesProps {
  image: string;
  value: number;
  coffee: string;
}

const quantityValidationSchema = zod.object({
  quantidade: zod
    .number()
    .min(1, "Selecione ao menos 1 café para prosseguir"),
  valor: zod.string(),
  coffee: zod.string(),
  imgSrc: zod.string(),
});

type TQuantityFormData = zod.infer<typeof quantityValidationSchema>;

export function Prices({ image, value, coffee }: PricesProps) {
  const { addCoffeeToCart } = useContext(CombinedContext);
  const newCoffeeForm = useForm<TQuantityFormData>({
    resolver: zodResolver(quantityValidationSchema),
    defaultValues: {
      quantidade: 0,
      imgSrc: image,
      coffee: coffee,
      valor: String(value),
    },
  });
  const { 
    handleSubmit, 
    watch, 
    setValue,
    reset,
    formState: { errors } ,
  } = newCoffeeForm;


  useEffect(() => {
    if (Object.keys(errors).length) {
      console.log("Erros de validação:", errors);
    }
  }, [errors]);

  const handleShopNewCoffee = (data: TQuantityFormData) => {
    addCoffeeToCart(data);
    reset()
  };

  const coffeeQuantity = watch("quantidade"); 

  return (
    <PricesContainer>
      <FormProvider {...newCoffeeForm}>
        <form onSubmit={handleSubmit(handleShopNewCoffee)}>
          <span>
            <small>R$</small> {value ? value.toFixed(2).replace(".", ",") : "0,00"}
          </span>
          
          <Quantity
            quantity={coffeeQuantity}
            onIncrement={() => setValue("quantidade", coffeeQuantity + 1)}
            onDecrement={() => setValue("quantidade", coffeeQuantity - 1)}
          />

          <ButtonContainer 
            disabled={coffeeQuantity < 1}
            type="submit" 
            variant="icon"
          >
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </form>
      </FormProvider>
    </PricesContainer>
  );
}
