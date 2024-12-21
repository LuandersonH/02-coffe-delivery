import { useState } from "react";
import { CoffeList } from "./components/CoffeList/CoffeList";
import { CoffeListFilter } from "./components/CoffeListFilter/CoffeListFilter";
import { Intro } from "./components/Intro/Intro";
import { HomeContainer } from "./Home.styles";

interface CardsData {
  img: string;
  typeCoffe: string[];
  titleCoffe: string;
  descriptionCoffe: string;
  valueCoffe: number;
}

interface HomeProps {
  cards: CardsData[];
}
export function Home({ cards }: HomeProps) {
  const [filterCoffeValue, setFilterCoffeValue ] = useState<string[]>([])

  return (
    <HomeContainer>
      <Intro />
      <CoffeListFilter filterCoffeValue={filterCoffeValue} setFilterCoffeValue={setFilterCoffeValue} />
      <CoffeList cards={cards} filterCoffeValue={filterCoffeValue}/>
    </HomeContainer>
  );
}
