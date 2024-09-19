import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import {
  AdvantagesContainer,
  BriefingContainer,
  BriefingTextContainer,
} from "./style";

export function Briefing() {
  return (
    <BriefingContainer>
      <BriefingTextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </BriefingTextContainer>

      <AdvantagesContainer>
        <p>
          <span id="shoppingCartIcon">
          <ShoppingCart size={16} weight="fill" />
          </span>
          Compra simples e segura
        </p>
        <p>
          <span id="packageIcon">
          <Package size={16} weight="fill" />
          </span>
          Embalagem mantém o café intacto
        </p>
        <p>
          <span id="timerIcon">
          <Timer size={16} weight="fill" />
          </span>
          Entrega rápida e rastreada
        </p>
        <p>
          <span id="coffeeIcon">
            <Coffee size={16} weight="fill" />
          </span>
          O café chega fresquinho até você
        </p>
      </AdvantagesContainer>
    </BriefingContainer>
  );
}
