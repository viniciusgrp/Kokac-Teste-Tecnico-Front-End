import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IGlobalContext {
    component: string;
    setComponent: Dispatch<SetStateAction<string>>;
}

interface IGlobalContextProps {
    children: ReactNode;
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const GlobalProvider = ({ children }: IGlobalContextProps) => {

    const [component, setComponent] = useState("palindromo")
  
  return (
    <GlobalContext.Provider
      value={{component, setComponent}}
    >
      {children}
    </GlobalContext.Provider>
  );
};