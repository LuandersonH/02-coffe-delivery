import { ShoppingCart } from "phosphor-react";
import { CardFooter, CoffeCard, CoffeListContainer } from "./CoffeList.styles";
import { useState } from "react";

interface CardsData {
  img: string;
  typeCoffe: string[];
  titleCoffe: string;
  descriptionCoffe: string;
  valueCoffe: number;
  shopAmount: number;
}

interface CardDetailsProps {
  cards: CardsData[];
}

export function CoffeList({ cards }: CardDetailsProps) {
  const [shopAmounts, setShopAmounts] = useState(
    () => cards.map(() => 0) // Inicializa com 0 para cada card
  );

  const updateShopAmount = (index: number, amount: number) => {
    setShopAmounts((state) =>
      state.map((value, i) => (i === index ? value + amount : value))
    );
  };

  return (
    <CoffeListContainer>
      {cards.map((el, index) => {
        return (
          <CoffeCard key={index}>
            <div className="imgCard">
              <img src={el.img} />
            </div>
            <p className="typeCard">{el.typeCoffe}</p>
            <p className="titleCard">{el.titleCoffe}</p>
            <p className="subtitleCard">{el.descriptionCoffe}</p>
            <CardFooter>
              <div className="priceCardFooter">
                <p>
                  <span>R$</span>
                  {el.valueCoffe.toFixed(2)}
                </p>
              </div>
              <div>
                <div className="buttonCardFooter">
                  <button
                    onClick={() => updateShopAmount(index, -1)}
                    disabled={shopAmounts[index] <= 0}
                  >
                    -
                  </button>
                  <span>{shopAmounts[index]}</span>
                  <button onClick={() => updateShopAmount(index, +1)}>+</button>
                </div>
                <ShoppingCart weight="fill" size={38} />
              </div>
            </CardFooter>
          </CoffeCard>
        );
      })}
    </CoffeListContainer>
  );
}
