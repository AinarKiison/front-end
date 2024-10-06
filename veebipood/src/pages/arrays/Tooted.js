import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import tootedJSON from "../../data/tooted.json";
import ostukorvJSON from "../../data/ostukorv.json";

// sorteeriAZ -> tehtud
// sorteeriZA -> tegemata

// sorteeriTahedKahanevalt -> tehtud
// sorteeriTahedKasvavalt -> tegemata

// otsing

// tähemärkide kokkuarvutus


function Tooted() {
const [tooted, muudaTooted] = useState(tootedJSON.slice());
// const otsingRef =  useRef();

const reset = ()=>{
  muudaTooted(tootedJSON);
}

const sorteeriKasvavalt =()=>{
  tooted.sort((a,b)=> a.nimi.localeCompare(b.nimi));
    muudaTooted(tooted.slice()); 
}
const sorteeriTahedKahanevalt =()=>{
  tooted.sort((a,b)=> b.nimi.length - a.nimi.length);
  muudaTooted(tooted.slice()); 
}
const filtreeriAlgabK = ()=>{
  const vastus = tooted.filter(toode=> toode.nimi[0] === "K"); 
  muudaTooted(vastus);
}
const filtreeriAlgabL= ()=>{
  const vastus = tooted.filter(toode=> toode.nimi[0] === "L"); 
  muudaTooted(vastus);
}
const filtreeriAlgabD = ()=>{
  const vastus = tooted.filter(toode=> toode.nimi[0] === "D"); 
  muudaTooted(vastus);
}



const lisaOstukorvi =(lisatudToode)=>{
  ostukorvJSON.push(lisatudToode);
}




return (
    <div><br />
   
      <button onClick={reset}>Reset</button>
      <br /><br />
      <button onClick={sorteeriKasvavalt}>Sorteeri A - Z</button>
      <br />
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
      <br />
      <button onClick={filtreeriAlgabK}>Filtreeri algab K</button>
      <br />
      <button onClick={filtreeriAlgabD}>Filtreeri algab D</button>
      <br />
      <button onClick={filtreeriAlgabL}>Filtreeri algab L</button>
      <br /><br />
      

    
{/* Vaja veel Teha Tähtede kokkuarvutus */}

      {tooted.map((toode, index) => 
      <div>
      {toode.nimi} - {toode.hind}€
      <Link to={"/toode/" +  index}>
        <button>VT lähemalt</button> 
      </Link>
      <button onClick={()=> lisaOstukorvi(toode)}>Lisa ostuKorvi!</button>
      </div>
      )}
    </div>
  )
}

export default Tooted