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

export function CoffeList({cards}: CardDetailsProps) {

  return (
    <CoffeListContainer>
        {cards.map((el, index)=>{
          const [shopAmountState, setShopAmountState] = useState(Number(el.shopAmount))
          return (
          <CoffeCard key={index}>
          <div className="imgCard">
              <img src={el.img}/>
          </div>
          <p className="typeCard">{el.typeCoffe}</p>
          <p className="titleCard">{el.titleCoffe}</p>
          <p className="subtitleCard">{el.descriptionCoffe}</p>
          <CardFooter>
            <div className="priceCardFooter">
              <p><span>R$</span>{el.valueCoffe.toFixed(2)}</p>
            </div>
            <div>
                <div className="buttonCardFooter">
                    <button onClick={()=>setShopAmountState(prev => prev > 0 ? prev-1 : prev-0)}>-</button>
                    <span>{shopAmountState}</span>
                    <button onClick={() => setShopAmountState(prev => prev + 1)}>+</button>
                </div>
                <ShoppingCart weight="fill" size={38}/>
            </div>
          </CardFooter>
        </CoffeCard>
        )})}
        
    </CoffeListContainer>
  );
}
