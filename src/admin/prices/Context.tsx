import React, { useEffect, useState, createContext } from 'react';
import {IPricesApi} from '@database/models/prices';
import api from '@database/api';

interface Props {
    children: React.ReactNode,
};

export interface PropsContextTypes {
    actions: "" | "reorder",
    setActions: React.Dispatch<React.SetStateAction<"" | "reorder">>,
    data: IPricesApi[] | [],
    setData: React.Dispatch<React.SetStateAction<IPricesApi[] | []>>,
    selectedData: IPricesApi | null,
    setSelectedData: React.Dispatch<React.SetStateAction<IPricesApi | null>>,
};

// for consuming in children components, initial return state
export const Context = createContext<PropsContextTypes>({
    actions: "",
    setActions: (value) => "",
    data: [],
    setData: (value) => "",
    selectedData: null,
    setSelectedData: (value) => "",
});

export const useTemplateContext = ({children}: Props) => {

    const [data, setData] = useState<IPricesApi[] | []>([]);

    const [selectedData, setSelectedData] = useState<IPricesApi | null>(null);

    const [actions, setActions] = useState<"" | "reorder">("");
  
    useEffect(() => {
      (async () => {
          try{
            const response = await api.get("/prices");
            setData(response.data.data);
          } catch(err){
            console.log(err);
          }
      })()
    }, []);
  
    const value = {
        data, setData,
        actions, setActions,
        selectedData, setSelectedData,
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default useTemplateContext