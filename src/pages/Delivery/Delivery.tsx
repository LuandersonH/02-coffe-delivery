import { DeliveryContainer } from "./Delivery.styles";
import imgDelivery from "../../assets/delivery.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Delivery() {
  return (
    <DeliveryContainer>
      <div className="confirmationOrderMsg">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <div className="infoAndImgContainer">
        <div className="OrderDetailsContainer">
          <div className="OrderDetails">
            <div>
              <MapPin weight="fill" className="MapPin"/>
              <div>
                <p>Entrega em: <strong>Rua João Daniel Martinelli, 102</strong></p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
            <div>
              <Timer weight="fill" className="Timer"/>
              <div>
                <p>Previsão de entrega:</p>
                <p><strong>20min - 30min</strong></p>
              </div>
            </div>
            <div>
              <CurrencyDollar weight="fill" className="CurrencyDollar"/>
              <div>
                <p>Pagamento na entrega:</p>
                <p><strong>Cartão de Crédito</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src={imgDelivery} alt="Imagem do entregador em moto" />
        </div>
      </div>
    </DeliveryContainer>
  );
}
