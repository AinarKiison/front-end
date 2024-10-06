import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom';
import hinnadJSON from "../../data/hinnad.json"

function MuudaHind() {
  const {index} = useParams();
  const leitud = hinnadJSON[index];
  const hindRef = useRef();

  const muuda = ()=>{
    hinnadJSON[index] = {"number":  Number(hindRef.current.value),"lisaja":"Ainarnia"};
  }

  return (
    <div>
      <label>Hind</label>
      <input type="text" ref={hindRef} defaultValue={leitud.number} /><br />
      <Link to ="/halda-hinnad">
        <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}

export default MuudaHind