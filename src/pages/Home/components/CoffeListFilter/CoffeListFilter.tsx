import { CoffeListFilterContainer } from "./CoffeListFilter.styles";


export function CoffeListFilter({ filterCoffeValue, setFilterCoffeValue }: any) {
  console.log(filterCoffeValue);
  

  function TradicionalButton() {
    setFilterCoffeValue("TRADICIONAL");
  }

  function EspecialButton() {
     setFilterCoffeValue("ESPECIAL");
  }

  function ComLeiteButton() {
     setFilterCoffeValue("COM LEITE");
  }

  function AlcoólicoButton() {
     setFilterCoffeValue("ALCOÓLICO");
  }

  function GeladoButton() {
     setFilterCoffeValue("GELADO");
  }

  return (
    <CoffeListFilterContainer>
      <div className="coffeListHeader">
        <p>Nossos cafés</p>
        <div>
          <button
            onClick={() => {
              TradicionalButton();
            }}
          >
            TRADICIONAL
          </button>
          <button
            onClick={() => {
              EspecialButton();
            }}
          >
            ESPECIAL
          </button>
          <button
            onClick={() => {
              ComLeiteButton();
            }}
          >
            COM LEITE
          </button>
          <button
            onClick={() => {
              AlcoólicoButton();
            }}
          >
            ALCOÓLICO
          </button>
          <button
            onClick={() => {
              GeladoButton();
            }}
          >
            GELADO
          </button>
        </div>
      </div>
    </CoffeListFilterContainer>
  );
}
