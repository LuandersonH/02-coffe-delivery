import "./App.css";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { useState } from "react";
import imgTradicional from "./assets/coffes/expresso_tradicional.png";

export interface cardsData {
  img: string;
  typeCoffe: string;
  titleCoffe: string;
  descriptionCoffe: string;
  valueCoffe: number;
}

export function App() {

  const [cards, setCarts] = useState<cardsData>({
    img: imgTradicional,
    typeCoffe: "TRADICIONAL",
    titleCoffe: "Expresso Tradicional",
    descriptionCoffe: "O tradicional café feito com água quente e grãos moídos",
    valueCoffe: 9.9,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home cards={cards}/>
      <GlobalStyle />
    </ThemeProvider>
  );
}
