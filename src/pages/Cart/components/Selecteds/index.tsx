
import { Trash } from "@phosphor-icons/react";
import { Quantity } from "../../../../components/Quantity";
import { ButtonContainer } from "../../../../components/Variants/ButtonVariants";
import { Coffee } from "../../../Home/components/CardContainer/ImageCoffee";
import { CoffeeSelected, DeliveryTax, H1Selected, SelectedsContainer, SelectedsMain, TotalValue, ValueOfTotalItems } from "./Selecteds";

export function Selecteds() {
  return (
    <div>
    <H1Selected>
      Cafés Selecionados
      </H1Selected>
    <SelectedsContainer>
      <div>
      <CoffeeSelected>
       <img 
       src={Coffee.tradicionalCoffee} 
       alt="Café tradicional" 
       />

       <div>
        <p>Expresso Tradicional</p>
        
        <div>
          <Quantity />
          <ButtonContainer
          variant="secondary">
            <Trash size={16} />
            Remover
          </ButtonContainer>
        </div>
       </div>

        <p><span>R$ </span>6,00</p>
      </CoffeeSelected>

      <CoffeeSelected>
       <img 
       src={Coffee.latte} 
       alt="Latte" 
       />

       <div>
        <p>Latte</p>
        
        <div>
          <Quantity />
          <ButtonContainer
          variant="secondary">
            <Trash size={16} />
            Remover
          </ButtonContainer>
        </div>
       </div>

        <p><span>R$ </span>9,90</p>
      </CoffeeSelected>
      </div>

      <SelectedsMain>
        <ValueOfTotalItems>
          <p>Total de itens</p>
          <p><span>R$</span> 29,70</p>
        </ValueOfTotalItems>

        <DeliveryTax>
          <p>Taxa de Entrega</p>

          <p>
            <span>R$ </span>
            3,50
          </p>
        </DeliveryTax>

        <TotalValue>
          <p>
            Total
          </p>

          <strong>
            <span>R$</span>
            33,20
            </strong>
        </TotalValue>
      </SelectedsMain>
    </SelectedsContainer>
    </div>
  )
}