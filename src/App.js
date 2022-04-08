import { Route, Routes } from 'react-router-dom';
import './App.css';
import Abouts from './components/Abouts/Abouts';
import Header from './components/header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<Abouts></Abouts>}></Route>
      </Routes>
    </div>
  );
}

export default App;
