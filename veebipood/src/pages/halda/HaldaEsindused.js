import React, { useRef, useState } from 'react'
import esindusedFailist from "../../data/esindused.json";
import { Link } from 'react-router-dom';

function HaldaEsindused() {
   
    const [keskused, muudaKeskused] = useState(esindusedFailist.slice());
    const keskusRef = useRef();
    const telefonRef = useRef();
    const aadressRef = useRef();
   


    const tyhjenda=()=>{
        esindusedFailist.splice(0);
        muudaKeskused(esindusedFailist.slice());
    }

    const lisaSaue = ()=>{
        esindusedFailist.push(
            {"nimi": "Saue","tel": "+372 666 5555", "aadr": "Saue tee 4"}
        );
        muudaKeskused(esindusedFailist.slice());
    }
    const lisaSaku = ()=>{
        esindusedFailist.push(
            {"nimi": "Saku","tel": "+372 777 5555", "aadr": "Saku tee 4"}
        );
        muudaKeskused(esindusedFailist.slice());
    }
    const lisa= ()=>{
        esindusedFailist.push(
           { "nimi": keskusRef.current.value,
             "tel": telefonRef.current.value,
             "aadr": aadressRef.current.value
           }
        );
        muudaKeskused(esindusedFailist.slice());
    }

    const kustutaEsimene =()=>{
        esindusedFailist.splice(0,1);
        muudaKeskused(esindusedFailist.slice());
    }
    const kustutaTeine =()=>{
        esindusedFailist.splice(1,1);
        muudaKeskused(esindusedFailist.slice());
    }
    const kustutaKolmas =()=>{
        esindusedFailist.splice(2,1);
        muudaKeskused(esindusedFailist.slice());
    }
    const kustutaNeljas =()=>{
        esindusedFailist.splice(3,1);
        muudaKeskused(esindusedFailist.slice());
    }
    const kustuta = (nr) => {
        esindusedFailist.splice(nr, 1);
        muudaKeskused(esindusedFailist.slice());
    }

return (
    <div>
        <br />

        {keskused.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
        
        <div> {keskused.length} tk </div>
        <br />
        {keskused.length > 0 &&<button onClick={kustutaEsimene}> Kustuta esimene</button>}
        {keskused.length > 1 &&<button onClick={kustutaTeine}> Kustuta teine</button>}
        {keskused.length > 2 &&<button onClick={kustutaKolmas}> Kustuta kolmas</button>}
        {keskused.length > 3 &&<button onClick={kustutaNeljas}> Kustuta neljas</button>}
        <br /><br />
        <label htmlFor="">Keskuse nimi</label>
        <input ref={keskusRef} type="text" /><br /><br />
        <label htmlFor="">Keskuse telefon</label>
        <input ref={telefonRef} type="text" /><br /><br />
        <label htmlFor="">Keskuse aadress</label>
        <input ref={aadressRef} type="text" /><br /><br />
        <button onClick={lisa}>Lisa</button>
        <br />
        <button onClick={lisaSaue}>Lisa Saue</button>
        <button onClick={lisaSaku}>Lisa Saku </button>
         {keskused.map((keskus,jrknr) =>
             <div key={jrknr}>
                {keskus.nimi} <br />
                {keskus.tel} <br />
                {keskus.aadr} <br />

                <button onClick={()=> kustuta(jrknr)}>X</button>
                <Link to={"/muuda-esindus/" + jrknr}>
                    <button>Muuda</button>
                </Link>
            </div>)}
    </div>
  )
}

export default HaldaEsindused