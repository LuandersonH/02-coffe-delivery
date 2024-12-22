import { useEffect, useState } from "react";
import { CoffeListFilterContainer } from "./CoffeListFilter.styles";

interface CoffeListFilterProps {
  filterCoffeValue: string[];
  setFilterCoffeValue: React.Dispatch<React.SetStateAction<string[]>>;
}

export function CoffeListFilter({
  filterCoffeValue,
  setFilterCoffeValue,
}: CoffeListFilterProps) {
  const [coffeTypesValues, setcoffeTypesValues] = useState<string[]>([]);

  function HandleValueFilter(event: React.ChangeEvent<HTMLInputElement>) {
    const valor = event.target.value;

    setcoffeTypesValues((state) => {
      if (event.target.checked) {
        return [...state, valor];
      } else {
        return state.filter((item) => item !== valor);
      }
    });
  }

  useEffect(() => {
    if (filterCoffeValue.length > 0 && coffeTypesValues.length > 0) {
      setFilterCoffeValue([]);
      setFilterCoffeValue(coffeTypesValues);
    } else if (coffeTypesValues.length == 0) {
      setFilterCoffeValue([
        "TRADICIONAL",
        "ESPECIAL",
        "COM LEITE",
        "ALCOOLICO",
        "GELADO",
      ]);
    }
  }, [coffeTypesValues]);

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
