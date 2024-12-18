import "./App.css";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { useState } from "react";
import imgTradicional from "./imgTradicional.png";
import imgAmericano from "./imgAmericano.png";
import imgCremoso from "./imgCremoso.png";
import imgGelado from "./imgGelado.png";
import imgCafeComLeite from "./imgCafeComLeite.png";
import imgLatte from "./imgLatte.png";
import imgCapuccino from "./imgCapuccino.png";
import imgMacchiato from "./imgMacchiato.png";
import imgMocaccino from "./imgMocaccino.png";
import imgChocolateQuente from "./imgChocolateQuente.png";
import imgCubano from "./imgCubano.png";
import imgHavaiano from "./imgHavaiano.png";
import imgArabe from "./imgArabe.png";
import imgIrlandes from "./imgIrlandes.png";

export interface cardsData {
  img: string;
  typeCoffe: string[];
  titleCoffe: string;
  descriptionCoffe: string;
  valueCoffe: number;
}

export function App() {
  const [cards, setCarts] = useState<cardsData[]>([
    {
      img: imgTradicional,
      typeCoffe: ["TRADICIONAL"],
      titleCoffe: "Expresso Tradicional",
      descriptionCoffe:
        "O tradicional café feito com água quente e grãos moídos",
      valueCoffe: 9.9,
    },
    {
      img: imgAmericano,
      typeCoffe: ["TRADICIONAL"],
      titleCoffe: "Expresso Americano",
      descriptionCoffe: "Expresso diluído, menos intenso que o tradicional",
      valueCoffe: 9.9,
    },
    {
      img: imgCremoso,
      typeCoffe: ["TRADICIONAL"],
      titleCoffe: "Expresso Cremoso",
      descriptionCoffe: "Café expresso tradicional com espuma cremosa",
      valueCoffe: 9.9,
    },
    {
      img: imgGelado,
      typeCoffe: ["TRADICIONAL", "GELADO"],
      titleCoffe: "Expresso Gelado",
      descriptionCoffe: "Bebida preparada com café expresso e cubos de gelo",
      valueCoffe: 9.9,
    },
    {
      img: imgCafeComLeite,
      typeCoffe: ["TRADICIONAL", "COM LEITE"],
      titleCoffe: "Café com Leite",
      descriptionCoffe:
        "Meio a meio de expresso tradicional com leite vaporizado",
      valueCoffe: 9.9,
    },
    {
      img: imgLatte,
      typeCoffe: ["TRADICIONAL", "COM LEITE"],
      titleCoffe: "Latte",
      descriptionCoffe:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      valueCoffe: 9.9,
    },
    {
      img: imgCapuccino,
      typeCoffe: ["TRADICIONAL", "COM LEITE"],
      titleCoffe: "Capuccino",
      descriptionCoffe:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      valueCoffe: 9.9,
    },
    {
      img: imgMacchiato,
      typeCoffe: ["TRADICIONAL", "COM LEITE"],
      titleCoffe: "Macchiato",
      descriptionCoffe:
        "Café expresso misturado com um pouco de leite quente e espuma",
      valueCoffe: 9.9,
    },
    {
      img: imgMocaccino,
      typeCoffe: ["TRADICIONAL", "COM LEITE"],
      titleCoffe: "Mocaccino",
      descriptionCoffe:
        "Café expresso com calda de chocolate, pouco leite e espuma",
      valueCoffe: 9.9,
    },
    {
      img: imgChocolateQuente,
      typeCoffe: ["ESPECIAL", "COM LEITE"],
      titleCoffe: "Chocolate Quente",
      descriptionCoffe:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      valueCoffe: 9.9,
    },
    {
      img: imgCubano,
      typeCoffe: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
      titleCoffe: "Cubano",
      descriptionCoffe:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      valueCoffe: 9.9,
    },
    {
      img: imgHavaiano,
      typeCoffe: ["ESPECIAL"],
      titleCoffe: "Havaiano",
      descriptionCoffe: "Bebida adocicada preparada com café e leite de coco",
      valueCoffe: 9.9,
    },
    {
      img: imgArabe,
      typeCoffe: ["ESPECIAL"],
      titleCoffe: "Árabe",
      descriptionCoffe:
        "Bebida preparada com grãos de café árabe e especiarias",
      valueCoffe: 9.9,
    },
    {
      img: imgIrlandes,
      typeCoffe: ["ESPECIAL", "ALCOÓLICO"],
      titleCoffe: "Irlandês",
      descriptionCoffe:
        "Bebida à base de café, uísque irlandês, açúcar e chantilly",
      valueCoffe: 9.9,
    },
  ]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home cards={cards} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
