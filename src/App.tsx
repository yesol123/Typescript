import React from 'react';
import './App.css';
import data from './data.json';
import Item from './Item';
import {ty_data} from './type'
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Game from './Game';

const App:React.FC=()=>{
  const [init,setInit] = useState(data)

  
  //const init:ty_data = data;

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/game' element={<Game/>}/>
     {/*<Item data={init}/>  data =  값 */}
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
