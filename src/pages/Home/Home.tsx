import { Briefing } from "./components/Briefing";
import { H1Container, HomeContainer, HomeHeaderContainer } from "./styles";
import { CardContainer } from "./components/CardContainer";

import coffeBackground from "../../assets/coffe_delivery.png";

export function Home() {
  return (
    <>
      <HomeHeaderContainer>
        <Briefing />
        <img
          src={coffeBackground}
          alt="Imagem de um copo de café com grãos de café abaixo dele, em um fundo amarelo"
        />  
      </HomeHeaderContainer>

      <H1Container>Nossos cafés</H1Container>

      <HomeContainer>
        <CardContainer />
      </HomeContainer>
    </>
  );
}
