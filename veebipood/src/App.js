//import logo from './logo.svg';
import './App.css';

import {Navigate, Route, Routes} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import NotFound from './pages/NotFound';
import Menyy from './components/Menyy';

function App() {
  return (
    <div className="App">
    <Menyy/>
    
      <Routes>
        <Route path="" element={ <Navigate to= "/avaleht" /> } />
        <Route path='avaleht' element={<Avaleht/>}/>
        <Route path="osta-kinkekaart" element={<Kinkekaart/>} />
        <Route path="esindused" element={<Esindused/>} />
        <Route path="ostukorv" element={<Ostukorv/>} />
        <Route path="lisa-toode" element={<LisaToode/>} />
        <Route path="seaded" element={<Seaded/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
