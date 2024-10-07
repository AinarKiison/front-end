import React, { useState,useRef } from 'react'
import tootajadJSON from "../../data/tootajad.json"
import { Link } from 'react-router-dom';



function Tootajad() {
  
  const [tootajad, muudaTootajad] = useState(tootajadJSON.slice())
  //!
  const otsinguRef = useRef();

  const reset = ()=>{
    muudaTootajad(tootajadJSON.slice())
  }

const sorteeriKasvavalt =()=>{
  tootajad.sort((a,b)=> a.localeCompare(b));
    muudaTootajad(tootajad.slice()); 
}
const sorteeriTahedKahanevalt =()=>{
  tootajad.sort((a,b)=> b.length - a.length);
  muudaTootajad(tootajad.slice()); 
}

const sorteeriTeineTahtAZ =()=>{
  tootajad.sort((a,b)=> a[1].localeCompare(b[1]));
  muudaTootajad(tootajad.slice()); 
}
const filtreeri5Tahelised = ()=>{
  const vastus = tootajad.filter(tootaja=> tootaja.length === 5); 
  muudaTootajad(vastus); 
}
const filtreeriRoh5Tahelised = ()=>{
  const vastus = tootajad.filter(tootaja=> tootaja.length >=6); 
  muudaTootajad(vastus);
}
const filtreeriAiSisaldavad = ()=>{
  const vastus = tootajad.filter(tootaja=> tootaja.includes("Ai")); 
  muudaTootajad(vastus);
}
const filtreeriNeljasTahta = ()=>{
  const vastus = tootajad.filter(tootaja=> tootaja[3] === "a"); 
  muudaTootajad(vastus);
}
const filtreeriAlgabM = ()=>{
  const vastus = tootajad.filter(tootaja=> tootaja[0] === "T"); 
  muudaTootajad(vastus);
}
const sorteeriPaarisarvTahti = () => {
  const vastus = tootajad.filter((tootaja) => tootaja.length % 2 === 0); 
  muudaTootajad(vastus);
}
const otsing = () => {
  const vastus = tootajadJSON.filter(tootaja => tootaja.nimi.includes(otsinguRef.current.value) );
  muudaTootajad(vastus);
};



return (
    <div><br />
   
    <br />
    <input ref={otsinguRef} onChange={otsing} type="text" />
      <button onClick={reset}>Reset</button>
      <br /><br />
      <button onClick={sorteeriKasvavalt}>Sorteeri A - Z</button>
      <br />
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri Tähed kahanevalt</button>
      <br />
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri 2. täht A-Z</button>
      <br />
      <button onClick={filtreeri5Tahelised }>Filtreeri täpselt 5 tähelised</button>
      <br />
      <button onClick={filtreeriRoh5Tahelised}>Filtreeri roh 5 täh</button>
      <br />
      <button onClick={filtreeriAiSisaldavad }> Filtreeri 'Ai'</button>
      <br />
      <button onClick={filtreeriNeljasTahta}>Filtreeri 4. täht 'a'</button>
      <br />
      <button onClick={filtreeriAlgabM}>Filtreeri algab T</button>
      <br />
      <button onClick={sorteeriPaarisarvTahti}>Filtreeri nimed paarisarv tähti</button>
      <br /><br />


{/* Otsing vaja teha ja tähtede kokkuarvutus */}


{tootajad.map((tootaja, index) => 

<div> 
  {tootaja.nimi}:
  <br />
  {tootaja.tel}:
  <br />
  {tootaja.amet}: 
  <br />
  {tootaja.email}:
  <br />

<Link to={"/tootaja/" + index}>
  <button>{tootaja.nimi}</button>
</Link>


            
          
        </div>)}
    </div>
  )
}

export default Tootajad