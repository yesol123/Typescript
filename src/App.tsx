import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import './App.scss';
import Home from './component/Home';
import Newser from './component/Newser';
import List from './component/List';
import Saveme from './Saveme';

function App() {
  return (
   <>
  <BrowserRouter>
    <header>
    <Link to = '/' className='always'>Home</Link>
    </header>
  <main>
    <Saveme>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path ='/newser' element= {<Newser/>}/>
    <Route path ='/list' element ={<List/>}/>
  </Routes>
  </Saveme>
  </main>
  </BrowserRouter>



   </>
  );
}

export default App;
