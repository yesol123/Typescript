
import {createContext,useState} from "react"
export const DataContext = createContext<any>(null);



const Saveme = ({children}: {children:React.ReactNode}):JSX.Element => {
    const [data,setData] =useState([]);
  return (

    <DataContext.Provider value={{data,setData}}>
        {children}
    </DataContext.Provider>
  )
}

export default Saveme