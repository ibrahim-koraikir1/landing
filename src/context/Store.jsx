
import { useState } from 'react';
import { createContext   } from 'react';


export const store = createContext()

 const Full = ({children})=>{
     
  const [val , setval] = useState("is work just fine")

 return (

     <store.Provider value={val}>
     {children} 
     </store.Provider>

     )
 }

export default Full 