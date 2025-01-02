import { createContext, ReactNode, useState } from "react";

interface FormContextProviderProps {
  children: ReactNode;
}

interface FormData {
  cep: null | number;
  rua: null | string;
  numero: null | number;
  complemento: null | string;
  bairro: null | string;
  cidade: null | string;
  uf: null | string;
  pagamento: null | "CREDITO" | "DEBITO" | "DINHEIRO";
}

interface FormContextType {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  handlePaymentMethod: (payMethod: "CREDITO" | "DEBITO" | "DINHEIRO") => void,
}

const initialFormData: FormData = {
  cep: null,
  rua: null,
  numero: null,
  complemento: null,
  bairro: null,
  cidade: null,
  uf: null,
  pagamento: null,
};

export const FormContext = createContext<FormContextType>({
  form: initialFormData,
  setForm: () => {},
  handlePaymentMethod: ()=>{},
});

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [form, setForm] = useState<FormData>(initialFormData);


  function handlePaymentMethod (payMethod: "CREDITO" | "DEBITO" | "DINHEIRO") {
    setForm((prev) => ({
      ...prev, 
      pagamento: payMethod, 
    }));
  }

  return (
    <FormContext.Provider
      value={{
        form,
        setForm,
        handlePaymentMethod,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
