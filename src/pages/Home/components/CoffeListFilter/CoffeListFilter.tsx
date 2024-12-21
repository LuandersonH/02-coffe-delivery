import { useState } from "react";
import { CoffeListFilterContainer } from "./CoffeListFilter.styles";

interface CoffeListFilterProps {
  filterCoffeValue: string[];
  setFilterCoffeValue: React.Dispatch<React.SetStateAction<string[]>>
}

export function CoffeListFilter({
  filterCoffeValue,
  setFilterCoffeValue,
}: CoffeListFilterProps) {
  console.log(filterCoffeValue);

  function HandleValueFilter(event: React.ChangeEvent<HTMLInputElement>) {
    const valor = event.target.value;

    setFilterCoffeValue((state) => {
      if (event.target.checked) {
        const updatedState = [...state, valor]; // Adiciona o valor ao array
        console.log(updatedState); // Exibe o novo estado no console
        return updatedState;
      } else {
        return state.filter((item) => item !== valor);
      }      
    });
  }

  // function EspecialButton(event: any) {
  // setFilterCoffeValue("ESPECIAL");
  // }

  // function ComLeiteButton(event) {
  //   setFilterCoffeValue("COM LEITE");
  // }

  // function AlcoólicoButton() {
  //   setFilterCoffeValue("ALCOÓLICO");
  // }

  // function GeladoButton() {
  //   setFilterCoffeValue("GELADO");
  // }

  return (
    <CoffeListFilterContainer>
      <div className="coffeListHeader">
        <p>Nossos cafés</p>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="tradicional"
            name="coffeeType"
            value="TRADICIONAL"
            onChange={HandleValueFilter}
          />
          <label htmlFor="tradicional">TRADICIONAL</label>

          <input
            type="checkbox"
            id="especial"
            name="coffeeType"
            value="ESPECIAL"
            onChange={HandleValueFilter}
          />
          <label htmlFor="especial">ESPECIAL</label>

          <input
            type="checkbox"
            id="com-leite"
            name="coffeeType"
            value="COM LEITE"
            onChange={HandleValueFilter}
          />
          <label htmlFor="com-leite">COM LEITE</label>

          <input
            type="checkbox"
            id="alcoólico"
            name="coffeeType"
            value="ALCOÓLICO"
            onChange={HandleValueFilter}
          />
          <label htmlFor="alcoólico">ALCOÓLICO</label>

          <input
            type="checkbox"
            id="gelado"
            name="coffeeType"
            value="GELADO"
            onChange={HandleValueFilter}
          />
          <label htmlFor="gelado">GELADO</label>
        </div>
      </div>
    </CoffeListFilterContainer>
  );
}
