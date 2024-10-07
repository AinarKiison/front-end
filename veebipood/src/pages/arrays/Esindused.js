import React, { useRef, useState } from 'react'
import esindusedFailist from "../../data/esindused.json"
import { Link } from 'react-router-dom';

function Esindused() {
  const[linn, muudaLinn] = useState("Tallinn")
  const [keskused, muudaKeskused] = useState(esindusedFailist.slice())
  
  const otsinguRef = useRef();

  const reset = ()=>{
    muudaKeskused(esindusedFailist.slice())
  }
//.sort((a,b)=> a-b)
//lahutamistehe paneb numbrid järjekorda

//.sort((a,b)=> a.localeCompare(b))
//öocale - keel
//compare - võrdle

  const sorteeriAZ =()=>{
    //keskused.sort();
    keskused.sort((a,b)=> a.nimi.localeCompare(b.nimi, "et"));
    muudaKeskused(keskused.slice()); //htmli uuendamiseks
  }
// "et" - et oleks eesti tähestikus
  const sorteeriZA =()=>{
    //keskused.sort();
    //keskused.reverse();
    keskused.sort((a,b)=> b.nimi.localeCompare(a.nimi, "et"));
    muudaKeskused(keskused.slice()); 
  }
  const sorteeriTahedKasvavalt =()=>{
    keskused.sort((a,b)=> a.nimi.length - b.nimi.length);
    muudaKeskused(keskused.slice());
    
  }
  const sorteeriTahedKahanevalt =()=>{
    keskused.sort((a,b)=> b.nimi.length - a.nimi.length);
    muudaKeskused(keskused.slice()); 
  }
  const sorteeriKolmasTahtAZ =()=>{
    keskused.sort((a,b)=> a.nimi[2].localeCompare(b.nimi[2]));
    muudaKeskused(keskused.slice()); 
  }

  const filtreeriEgaLoppevad = ()=>{
    //filtreeimisel tuleb teha uus muutuja, kuhu sisse lähevad alles jäetud elemendid
    const vastus = esindusedFailist.filter(keskus=> keskus.nimi.endsWith("e")); 
    muudaKeskused(vastus);
  }
  const filtreeriVah7Tahelised = ()=>{
    const vastus = esindusedFailist.filter(keskus=> keskus.nimi.length >=7); 
    muudaKeskused(vastus);
  }
  const filtreeri9Tahelised = ()=>{
    const vastus = esindusedFailist.filter(keskus=> keskus.nimi.length === 9); 
    muudaKeskused(vastus); 
  }
  const filtreeriIsSisaldavad = ()=>{
    const vastus = esindusedFailist.filter(keskus=> keskus.nimi.includes("is")); 
    muudaKeskused(vastus);
  }
  const filtreeriKolmasTahtI = ()=>{
    const vastus = esindusedFailist.filter(keskus=> keskus.nimi[3] === "s"); 
    muudaKeskused(vastus);
  }
//otsing siit
  const otsi=()=>{
    const vastus = esindusedFailist.filter(keskus => keskus.nimi.includes(otsinguRef.current.value)); 
    muudaKeskused(vastus);
  }


  const arvutaKokku = () => {
    let summa = 0; // => summa += keskus.length ---> liida iseendale juurde
    keskused.forEach(keskus => summa =  summa + keskus.nimi.length);
    return summa;
  }

  return (
    <div>
      <br />
      <div>Esinduse Nimetähtede arv kokku: {arvutaKokku()} tk</div>


      <br />
      {/* otsing siit */}
      
      <input ref={otsinguRef} onChange={otsi} type="text" />

      {/* <button onClick={otsi}>Otsi</button> */}

<br /><br />
    <div>Aktiivne linn: {linn}</div>
    <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
    <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Tartu")}>Tartu</button>
    <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>
    <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Narva")}>Narva</button>

    {linn === "Tallinn" &&
     <div>
      <button onClick={reset}>Reset</button>

      <button onClick={sorteeriAZ}>Sorteeri AZ</button>
      <button onClick={sorteeriZA}>Sorteeri ZA</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähtede arv kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähtede arv kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri 3. täht</button>
      <br />
      <button onClick={filtreeriEgaLoppevad}>Filtr E</button>
      <button onClick={filtreeriVah7Tahelised}>Filtr väh 7 täh</button>
      <button onClick={filtreeri9Tahelised }> filtr täpsel9 täh</button>
      <button onClick={filtreeriIsSisaldavad }> filtr 'is'</button>
      <button onClick={filtreeriKolmasTahtI}>filtr 4. täht 's'</button>
    
      <br />
      {keskused.map((keskus, index) => 
        <div key={index}>
          {keskus.nimi} <br />
          {keskus.tel} <br />
          {keskus.aadr} <br />
          <Link to={"/esindus/" + index}>
            <button>Vaata Lähemalt</button>
          </Link> 
        </div>)}
    


    </div>}

    {linn === "Narva" && <div>Fama</div>}
    {linn === "Pärnu" && <div>Port Artur 2</div>}
    
    {linn === "Tartu" &&
     <div>
      <div>Lõuna Keskus</div>
      <div>Raatuse</div>
    </div>}
    
    </div>
  )
}

export default Esindused