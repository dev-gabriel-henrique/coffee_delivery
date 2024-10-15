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
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/coffes/coffeContext";

export function Selecteds() {
  const { selectedCoffee } = useContext(CoffeeContext)
  
  return (
    <div>
      <H1Selected>Cafés Selecionados</H1Selected>
      <SelectedsContainer>
        <div>
          { selectedCoffee ? (
            <CoffeeSelected key={selectedCoffee!.id}>
              <div>
                <p>{selectedCoffee!.coffee}</p>

                <div>
                  <Quantity
                  coffeeQuantity={selectedCoffee!.quantidade} 
                  />
                <ButtonContainer variant="secondary">
                  <Trash size={16} />
                  Remover
                </ButtonContainer>
                </div>
              </div>

              <p>
                <span>R$</span>
                {selectedCoffee!.valor}
              </p>
            </CoffeeSelected> ) : 
            (
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

        {/* <SelectedsMain>
          <ValueOfTotalItems>
            <p>Total de itens</p>
            <p>
              <span>R$</span> 29,70
            </p>
          </ValueOfTotalItems>

          <DeliveryTax>
            <p>Taxa de Entrega</p>

            <p>
              <span>R$ </span>
              3,50
            </p>
          </DeliveryTax>

          <TotalValue>
            <p>Total</p>

            <strong>
              <span>R$</span>
              33,20
            </strong>
          </TotalValue>
        </SelectedsMain> */}
      </SelectedsContainer>
    </div>
  );
}
