import { CoffeList } from "./components/CoffeList/CoffeList";
import { Intro } from './components/Intro/Intro'
import { HomeContainer } from "./Home.styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro/>
      <CoffeList />
    </HomeContainer>
  );
}
