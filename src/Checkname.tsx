import { createContext,useState } from "react"
export const DataContext = createContext<any>(null);

const Checkname = ({children}:{children:React.ReactNode}):JSX.Element=>{

  console.log(children)
  const [data,setData] = useState([]);
  
  
  return (
    <DataContext.Provider value={{data,setData}} >
      {children}
    </DataContext.Provider>
  )
}

export default Checkname