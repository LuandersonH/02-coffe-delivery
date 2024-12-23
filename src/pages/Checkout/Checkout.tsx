import { MapPinLine } from "phosphor-react";
import { CheckoutContainer } from "./Checkout.styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <p>Complete seu pedido</p>
        <div className="checkoutForm">
            <div className="infoForm">
                <span>
                    <MapPinLine size={22}/>
                </span>
                <div>
                    <h1>Endereço de entrega</h1>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </div>
          <form action="">
            <span>
              <input
                type="text"
                placeholder="CEP"
                style={{ width: "12.5rem" }}
              />
            </span>

            <span>
              <input type="text" placeholder="Rua" style={{ width: "100%" }} />
            </span>

            <span>
              <input
                type="text"
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
              <input type="text" placeholder="UF" style={{ width: "3.75rem" }} />
            </span>
          </form>
        </div>
      </div>
      <div>
        <p>Cafés selecionados</p>
        <div className="checkoutOrdem"></div>
      </div>
    </CheckoutContainer>
  );
}
