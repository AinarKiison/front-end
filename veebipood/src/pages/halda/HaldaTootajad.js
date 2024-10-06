import React, {useRef, useState} from 'react'
import tootajadJSON from "../../data/tootajad.json"
import { Link } from 'react-router-dom'

function HaldaTootajad() {
  const [tootajad, muudaTootajad] = useState (tootajadJSON.slice());
  const tootajaRef = useRef();

  const kustutaEsimene = ()=>{
   tootajadJSON.splice(0,1);
   muudaTootajad(tootajadJSON.slice());
  }
  const kustutaTeine = ()=>{
    tootajadJSON.splice(1,1);
    muudaTootajad(tootajadJSON.slice());
   }
   const kustutaKolmas = ()=>{
    tootajadJSON.splice(2,1);
    muudaTootajad(tootajadJSON.slice());
   }
   const kustutaNeljas = ()=>{
    tootajadJSON.splice(3,1);
    muudaTootajad(tootajadJSON.slice());
   }
   const lisa = ()=>{
    tootajadJSON.push(tootajaRef.current.value);
    muudaTootajad(tootajadJSON.slice());
   }
   const kustuta = (index)=>{
    tootajadJSON.splice(index, 1);
    muudaTootajad(tootajadJSON.slice());
   }


  return (
    <div>
      <br />
      <button onClick={kustutaEsimene}>Kustuta Esimene</button>
      <button onClick={kustutaTeine}>Kustuta Teine</button>
      <button onClick={kustutaKolmas}>Kustuta Kolmas</button>
      <button onClick={kustutaNeljas}>Kustuta Neljas</button>
      <br /><br />
      <label>Töötajad</label>
      <input ref={tootajaRef} type="text" />
      <button onClick={lisa}>Lisa</button>
      <br /><br />
      {tootajad.map((tootaja, index)=>
      <div>
        <div>{tootaja}</div>
      <button onClick={() => kustuta(index)}>X</button>
      <Link to={"/muuda-tootaja" + index}>
        <button>Muuda</button>
      </Link>
      </div>
      )}
    </div>
  )
}

export default HaldaTootajad