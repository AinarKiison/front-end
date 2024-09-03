//import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from"react-router-dom";
import { Link,Route,Routes} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';

function App() {
  return (
    <div className="App">
      <Link to="avaleht">
      <img  className="pilt" src="https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" alt="lind" />
      </Link>
      <Link to="osta-kinkekaart">
        <button className="nupp">NUPP</button>
      </Link>
      <Link to="esindused">
        <button className="nupp">NUPP</button>
      </Link>
      <Link to="ostukorv">
        <button className="nupp">NUPP</button>
      </Link>
      <Link to="lisa-toode">
        <button className="nupp">NUPP</button>
      </Link>
      <Link to="seaded">
        <button className="nupp">NUPP</button>
      </Link>

      <Routes>
        <Route path="avaleht" element={ <Avaleht/> } />
        <Route path="osta-kinkekaart" element={ <Kinkekaart/>} />
        <Route path="esindused" element={<Esindused/>} />
        <Route path="ostukorv" element={<Ostukorv/>} />
        <Route path="lisa-toode" element={<LisaToode/>} />
        <Route path="seaded" element={ <Seaded/>} />
      </Routes>

    </div>
  );
}

export default App;
