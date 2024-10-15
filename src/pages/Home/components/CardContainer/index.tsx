import { FormProvider } from "react-hook-form";
import { Prices } from "../Prices";
import { Coffee } from "./ImageCoffee";
import { CardCoffee, SpanContext } from "./style";

interface ICoffeeList {
  id: number;
  nome: string;
  valor: number;
  imgSrc: string;
  alt: string;
  categorias: string[];
  descricao: string;
}

export const coffeeList: ICoffeeList[] = [
  {
    id: 1,
    nome: "Expresso Tradicional",
    categorias: ["Tradicional"],
    imgSrc: Coffee.tradicionalCoffee,
    descricao: "O tradicional café feito com água quente e grãos moídos",
    alt: "Imagem de um café tradicional",
    valor: 6,
  },
  {
    id: 2,
    nome: "Expresso Americano",
    categorias: ["Tradicional"],
    imgSrc: Coffee.americanCoffee,
    descricao: "Expresso diluído, menos intenso que o tradicional",
    alt: "Imagem de um café expresso americano",
    valor: 8,
  },
  {
    id: 3,
    nome: "Expresso Cremoso",
    categorias: ["Tradicional"],
    imgSrc: Coffee.creamyCoffee,
    descricao: "Café expresso tradicional com espuma cremosa",
    alt: "Imagem de um café cremoso",
    valor: 9,
  },
  {
    id: 4,
    nome: "Expresso Gelado",
    categorias: ["Tradicional", "Gelado"],
    imgSrc: Coffee.icedCoffee,
    descricao: "Bebida preparada com café expresso e cubos de gelo",
    alt: "Imagem de um café gelado",
    valor: 7,
  },
  {
    id: 5,
    nome: "Café com Leite",
    categorias: ["Tradicional", "Com leite"],
    imgSrc: Coffee.coffeeWithMilk,
    descricao: "Meio a meio de expresso tradicional com leite vaporizado",
    alt: "Imagem de um café com leite",
    valor: 10,
  },
  {
    id: 6,
    nome: "Latte",
    categorias: ["Tradicional", "Com leite"],
    imgSrc: Coffee.latte,
    descricao: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    alt: "Imagem de um Latte",
    valor: 11,
  },
  {
    id: 7,
    nome: "Capuccino",
    categorias: ["Tradicional", "Com leite"],
    imgSrc: Coffee.capuccino,
    descricao: "Bebida com canela feita de doses iguais de café, leite e espuma",
    alt: "Imagem de um Capuccino",
    valor: 12,
  },
  {
    id: 8,
    nome: "Macchiato",
    categorias: ["Tradicional", "Com leite"],
    imgSrc: Coffee.macchiato,
    descricao: "O tradicional café feito com água quente e grãos moídos",
    alt: "Imagem de um Macchiato",
    valor: 14,
  },
  {
    id: 9,
    nome: "Mocaccino",
    categorias: ["Tradicional", "Com leite"],
    imgSrc: Coffee.mocaccino,
    descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
    alt: "Imagem de um Mocaccino",
    valor: 13,
  },
  {
    id: 10,
    nome: "Chocolate Quente",
    categorias: ["Especial", "Com leite"],
    imgSrc: Coffee.hotCocoa,
    descricao: "Bebida feita com chocolate dissolvido no leite quente e café",
    alt: "Imagem de um chocolate quente",
    valor: 10,
  },
  {
    id: 11,
    nome: "Cubano",
    categorias: ["Especial", "Alcoólico", "Gelado"],
    imgSrc: Coffee.cubano,
    descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    alt: "Imagem de um Cubano",
    valor: 18,
  },
  {
    id: 12,
    nome: "Havaiano",
    categorias: ["Especial"],
    imgSrc: Coffee.havaiano,
    descricao: "Bebida adocicada preparada com café e leite de coco",
    alt: "Imagem de um Havaiano",
    valor: 18,
  },
  {
    id: 13,
    nome: "Árabe",
    categorias: ["Especial"],
    imgSrc: Coffee.arabianCoffee,
    descricao: "Bebida preparada com grãos de café árabe e especiarias",
    alt: "Imagem de um café árabe",
    valor: 25,
  },
  {
    id: 14,
    nome: "Irlandês",
    categorias: ["Especial", "Alcoólico"],
    imgSrc: Coffee.irlandes,
    descricao: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    alt: "Imagem de um café irlandês",
    valor: 30,
  },
]

export function CardContainer() {
  return (
    <>
      {coffeeList.map((coffee) => (
        <CardCoffee key={coffee.id}>
          <img src={coffee.imgSrc} alt={coffee.alt} />
          <SpanContext>
            {coffee.categorias.map((categoria, index) => (
              <span key={index}>{categoria}</span>
            ))}
          </SpanContext>
          <h2>{coffee.nome}</h2>
          <p>{coffee.descricao}</p>
          <Prices coffeePrice={coffee.valor} />
        </CardCoffee>
      ))}
    </>
  );
}
