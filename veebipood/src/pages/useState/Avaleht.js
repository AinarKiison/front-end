import React, { useState } from 'react'
import KontaktAndmed from '../../components/KontaktAndmed';

function Avaleht() {
  const[kogus, muudaKogus] = useState(1); //(muutuja algväärtus)// saab liita lahutada korrutada, küsida kas suurem või väiksem
  const[sonum, muudaSonum] = useState("Muuda kogust!"); // saab otsida pikkust, millega algab ja lõppeb
  const [laigitud, muudaLaigitud] = useState(false);// saab tagurpidi keerata--> !laigitud(annab varasema vastupidise)
 
// kõik mida pole tavalises JavaScriptis ja on Reactis, tuleb importida. useState, useRef
// kõik mida pole tavalises HTMLs ja on Reactis, tuleb importida. Link, Route, Routes, BrowserRouter

//  muutuja on HTMLs
//  muutja läheb käima onClick
//  useState -> importida, sest tegemist on Reacti koodiga, mida pole JS-s
//  algväärtus -> kui refreshida või lehelt ära minna ja tagasi tulla
//  [muutuja, muutja]   = useState(ALGVÄÄRTUS)

  function nulli() {
    muudaKogus(0);
    muudaSonum("Nullisid koguse!");
  }
  function vahenda() {
    muudaKogus(kogus - 1);
    muudaSonum("Vähendasid koguse!");
  }
  function suurenda() {
    muudaKogus(kogus + 1);
    muudaSonum("Suurendasid koguse!");
  }

// kui kasutan useState funktsiooni, siis:
//  const [muutuja, muutja] = useState(algväärtus);
//  <button onClick={() => muutja(UUS_VÄÄRTUS)}>Nupu tekst</button>

// kui kasutan enda tehtud funktsiooni, siis:
//  <button onClick={lyhidalt}>Nupu tekst</button>

  return (
    <div>
      {laigitud === true && <img src='/mittelaigitud.svg' alt=""></img> }
      {laigitud === false && <img src='/laigitud.svg' alt=""></img> }
      {/* <button onClick={()=> muudaLaigitud(false)}>Laik maha</button>
      <button onClick={()=> muudaLaigitud(true)}>Laik peale</button> */}
      <button onClick={()=> muudaLaigitud(!laigitud)}>Lemmik</button>

   

      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={nulli}>Nulli kogus</button>}
      {/* {kogus > 0 && <button onClick={nulli}>Nulli kogus</button>} */}

      <button disabled = {kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
<br /><br />
      <KontaktAndmed></KontaktAndmed>
    </div>

  )
}

export default Avaleht