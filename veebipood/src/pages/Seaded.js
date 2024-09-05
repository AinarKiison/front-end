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

      { keel === "est" && <div>Leht on eesti keelne</div>}
      { keel === "eng" && <div>Page is in English</div>}
      { keel === "rus" && <div>Pycckom</div>}

      {keel !== "est" && <div>Copyright</div>}
      
    </div>
  )
}

export default Seaded