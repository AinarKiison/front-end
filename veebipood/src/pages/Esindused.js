import React, { useState } from 'react'

function Esindused() {
  const[linn, muudaLinn] = useState("Tallinn")
  return (
    <div>
    <div>Aktiivne linn: {linn}</div>
    <button onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
    <button onClick={() => muudaLinn("Tartu")}>Tartu</button>
    <button onClick={() => muudaLinn("Pärnu")}>Pärnu</button>
    <button onClick={() => muudaLinn("Narva")}>Narva</button>

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