import { ShoppingCart } from "phosphor-react";
import { CardFooter, CoffeCard, CoffeListContainer } from "./CoffeList.styles";
import { useContext } from "react";
import { CardsContext } from "../../../../Contexts/CardsContext";

// interface CardsData {
//   img: string;
//   typeCoffe: string[];
//   titleCoffe: string;
//   descriptionCoffe: string;
//   valueCoffe: number;
// }

interface CardDetailsProps {
  // cards: CardsData[];
  filterCoffeValue: string[];
}

export function CoffeList({ filterCoffeValue }: CardDetailsProps) {
  const { cards, setCards, shopAmounts, setShopAmounts } =
    useContext(CardsContext);

    const updateShopAmount = (index: number, amount: number) => {
      setCards((prevCards) => {
        // Copia o array do state 'cards'
        const updatedCards = [...prevCards];
        // Pega o card no indice e 'remove' do objeto
        const updatedCard = { ...updatedCards[index] };
        // Atualiza a quantidade no card
        updatedCard.shopAmount += amount;
        // Acha o card antigo no array copiado e substitui o card
        updatedCards[index] = updatedCard;
        return updatedCards;
      });
    
      setShopAmounts((state) => {
        // Modifica o número que fica na bolinha do carrinho de compras
        return state.map((value, i) => (i === index ? value + amount : value));
      });
    };
    

  return (
    <CoffeListContainer>
      {cards
        .filter((el) =>
          filterCoffeValue.some((tipoDeCaféExistenteEmFilterCoffeValue) =>
            el.typeCoffe.includes(tipoDeCaféExistenteEmFilterCoffeValue)
          )
        )
        .map((el, index) => (
          <CoffeCard key={index}>
            <div className="imgCard">
              <img src={el.img} />
            </div>
            {el.typeCoffe.length == 1 ? (
              <p className="typeCard">{el.typeCoffe}</p>
            ) : (
              <span className="typeCardSpan">
                {el.typeCoffe.map((el, index) => (
                  <p key={index} className="typeCard">
                    {el}
                  </p>
                ))}
              </span>
            )}
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
        ))}
    </CoffeListContainer>
  );
}
