import React, { createContext, useContext, useState } from "react";

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
         const [ selecedProject, setSelectedProject ] = useState('INBOX');
         return (
           <SelectedProjectContext.Provider 
           value={{ selecedProject, setSelectedProject }}>
             {children}
           </SelectedProjectContext.Provider>
         );
       };

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
