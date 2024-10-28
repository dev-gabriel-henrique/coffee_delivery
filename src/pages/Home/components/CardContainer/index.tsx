import { Prices } from "../Prices";
import { Coffee } from "./ImageCoffee";
import { CardCoffee, SpanContext } from "./style";

interface ICoffeeList {
  coffee: string;
  valor: number;
  imgSrc: string;
  alt: string;
  categorias: string[];
  descricao: string;
}

export const coffeeList: ICoffeeList[] = [
  {
    coffee: "Expresso Tradicional",
    categorias: ["Tradicional"],
    imgSrc: Coffee.tradicionalCoffee,
    descricao: "O tradicional café feito com água quente e grãos moídos",
    alt: "Imagem de um café tradicional",
    valor: 6,
  },
  {
    coffee: "Expresso Americano",
    categorias: ["Tradicional"],
    imgSrc: Coffee.americanCoffee,
    descricao: "Expresso diluído, menos intenso que o tradicional",
    alt: "Imagem de um café expresso americano",
    valor: 8,
  },
  {
    coffee: "Expresso Cremoso",
    categorias: ["Tradicional"],
    imgSrc: Coffee.creamyCoffee,
    descricao: "Café expresso tradicional com espuma cremosa",
    alt: "Imagem de um café cremoso",
    valor: 9,
  },
  {
    coffee: "Expresso Gelado",
    categorias: ["Tradicional", "Gelado"],
    imgSrc: Coffee.icedCoffee,
    descricao: "Bebida preparada com café expresso e cubos de gelo",
    alt: "Imagem de um café gelado",
    valor: 7,
  },
  {
    coffee: "Café com Leite",
    categorias: ["Tradicional", "Com leite"],
    imgSrc: Coffee.coffeeWithMilk,
    descricao: "Meio a meio de expresso tradicional com leite vaporizado",
    alt: "Imagem de um café com leite",
    valor: 10,
  },
  {
    coffee: "Latte",
    categorias: ["Tradicional", "Com leite"],
    imgSrc: Coffee.latte,
    descricao: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    alt: "Imagem de um Latte",
    valor: 11,
  },
  {
    coffee: "Capuccino",
    categorias: ["Tradicional", "Com leite"],
    imgSrc: Coffee.capuccino,
    descricao: "Bebida com canela feita de doses iguais de café, leite e espuma",
    alt: "Imagem de um Capuccino",
    valor: 12,
  },
  {
    coffee: "Macchiato",
    categorias: ["Tradicional", "Com leite"],
    imgSrc: Coffee.macchiato,
    descricao: "O tradicional café feito com água quente e grãos moídos",
    alt: "Imagem de um Macchiato",
    valor: 14,
  },
  {
    coffee: "Mocaccino",
    categorias: ["Tradicional", "Com leite"],
    imgSrc: Coffee.mocaccino,
    descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
    alt: "Imagem de um Mocaccino",
    valor: 13,
  },
  {
    coffee: "Chocolate Quente",
    categorias: ["Especial", "Com leite"],
    imgSrc: Coffee.hotCocoa,
    descricao: "Bebida feita com chocolate dissolvido no leite quente e café",
    alt: "Imagem de um chocolate quente",
    valor: 10,
  },
  {
    coffee: "Cubano",
    categorias: ["Especial", "Alcoólico", "Gelado"],
    imgSrc: Coffee.cubano,
    descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    alt: "Imagem de um Cubano",
    valor: 18,
  },
  {
    coffee: "Havaiano",
    categorias: ["Especial"],
    imgSrc: Coffee.havaiano,
    descricao: "Bebida adocicada preparada com café e leite de coco",
    alt: "Imagem de um Havaiano",
    valor: 18,
  },
  {
    coffee: "Árabe",
    categorias: ["Especial"],
    imgSrc: Coffee.arabianCoffee,
    descricao: "Bebida preparada com grãos de café árabe e especiarias",
    alt: "Imagem de um café árabe",
    valor: 25,
  },
  {
    coffee: "Irlandês",
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
        <CardCoffee key={coffee.coffee}>
          <img src={coffee.imgSrc} alt={coffee.alt} />
          <SpanContext>
            {coffee.categorias.map((categoria, index) => (
              <span key={index}>{categoria}</span>
            ))}
          </SpanContext>
          <h2>{coffee.coffee}</h2>
          <p>{coffee.descricao}</p>
          <Prices 
          image={coffee.imgSrc}
          key={coffee.coffee}
          value={coffee.valor}
          coffee={coffee.coffee}
           />
        </CardCoffee>
      ))}
    </>
  );
}
