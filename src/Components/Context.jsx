import { createContext, useContext, useState } from "react";

export const colorcontext=createContext();

// export const usecolor=()=>{
//     return useContext(colorcontext);
// }
export const Themeprovider =({children})=>{
   const [color, setcolor] = useState('light');

    const colorToggler=()=>{
    setcolor((prev)=>prev==='light'?'dark':'light')
   }
   return (
    <colorcontext.Provider value={{color,colorToggler}}>
    {children}
    </colorcontext.Provider>
   )
}
