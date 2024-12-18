import { ShoppingCart } from "phosphor-react";
import { CardFooter, CoffeCard, CoffeListContainer } from "./CoffeList.styles";
import { useState } from "react";

interface CardsData {
  img: string;
  typeCoffe: string[];
  titleCoffe: string;
  descriptionCoffe: string;
  valueCoffe: number;
}

interface CardDetailsProps {
  cards: CardsData[];
}

export function CoffeList({cards}: CardDetailsProps) {

  const [shopAmount, setShopAmount] = useState(0)

  return (
    <CoffeListContainer>
      <CoffeCard>
        <div className="imgCard">
            <img src={cards.img}/>
        </div>
        <p className="typeCard">{cards.typeCoffe}</p>
        <p className="titleCard">{cards.titleCoffe}</p>
        <p className="subtitleCard">{cards.descriptionCoffe}</p>
        <CardFooter>
          <div className="priceCardFooter">
            <p><span>R$</span>{cards.valueCoffe.toFixed(2)}</p>
          </div>
          <div>
              <div className="buttonCardFooter">
                  <button onClick={()=>setShopAmount(prev => prev > 0 ? prev-1 : prev-0)}>-</button>
                  <span>{shopAmount}</span>
                  <button onClick={() => setShopAmount(prev => prev + 1)}>+</button>
              </div>
              <ShoppingCart weight="fill" size={38}/>
          </div>
        </CardFooter>
      </CoffeCard>
    </CoffeListContainer>
  );
}
