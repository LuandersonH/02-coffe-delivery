import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import intro_coffe from "../../../../assets/intro-coffe.png";
import { IntroContainer } from "./Intro.styles";

export function Intro() {
  return (
    <IntroContainer>
      <div className="introTextsDiv">
        <div className="introTitleAndSubtitle">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <div className="serviceAdvantages">
          <p>
            <ShoppingCart weight="fill"/> Compra simples e segura
          </p>
          <p>
            <Package weight="fill" /> Embalagem mantém o café intacto
          </p>
          <p>
            <Timer weight="fill" /> Entrega rápida e rastreada
          </p>
          <p>
            <Coffee weight="fill" /> O café chega fresquinho até você
          </p>
        </div>
      </div>
      <div>
        <img
          src={intro_coffe}
          alt="Imagem de um copo de café com grãos ao lado"
        />
      </div>
    </IntroContainer>
  );
}
