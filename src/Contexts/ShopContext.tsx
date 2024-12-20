import { createContext } from "react";

interface shopAmountTypes {
  shopAmounts: number[],
  setShopAmounts: React.Dispatch<React.SetStateAction<number[]>>;
}

export const Teste= createContext<shopAmountTypes>({
    shopAmounts: [],
    setShopAmounts: ()=>{},
})  


