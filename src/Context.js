import React, { useState, createContext, useEffect } from "react";
import { dataEnglish, dataFrench } from "./data"; 


const initialData = dataEnglish

export const ExampleContext = createContext();

export const ExampleProvider = ({ initialConnects, children }) => {
    const [language, setLanguage] = useState("en");
    const [globalData, setGlobalData] = useState(initialData);

  useEffect(() => { 
   if(language === 'fr'){
    setGlobalData(dataFrench)
   } else {
    setGlobalData(dataEnglish) 
   }
  }, [language, setGlobalData]);


  return (
    <ExampleContext.Provider
      value={{
        language,
        setLanguage,
        globalData
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
};
