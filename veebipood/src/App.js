//import logo from './logo.svg';
import './App.css';

import { Link,Route,Routes} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Link to="avaleht">
      <img  className="pilt" src="https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" alt="lind" />
      </Link>
      <Link to="/osta-kinkekaart">
        <button className="nupp">Kinkekaart</button>
      </Link>
      <Link to="/esindused">
        <button className="nupp">Esindused</button>
      </Link>
      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>
      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Routes>
        <Route path="avaleht" element={ <Avaleht/> } />
        <Route path="osta-kinkekaart" element={ <Kinkekaart/>} />
        <Route path="esindused" element={<Esindused/>} />
        <Route path="ostukorv" element={<Ostukorv/>} />
        <Route path="lisa-toode" element={<LisaToode/>} />
        <Route path="seaded" element={ <Seaded/>} />
        <Route path="*" element={ <NotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
