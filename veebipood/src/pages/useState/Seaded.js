import React, { useState } from 'react'


//kollane on funktsioon
//Tumesinine on liigitus(func,const :JS --- Button, Div :HTML)
//Tavaline sinine on muutuja, meie loodud
//Helesinine on JS: võti, programmi poolt loodud muutujad
//              HTML: elemendi atribuut. onClick, className, src, type
//oranz - jutumärkides väärtus
//heleroheline - numbriline väärtus
//tumeroheline - kommentaar
//Roheline suure tähega
//valge - märgid: punkt, semikoolon, koma, võrdusmärk, küsimärk
//lilla on käsklus: import, export, return, if, else
//Sulud värvuvad erinevalt: Kollane,lilla,sinine

// ()=> - funktsiooni tähis
// ()   - käivitab funktsiooni
// []   - array. ka useState sees on array
// {}   - koodiblokk, Funkts algus ja lõpp. If algus ja lõpp. HTML-s javascripti blokk
// =    - väärtuse andmiseks
// ===  - kontroll kas vasak ja parem on identsed
//!==   - ei võrdu
//!boolean - väärtuse tagurpidi keeramine
//!        - teistpidi tgemine
//?:    - if/else
//>= <= < > - suuremvõrdne jms
//=>    - nool, mille järgselt tehakse midagi
//"" '' - sõne
//;     - rea lõpetamine
//.
//&&    - dünaamiline väljakuvamine



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