import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import tootedJSON from "../../data/tooted.json";
import ostukorvJSON from "../../data/ostukorv.json";

import Button from '@mui/material/Button';

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


<Button onClick={reset} variant="outlined">Reset</Button>
   
      
      <br /><br />
      <Button onClick={sorteeriKasvavalt} variant="contained">Sorteeri A - Z</Button>
      <br />
      <Button onClick={sorteeriTahedKahanevalt}  variant="text">Sorteeri tähed kahanevalt</Button>
      <br />
      <Button onClick={filtreeriAlgabK} variant="contained">Filtreeri algab K</Button>
      <br />
      <Button onClick={filtreeriAlgabD}  variant="text">Filtreeri algab D</Button>
      <br />
      <Button onClick={filtreeriAlgabL} variant="contained">Filtreeri algab L</Button>
      <br /><br />
      

    {/* !!!!!!!!!!!!!!! */}
{/* Vaja veel Teha Tähtede kokkuarvutus */}

      {tooted.map((toode, index) => 
      <div key={index}>
      <img className={toode.aktiivne === true ? 'pilt':"pilt-mitteaktiivne"} src={toode.pilt} alt="pilt" />
      {toode.nimi} - {toode.hind}€  
      <Link to={"/toode/" +  toode.nimi}>
        <Button variant="outlined">VT lähemalt</Button> 
      </Link>
      {toode.aktiivne === true && <Button onClick={()=> lisaOstukorvi(toode)} >Lisa ostuKorvi</Button>}
      </div>
      )}
    </div>
  )
}

export default Tooted