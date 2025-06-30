import React, { useEffect, useState, createContext } from 'react';
import {IGalleryApi} from '@database/models/gallery';
import api from '@database/api';

interface Props {
    children: React.ReactNode,
};

export interface PropsContextTypes {
    actions: "" | "reorder",
    setActions: React.Dispatch<React.SetStateAction<"" | "reorder">>,
    data: IGalleryApi[] | [],
    setData: React.Dispatch<React.SetStateAction<IGalleryApi[] | []>>,
    selectedData: IGalleryApi | null,
    setSelectedData: React.Dispatch<React.SetStateAction<IGalleryApi | null>>,
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

    const [data, setData] = useState<IGalleryApi[] | []>([]);

    const [selectedData, setSelectedData] = useState<IGalleryApi | null>(null);

    const [actions, setActions] = useState<"" | "reorder">("");
  
    useEffect(() => {
      (async () => {
          try{
            const response = await api.get("/gallery");
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