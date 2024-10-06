
import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom';
import tootedJSON from "../../data/tooted.json";
 
function MuudaToode() {
  const{index} = useParams ();
  const leitud = tootedJSON[index]
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const keskusRef = useRef();
  const piltRef = useRef();



  const muuda = ()=>{
    tootedJSON[index] = { 
      "nimi": nimiRef.current.value,
      "hind": Number(hindRef.current.value),   //NUMBER
      "aktiivne":aktiivneRef.current.checked, //BOOL
      "keskus": keskusRef.current.value,
      "pilt": piltRef.current.value
    };
  }
 
 
 
 
  return (
    <div>
      <label> Nimi</label> <br />
      <input type="text" ref={nimiRef} defaultValue={leitud.nimi} /> <br />
      <label> Hind</label> <br />
      <input type="number" ref={hindRef} defaultValue={leitud.hind} /> <br />
      <label> Keskus</label> <br />
      <input type="text" ref={keskusRef}  defaultValue={leitud.keskus} /> <br />
      <label> Pilt</label> <br />
      <input type="text"ref={piltRef}  defaultValue={leitud.pilt} /> <br />
      <label> Aktiivne</label> <br />
      <input type="checkbox" ref={aktiivneRef} defaultChecked={leitud.aktiivne} /> <br />

      <Link to="/halda-tooted">
        <button onClick={muuda}>Muuda </button>
      </Link>

    </div>
  )
}
 
export default MuudaToode