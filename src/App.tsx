
import './App.scss';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import List from './component/List';
import Home from './component/Home';
import Mycontext from './Mycontext';
import Write from './component/Write';


function App() {
  return (
    <>
     <BrowserRouter> 
      <header>
        <Link to ='/'>Home</Link>
        <Link to ='/Write'>Write</Link>
      </header>
      <main>
        <Mycontext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Write" element={<Write />} />
          </Routes>
        </Mycontext>
      </main>
    </BrowserRouter>
    </>
  );
}

export default App;
