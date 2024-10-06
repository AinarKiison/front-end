//import logo from './logo.svg';
import './App.css';

import {Navigate, Route, Routes} from 'react-router-dom';


import Kinkekaart from './pages/useRef/Kinkekaart';
import LisaToode from './pages/useRef/LisaToode';
import Registreeru from './pages/useRef/Registreeru';
import Profiil from './pages/useRef/Profiil';
import LogiSisse from './pages/useRef/LogiSisse';

import Avaleht from './pages/useState/Avaleht';
import Seaded from './pages/useState/Seaded';
import NotFound from './pages/useState/NotFound';

import Menyy from './components/Menyy';

import Esindused from './pages/arrays/Esindused';
import Ostukorv from './pages/arrays/Ostukorv';
import Hinnad from './pages/arrays/Hinnad';
import Tootajad from './pages/arrays/Tootajad';
import Tooted from './pages/arrays/Tooted';
import HaldaEsindused from './pages/halda/HaldaEsindused';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import HaldaTooted from './pages/halda/HaldaTooted';
import YksEsindus from './pages/yks/YksEsindus';
import YksHind from './pages/yks/YksHind';
import YksTootaja from './pages/yks/YksTootaja';
import YksToode from './pages/yks/YksToode';
import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaTootaja from './pages/muuda/MuudaTootaja';
import MuudaToode from './pages/muuda/MuudaToode';
import { ContactUs } from './pages/useRef/ContactUs';
import Admin from './pages/useState/Admin';
import Shops from './pages/useState/Shops';

function App() {
  return (
    <div className="App">
    <Menyy/>
    
      <Routes>
        <Route path="" element={ <Navigate to= "/avaleht" /> } />
        <Route path='avaleht' element={<Avaleht/>}/>
        <Route path="osta-kinkekaart" element={<Kinkekaart/>} />
        
        <Route path="lisa-toode" element={<LisaToode/>} />
        <Route path="seaded" element={<Seaded/>} />
        
        <Route path="profiil" element={<Profiil/>} />
        <Route path="logi-sisse" element={<LogiSisse/>} />
        <Route path="registreeru" element={<Registreeru/>} />

        <Route path="esindused" element={<Esindused/>} />
        <Route path="ostukorv" element={<Ostukorv/>} />
        <Route path="hinnad" element={<Hinnad/>} />
        <Route path="tootajad" element={<Tootajad/>} />
        <Route path="tooted" element={<Tooted/>} />

        <Route path="halda-esindused" element={<HaldaEsindused/>} />
        <Route path="halda-hinnad" element={<HaldaHinnad/>} />
        <Route path="halda-tootajad" element={<HaldaTootajad/>} />
        <Route path="halda-tooted" element={<HaldaTooted/>} />
        
        <Route path="esindus/:index" element={<YksEsindus/>} />
        <Route path="hind/:index" element={<YksHind/>} />
        <Route path="tootaja/:index" element={<YksTootaja/>} />
        <Route path="toode/:index" element={<YksToode/>} />

        <Route path="muuda-esindus/:index" element={<MuudaEsindus/>} />
        <Route path="muuda-hind/:index" element={<MuudaHind/>} />
        <Route path="muuda-tootaja/:index" element={<MuudaTootaja/>} />
        <Route path="muuda-toode/:index" element={<MuudaToode/>} />

        <Route path="kontakteeru" element={<ContactUs/>} />
        <Route path="admin" element={<Admin/>} />
        <Route path="shops" element={<Shops/>} />


        <Route path="*" element={<NotFound/>} />
      
      </Routes>

    </div>
  );
}

export default App;
