import { DeliveryInfo, Informations, SuccessContainer } from "./styles";
import delivery from "../../assets/delivery.png"
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useContext } from "react";
import { CombinedContext } from "../../contexts/CombinedContext";

export function Success() {
  const { activeAddress } = useContext(CombinedContext)
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <DeliveryInfo>
          <Informations>
            <span id="map">
            <MapPin 
            size={16} 
            weight="fill"
            color="white"
            />
            </span>

            {activeAddress ? (
            <p>
              Entrega em
              <strong>
              {
              ` 
              ${activeAddress.rua!}, 
              ${activeAddress.numero!} 
              `
              } <br />
              {activeAddress.complemento}
              </strong> 
              <br />
              {activeAddress.bairro!} - {activeAddress.cidade}, {activeAddress.uf}
              </p>
          ) : (
            ""
          )}
          </Informations>

          <Informations>
            <span id="timer">
              <Timer 
              size={16}
              weight="fill"
              color="white"
              /> 
            </span>
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </Informations>

          <Informations>
            <span id="dollar">
              <CurrencyDollar
              size={16}
              weight="bold"
              color="white"
              />  
            </span>

            <p>
              Forma de Pagamento <br />
              <strong>Cartão de crédito</strong>
            </p>
          </Informations>
        </DeliveryInfo>

        <img src={delivery} alt="Motorista indo entregar o pedido " />
      </div>
    </SuccessContainer>
)
}