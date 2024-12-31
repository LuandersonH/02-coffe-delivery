import { DeliveryContainer } from "./Delivery.styles";

export function Delivery() {
  return (
    <DeliveryContainer>
      <div className="confirmationOrderMsg">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <div className="infoAndImgContainer">
        <div className="OrderDetails">
          <p>
            <span>Entrega em:</span> Rua João Daniel Martinelli, 102
            <br /> Farrapos - Porto Alegre, RS
          </p>
          <p>
            <span>Previsão de entrega:</span> 20 min - 30 min
          </p>
          <p>
            <span>Pagamento na entrega:</span> Cartão de Crédito
          </p>
        </div>
        <div className="imgContainer">
          <img
            src="/path-to-your-image.png"
            alt="Imagem do entregador em moto"
          />
        </div>
      </div>
    </DeliveryContainer>
  );
}
