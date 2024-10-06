import React from 'react'
import { useParams } from 'react-router-dom'
import tootajadFailist from "../../data/tootajad.json";

//Kodus 30.09
//HaldaTootajad.js kustutamine + lisamine. faili tyõstmised.otsing
//HaldaTooted.js   kustutamine + lisamine. faili tõstmised. otsing
//testimiseks: kustutage 1 element ja vaadake "t´Tootajad.js" voi Toode.js
// kas kustus?

//YksTootaja
//YksToode
//MuudaTootaja
//MuudaToode



// Kust läheme: Halda lehelt (muuda) või Tooted.js / Tootajad.js
// <Link> import  "react-router-dom"
// Link to="" <-- siin peab olema kaldkriips ees ja kaldkriips järel

// App.js lehel:
// Vaadata, et :kooloniga oleks muutuja tähistatud
// Et URL kuhu minnakse, ühtiks sellega, mis on App.js sees (muidu on 404)

// Kuhu jõuame:
// useParams import "react-router-dom"
// import tootajadFailist õigesti

function YksTootaja() {
  const {index} = useParams();
  const leitud = tootajadFailist[index];

  return (
    <div>
      <div>Töötaja ID: {index}</div>
      <div>Töötaja nimi: {leitud}</div>
      <div>Töötaja tel: </div>
      <div>Töötaja aadress: </div>
      {false && <div>Töötaja on vallandatud</div>}
    </div>
  )
}

export default YksTootaja