import { CoffeListFilterContainer } from "./CoffeListFilter.styles";

export function CoffeListFilter() {
  function TradicionalButton() {
    // if (value === tradicional) = mostre os cards que tem o coffeType tradicional e oculte os outros
  }

  function EspecialButton() {}
  function ComLeiteButton() {}
  function AlcoólicoButton() {}
  function GeladoButton() {}

  return (
    <CoffeListFilterContainer>
      <div className="coffeListHeader">
        <p>Nossos cafés</p>
        <div>
          <button
            onClick={() => {
              TradicionalButton();
            }}
            value="TRADICIONAL"
          >
            TRADICIONAL
          </button>
          <button
            onClick={() => {
              EspecialButton();
            }}
            value="TRADICIONAL"
          >
            ESPECIAL
          </button>
          <button
            onClick={() => {
              ComLeiteButton();
            }}
            value="TRADICIONAL"
          >
            COM LEITE
          </button>
          <button
            onClick={() => {
              AlcoólicoButton();
            }}
            value="TRADICIONAL"
          >
            ALCOÓLICO
          </button>
          <button
            onClick={() => {
              GeladoButton();
            }}
            value="TRADICIONAL"
          >
            GELADO
          </button>
        </div>
      </div>
    </CoffeListFilterContainer>
  );
}
