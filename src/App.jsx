import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home.jsx';
import Morgun from './components/Pages/Morgun.jsx';
import Kvold from './components/Pages/Kvold.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/morgun' element={<Morgun/>}/>
        <Route path='/kvold' element={<Kvold/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
