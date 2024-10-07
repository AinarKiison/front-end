import React, { useRef } from 'react'
import {Link, useParams } from 'react-router-dom';
import tootajadJSON from "../../data/tootajad.json"


function MuudaTootaja() {
const {index} = useParams ();
const leitud = tootajadJSON[index]
const nimiRef = useRef();
const telRef = useRef();
const ametRef = useRef();
const emailRef = useRef();

const muuda = () => {
  tootajadJSON[index] = {
    "nimi": nimiRef.current.value, 
    "tel": telRef.current.value, 
    "amet": ametRef.current.value, 
    "email": emailRef.current.value,
  }  ;
}
return (
    <div>
      <label>Töötaja</label> <br />
      <input type="text" ref={nimiRef} defaultValue={leitud.nimi} /> <br />
      <label>Telefon</label> <br />
      <input type="text" ref={telRef} defaultValue={leitud.tel} /> <br />
      <label>Amet</label> <br />
      <input type="text" ref={ametRef} defaultValue={leitud.amet} /> <br />
      <label>Email</label> <br />
      <input type="text" ref={emailRef} defaultValue={leitud.email} /> <br />
      <Link to="/halda-tootajad">
      <button onClick={muuda}>Muuda</button> 
      </Link>
    </div>
  )
}


export default MuudaTootaja 