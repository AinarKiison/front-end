import React, { useState } from 'react'

function Seaded() {
  const [keel, muudaKeel] = useState("est");
  //useState on HTML-is vahetamise koht

  return (
    <div>
      <button className={keel === "est" ? "keel-aktiivne": "keel"} onClick={() => muudaKeel("est")}>Eesti keelseks</button>
      <button className={keel === "eng" ? "keel-aktiivne": "keel"} onClick={() => muudaKeel("eng")}>To english</button>
      <button className={keel === "rus" ? "keel-aktiivne": "keel"} onClick={() => muudaKeel("rus")}>Ryssku</button>
      <div>Hetkel aktiivne keel: {keel}</div>

      { keel === "est" && <div>Leht on eesti keelne</div>}
      { keel === "eng" && <div>Page is in English</div>}
      { keel === "rus" && <div>Pycckom</div>}

      {keel !== "est" && <div>Copyright</div>}
      
    </div>
  )
}

export default Seaded