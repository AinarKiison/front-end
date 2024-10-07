import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../../data/tooted.json"

function YksToode() {

//useParams --> tema loogeliste sulgude ees olev nimi peab olema sama, mis App.js sees : järel

//KUI path="toode/:tere"
//Siis: const {tere} = use Paramas();


const{tooteNimi} = useParams();
const leitud = tootedFailist.find(toode=> toode.nimi === tooteNimi);

//index(järjekorranumbri järgi leidmiseks:
//const leitud = tootedFailist[index];

//.find();  - kui omaduse kaudu leida vaja

  if (leitud === undefined) {
    return <div>Toodet ei leitud</div>
  }


 
  return ( 
    <div>
      {/* <div>Järjekord: {index}</div> */}
      <div>Toote nimi: {leitud.nimi}</div>
      <div>Toote hind: {leitud.hind}</div>
      <div>Toote asukoht: {leitud.hind}</div>
      <div>Toote pilt: {leitud.hind}</div>
      {leitud.aktiivne === false && <i>Toode on mitteaktiivne</i>}
    </div>
  )
}

export default YksToode