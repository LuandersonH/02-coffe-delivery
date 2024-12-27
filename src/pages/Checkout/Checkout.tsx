import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { CheckoutContainer } from "./Checkout.styles";
import { useContext, useEffect, useState } from "react";
import { CardsContext } from "../../Contexts/CardsContext";

interface cardsData {
  img: string;
  typeCoffe: string[];
  titleCoffe: string;
  descriptionCoffe: string;
  valueCoffe: number;
  shopAmount: number;
}

interface cardsInShopInterface {
  cardsInShop: cardsData[];
  setCardsInShop: React.Dispatch<React.SetStateAction<[]>>;
}

export function Checkout() {
  const { cards, totalProdutos } = useContext(CardsContext);

  const [cardsInShop, setCardsInShop] = useState<cardsData[]>([]);

  useEffect(() => {
    // Filtra os cards com shopAmount > 0
    const filteredCards = cards.filter((el) => el.shopAmount > 0);
  
    // Atualiza o estado cardsInShop com os cards filtrados
    setCardsInShop(filteredCards);
  }, [cards]);
  
  // UseEffect para monitorar a mudança de cardsInShop
  useEffect(() => {
    console.log('cardsInShop:', cardsInShop);
  }, [cardsInShop]); // Vai rodar sempre que cardsInShop mudar
  
  

  

  // useEffect(() => {
  //   if (filterCoffeValue.length > 0 && coffeTypesValues.length > 0) {
  //     setFilterCoffeValue([]);
  //     setFilterCoffeValue(coffeTypesValues);
  //   } else if (coffeTypesValues.length == 0) {
  //     setFilterCoffeValue([
  //       "TRADICIONAL",
  //       "ESPECIAL",
  //       "COM LEITE",
  //       "ALCOOLICO",
  //       "GELADO",
  //     ]);
  //   }
  // }, [coffeTypesValues]);

  return (
    <CheckoutContainer>
      <div>
        <button
          onClick={() => {
            console.log(cardsInShop);
          }}
        >
          TESTEEEEEEEEE
        </button>
        <p>Complete seu pedido</p>
        <div className="checkoutForm">
          <div className="info">
            <span className="infoMapSvg">
              <MapPinLine size={22} />
            </span>
            <div>
              <h1>Endereço de entrega</h1>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <form action="">
            <span>
              <input
                type="number"
                placeholder="CEP"
                style={{ width: "12.5rem" }}
              />
            </span>

            <span>
              <input type="text" placeholder="Rua" style={{ width: "100%" }} />
            </span>

            <span>
              <input
                type="number"
                placeholder="Número"
                style={{ width: "12.5rem" }}
              />
              <input
                type="text"
                placeholder="Complemento"
                style={{ width: "21.75rem" }}
              />
            </span>

            <span>
              <input
                type="text"
                placeholder="Bairro"
                style={{ width: "12.5rem" }}
              />
              <input
                type="text"
                placeholder="Cidade"
                style={{ width: "17.25rem" }}
              />
              <input
                type="text"
                placeholder="UF"
                style={{ width: "3.75rem" }}
                maxLength={2}
              />
            </span>
          </form>
        </div>
        <div className="paymentMethodContainer">
          <div className="info">
            <span className="infoDollarSvg">
              <CurrencyDollar size={22} />
            </span>
            <div>
              <h1>Pagamento</h1>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="methods">
            <div>
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </div>
            <div>
              <Bank size={16} />
              <p>CARTÃO DE DEBITO</p>
            </div>
            <div>
              <Money size={16} />
              <p>DINHEIRO</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Cafés selecionados</p>
        <div className="checkoutOrdemContainer">
          <div>
            <p>Aqui ficam os cafés</p>
          </div>
          <div>
            <div className="checkoutValues">
              <div>
                <p>Total de itens</p>
                <span>{`R$ 29,90`}$</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>{`R$ 3,50`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CheckoutContainer>
  );
}
