import React, { useState } from 'react'

function Seaded() {
  const [keel, muudaKeel] = useState("est");
  //useState on HTML-is vahetamise koht

  return (
    <div>
      <button onClick={() => muudaKeel("est")}>Eesti keelseks</button>
      <button onClick={() => muudaKeel("eng")}>To english</button>
      <button onClick={() => muudaKeel("rus")}>Ryssku</button>
      <div>Hetkel aktiivne keel: {keel}</div>
    </div>
  )
}

export default Seaded