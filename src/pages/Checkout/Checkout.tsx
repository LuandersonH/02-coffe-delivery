import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import {
  CardsInShop,
  CheckoutContainer,
  CheckoutOrderContainer,
} from "./Checkout.styles";
import { useContext, useEffect, useState } from "react";
import { CardsContext } from "../../Contexts/CardsContext";
import { NavLink } from "react-router-dom";
import { FormContext } from "../../Contexts/FormContext";

interface cardsData {
  img: string;
  typeCoffe: string[];
  titleCoffe: string;
  descriptionCoffe: string;
  valueCoffe: number;
  shopAmount: number;
}

export function Checkout() {
  const { cards, shopAmounts, updateShopAmount, totalProdutos } =
    useContext(CardsContext);

  const { form, setForm, handlePaymentMethod } = useContext(FormContext);

  const [cardsInShop, setCardsInShop] = useState<cardsData[]>([]);

  const totalItensValue: number = cards.reduce((acc, el) => {
    const totalValue = el.valueCoffe * el.shopAmount;
    return acc + totalValue;
  }, 0);

  useEffect(() => {
    // Filtra os cards com shopAmount > 0
    const filteredCards = cards.filter((el) => el.shopAmount > 0);

    // Atualiza o estado cardsInShop com os cards filtrados
    setCardsInShop(filteredCards);
  }, [cards]);

  // UseEffect para monitorar a mudança de cardsInShop
  useEffect(() => {
    console.log("cardsInShop:", cardsInShop);
  }, [cardsInShop]); // Vai rodar sempre que cardsInShop mudar

  const [formValues, setFormValues] = useState({
    cep: 0,
    rua: "",
    numero: 0,
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    // Converte para número se o campo for "cep" ou "numero"
    const parsedValue =
      name === "cep" || name === "numero" ? Number(value) : value;

    setFormValues((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  }

  function handleSubmit() {
    setForm((prev) => ({
      ...prev,
      ...formValues,
    }));
  }

  return (
    <CheckoutContainer>
      <div>
        <p className="areaName">Complete seu pedido</p>
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
                name="cep"
                value={formValues.cep === 0 ? "" : formValues.cep}
                onChange={handleInputChange}
              />
            </span>

            <span>
              <input
                type="text"
                placeholder="Rua"
                style={{ width: "100%" }}
                name="rua"
                value={formValues.rua}
                onChange={handleInputChange}
              />
            </span>

            <span>
              <input
                type="number"
                placeholder="Número"
                style={{ width: "12.5rem" }}
                name="numero"
                value={formValues.numero === 0 ? "" : formValues.numero}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Complemento"
                style={{ width: "21.75rem" }}
                name="complemento"
                value={formValues.complemento}
                onChange={handleInputChange}
              />
            </span>

            <span>
              <input
                type="text"
                placeholder="Bairro"
                style={{ width: "12.5rem" }}
                name="bairro"
                value={formValues.bairro}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Cidade"
                style={{ width: "17.25rem" }}
                name="cidade"
                value={formValues.cidade}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="UF"
                style={{ width: "3.75rem" }}
                maxLength={2}
                name="uf"
                value={formValues.uf}
                onChange={handleInputChange}
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
              <button
                onClick={() => {
                  handlePaymentMethod("CREDITO");
                }}
              >
                CARTÃO DE CRÉDITO
              </button>
            </div>
            <div>
              <Bank size={16} />
              <button
                onClick={() => {
                  handlePaymentMethod("DEBITO");
                }}
              >
                CARTÃO DE DEBITO
              </button>
            </div>
            <div>
              <Money size={16} />
              <button
                onClick={() => {
                  handlePaymentMethod("DINHEIRO");
                }}
              >
                DINHEIRO
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="areaName">Cafés selecionados</p>
        <CheckoutOrderContainer>
          {totalProdutos > 0 ? (
            <>
              {cards.map((el, index) => {
                if (el.shopAmount > 0) {
                  return (
                    <div key={index}>
                      <CardsInShop>
                        <div className="imgInCard">
                          <img
                            src={cards[index].img}
                            alt="Imagem do café selecionado"
                          />
                        </div>
                        <div className="infoCoffeAndButtonsContainer">
                          <div className="infoCoffeInCard">
                            <span>{cards[index].titleCoffe}</span>
                          </div>
                          <div className="buttonsInCard">
                            <div>
                              <button
                                onClick={() => updateShopAmount(index, -1)}
                                disabled={shopAmounts[index] <= 1}
                              >
                                -
                              </button>
                              <span>{shopAmounts[index]}</span>
                              <button
                                onClick={() => updateShopAmount(index, +1)}
                              >
                                +
                              </button>
                            </div>
                            <div className="trashButton">
                              <button
                                onClick={() =>
                                  updateShopAmount(index, -el.shopAmount)
                                }
                              >
                                <p>
                                  <Trash size={16} />
                                  Remover
                                </p>
                              </button>
                            </div>
                          </div>
                        </div>
                        <span>{`R$ ${cards[index].valueCoffe}0`}</span>
                      </CardsInShop>
                    </div>
                  );
                }
                return null; // Sempre retorne algo no map, mesmo que seja null
              })}
              <div className="checkoutValues">
                <div>
                  <p>Total de itens</p>
                  <p>{`R$ ${totalItensValue.toFixed(2)}`}</p>
                </div>
                <div>
                  <p>Entrega</p>
                  <p>{`R$ 3.50`}</p>
                </div>
                <div className="checkoutValuesTotal">
                  <p>Total</p>
                  <p>{`R$ ${(totalItensValue + 3.5).toFixed(2)}`}</p>
                </div>
              </div>
              <NavLink to="/delivery" className="buttonContainer">
                <button onClick={()=>{ console.log({...formValues});
                 handleSubmit()}}>CONFIRMAR PEDIDO</button>
              </NavLink>
            </>
          ) : (
            <p>Faça um pedido antes</p>
          )}
        </CheckoutOrderContainer>
      </div>
    </CheckoutContainer>
  );
}
