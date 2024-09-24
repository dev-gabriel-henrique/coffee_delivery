import { ShoppingCart } from "@phosphor-icons/react";
import { Coffee } from "./ImageCoffee";
import { CardCoffee, Prices, SpanContext } from "./style";
import { ButtonContainer } from "../../../../components/Variants/ButtonVariants";
import { Quantity } from "../../../../components/Quantity";

export function CardContainer() {
  return (
    <>
      <CardCoffee>
        <img
          src={Coffee.tradicionalCoffee}
          alt="Imagem de um café tradicional"
        />

        <span>Tradicional</span>

        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>

        <Prices>
          <span>
            <small>R$</small> 6,00
          </span>

        <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img
          src={Coffee.americanCoffee}
          alt="Imagem de um café expresso americano"
        />

        <span>Tradicional</span>

        <h2>Expresso Americano</h2>
        <p>Expresso diluído, menos intenso que o tradicional</p>

        <Prices>
          <span>
            <small>R$</small> 7,00
          </span>

          <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img src={Coffee.creamyCoffee} alt="Imagem de um café cremoso" />

        <span>Tradicional</span>

        <h2>Expresso Cremoso</h2>

        <p>Café expresso tradicional com espuma cremosa</p>

        <Prices>
          <span>
            <small>R$</small> 7,50
          </span>

          <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img src={Coffee.icedCoffee} alt="Imagem de um café tradicional" />

        <SpanContext>
          <span>Tradicional</span>
          <span>Gelado</span>
        </SpanContext>

        <h2>Expresso Gelado</h2>
        <p>Bebida preparada com café expresso e cubos de gelo</p>

        <Prices>
          <span>
            <small>R$ </small>
            7,90
          </span>

          <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img src={Coffee.coffeeWithMilk} alt="Imagem de um café tradicional" />

        <SpanContext>
          <span>Tradicional</span>
          <span>Com leite</span>
        </SpanContext>

        <h2>Café com Leite</h2>
        <p>Meio a meio de expresso tradicional com leite vaporizado</p>

        <Prices>
          <span>
            <small>R$ </small>
            8,90
          </span>

          <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img src={Coffee.latte} alt="Imagem de um café tradicional" />

        <SpanContext>
          <span>Tradicional</span>
          <span>Com leite</span>
        </SpanContext>

        <h2>Latte</h2>
        <p>Uma dose de café expresso com o dobro de leite e espuma cremosa</p>

        <Prices>
          <span>
            <small>R$ </small>
            9,90
          </span>

          <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img src={Coffee.capuccino} alt="Imagem de um capuccino" />

        <SpanContext>
          <span>Tradicional</span>
          <span>Com leite</span>
        </SpanContext>

        <h2>Capuccino</h2>
        <p>Bebida com canela feita de doses iguais de café, leite e espuma</p>

        <Prices>
          <span>
            <small>R$ </small>
            9,90
          </span>

          <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img src={Coffee.macchiato} alt="Imagem de um Macchiato" />

        <SpanContext>
          <span>Tradicional</span>
          <span>Com leite</span>
        </SpanContext>

        <h2>Macchiato</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>

        <Prices>
          <span>
            <small>R$ </small>
            9,90
          </span>

          <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img src={Coffee.mocaccino} alt="Imagem de um café tradicional" />

        <SpanContext>
          <span>Tradicional</span>
          <span>Com leite</span>
        </SpanContext>

        <h2>Mocaccino</h2>
        <p>Café expresso com calda de chocolate, pouco leite e espuma</p>

        <Prices>
          <span>
            <small>R$ </small>
            9,90
          </span>

          <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img src={Coffee.hotCocoa} alt="Imagem de um chocolate quente" />

        <SpanContext>
          <span>Especial</span>
          <span>Com leite</span>
        </SpanContext>

        <h2>Chocolate Quente</h2>
        <p>Bebida feita com chocolate dissolvido no leite quente e café</p>

        <Prices>
          <span>
            <small>R$ </small> 
            10,90
            </span>

            <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img src={Coffee.cubano} alt="Imagem de um café tradicional" />

        <SpanContext>
          <span>Especial</span>
          <span>Alcoólico</span>
          <span>Gelado</span>
        </SpanContext>

        <h2>Cubano</h2>
        <p>Drink gelado de café expresso com rum, creme de leite e hortelã</p>

        <Prices>
          <span>
            <small>R$ </small> 
            99,99
            </span>

            <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img src={Coffee.havaiano} alt="Imagem de um café tradicional" />

        <span>Especial</span>

        <h2>Havaiano</h2>
        <p>Bebida adocicada preparada com café e leite de coco</p>

        <Prices>
          <span>
            <small>R$ </small>
            16,90
          </span>

          <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img src={Coffee.arabianCoffee} alt="Imagem de um café tradicional" />

        <span>Especial</span>

        <h2>Árabe</h2>
        <p>Bebida preparada com grãos de café árabe e especiarias</p>

        <Prices>
          <span>
            <small>R$ </small>
            20,90
          </span>

          <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>

      <CardCoffee>
        <img src={Coffee.irlandes} alt="Imagem de um café tradicional" />

        <SpanContext>
          <span>Especial</span>
          <span>Alcoólico</span>
        </SpanContext>

        <h2>Irlândes</h2>
        <p>Bebida a base de café, uísque irlandês, açúcar e chantilly</p>

        <Prices>
          <span>
            <small>R$ </small>
             21,90
             </span>

             <Quantity />

          <ButtonContainer type="submit" variant="icon">
            <ShoppingCart size={22} weight="fill" />
          </ButtonContainer>
        </Prices>
      </CardCoffee>
    </>
  );
}
