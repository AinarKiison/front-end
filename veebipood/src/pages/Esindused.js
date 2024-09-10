import React, { useState } from 'react'

function Esindused() {
  const[linn, muudaLinn] = useState("Tallinn")
  
  return (
    <div>
    <div>Aktiivne linn: {linn}</div>
    <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
    <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Tartu")}>Tartu</button>
    <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>
    <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Narva")}>Narva</button>

    {linn === "Tallinn" &&
     <div>
      <div>Rocca al Mare</div>
      <div>Ülemiste</div>
      <div>Magistrali</div>
      <div>Järveotsa</div>
      <div>Kristiine</div>
      <div>Vesse</div>
    </div>}

    {linn === "Narva" && <div>Fama</div>}
    {linn === "Pärnu" && <div>Port Artur 2</div>}
    
    {linn === "Tartu" &&
     <div>
      <div>Lõuna Keskus</div>
      <div>Raatuse</div>
    </div>}
    
    </div>
  )
}

export default Esindused