import { ShoppingCart } from "phosphor-react";
import { CardFooter, CoffeCard, CoffeListContainer } from "./CoffeList.styles";

interface CardsData {
  img: string;
  typeCoffe: string;
  titleCoffe: string;
  descriptionCoffe: string;
  valueCoffe: number;
}

interface CardDetailsProps {
  cards: CardsData;
}

export function CoffeList({cards}: CardDetailsProps) {
  return (
    <CoffeListContainer>
      <CoffeCard>
        <div className="imgCard">
            <img src="https://5287aa00874a313e299d-1850966fc307ff23e1e789aeafd2476b.ssl.cf5.rackcdn.com/PostImagem/50205/imagem-feita-por-ia-vence-concurso-fotograacutefico_o1gpt0htc9sb14gm2f1mss1iove.jpg"/>
        </div>
        <p className="typeCard">TRADICIONAL</p>
        <p className="titleCard">Expresso Tradicional</p>
        <p className="subtitleCard">Lorem ipsum dolor sit amet, consectetur adipisicing elitctio..</p>
        <CardFooter>
          <div className="priceCardFooter">
            <p><span>R$</span>9.90</p>
          </div>
          <div>
              <div className="buttonCardFooter">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
              </div>
              <ShoppingCart weight="fill" size={38}/>
          </div>
        </CardFooter>
      </CoffeCard>
    </CoffeListContainer>
  );
}
