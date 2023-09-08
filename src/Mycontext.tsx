import {ReactNode, createContext,useState} from 'react';
import sports from './data.json';
import { ts_sports } from './types';


export const TestContext = createContext<any>(null);
//value = {data}은 createContext 자리에 들어간다
//자식 컴포넌트들이 나중에 가져다 쓸 수 있도록 export


type Props = {
    children : React.ReactNode
}

const Mycontext = ({children}:Props) => {

    const [data,setData] =useState(sports);


  return (
    <TestContext.Provider value={{data}}>
        {children}
    </TestContext.Provider>
  )
}

export default Mycontext

//MyComponent가 부모개념