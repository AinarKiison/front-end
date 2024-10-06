import React from 'react'
import { useParams } from 'react-router-dom'
import tootajadFailist from "../../data/tootajad.json"

function MuudaTootaja() {
  const{index} = useParams();
  const suvasona = tootajadFailist[index];

  return (
    <div>
      <label>Töötaja</label><br />
      <input type="text" defaultValue={suvasona}/><br />
      <button>Muuda</button>
    </div>
  )
}

export default MuudaTootaja