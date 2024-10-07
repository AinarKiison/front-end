import React, { useState} from 'react'
import tootedJSON from "../../data/tooted.json"
import { Link } from 'react-router-dom'

function HaldaTooted() {
  const [tooted, muudaTooted] = useState (tootedJSON.slice());
  

 
   const kustuta = (index)=>{
    tootedJSON.splice(index, 1);
    muudaTooted(tootedJSON.slice());
   }


  return (
    <div>

      <table>
        <thead>
          <tr>
            <th>Pilt</th>
            <th>Nimi</th>
            <th>Hind</th>
            <th>Keskus</th>
            <th>Tegevused</th>
          </tr>
        </thead>
        <tbody>
        {tooted.map((toode, index)=>
          <tr key={index}>
            <td><img style={{"width":"50px"}} src={toode.pilt} alt="" /></td>
            <td>{toode.nimi}</td>
            <td>{toode.hind}€</td>
            <td>{toode.keskus}</td>
            <td>
            <button onClick={() => kustuta(index)}>X</button>
            <Link to={"/muuda-toode/" + index}>
              <button>Muuda</button>
            </Link>
            </td>
          </tr>
)}
        </tbody>
        {/* <tfoot></tfoot> */}
      </table>

    <br />
   
    {/* {tooted.map((toode, index)=>
    <div>
      {toode.aktiivne === false && <i>Toode on mitteaktiivne</i>}
      <img style={{"width":"50px"}} src={toode.pilt} alt="" />

      <div>{toode.nimi}</div>
      <div>{toode.hind}€</div>
      <div>{toode.keskus}</div>
      <div>{toode.pilt}</div>
    <button onClick={() => kustuta(index)}>X</button>
    <Link to={"/muuda-toode/" + index}>
      <button>Muuda</button>
    </Link>
    </div>
    )} */}
  </div>
  )
}

export default HaldaTooted


