import React, { useRef, useState } from 'react'
import hinnadJSON from "../../data/hinnad.json"
import { Link } from 'react-router-dom';

function Hinnad() {
const [hinnad, muudaHinnad] = useState(hinnadJSON.slice());

const otsingRef = useRef();

const reset =()=>{
  muudaHinnad(hinnadJSON.slice());
}

const sorteeriKasvavalt =()=>{
  hinnad.sort((a, b) => a.number - b.number);
  muudaHinnad(hinnad.slice());
}
const sorteeriKahanevalt =()=>{
  hinnad.sort((a, b) => b.number - a.number);
  muudaHinnad(hinnad.slice());
}
const sorteeriAZ =()=>{
  hinnad.sort((a,b) => String(a.number).localeCompare(String(b.number)));
  muudaHinnad(hinnad.slice());
}
const sorteeriZA =()=>{
  hinnad.sort((a,b) => String(b.number).localeCompare(String(a.number)));
  muudaHinnad(hinnad.slice());
}
const filtreeriSuuremadkui20 =()=>{
  const vastus = hinnadJSON.filter(hind=> hind.number > 20);
  muudaHinnad(vastus);
}
const filtreeriVaiksemadKui100 =()=>{
  const vastus = hinnadJSON.filter(hind=> hind.number < 100);
  muudaHinnad(vastus);
}
//For EACH
//const-->võrdusmärgiga ei saa uut väärtust anda
//let --> luba anda uus väärtus võrdusmärgiga

// const[summa2, muudaSumma] = useState(0);

const liidaKokku =()=>{
  let summa = 0;
  hinnad.forEach(hind => summa = summa + hind.number);

  // muudaSumma(summa);
  return summa;
}

// onClick={lisa}  --> muutujat ei saa funktsiooni kaasa
  // onClick={() => kustuta(index)} --> muutuja saadan funktsiooni
  //xx onClick={liidaKokku()} ---> see on vale, sest ta ei oota klikki ära, vaid paneb kohe käima

  // <div>{liidaKokku()}</div> --> paneb funktsiooni koheselt käima
  //xx <div>{liidaKokku}</div> --> keegi ei käivita
  //xx <div>{() => liidaKokku()}</div> --> keegi ei käivita

const otsi=()=>{
  const vastus = hinnadJSON.filter(hind => String(hind.number).includes(otsingRef.current.value) );
  muudaHinnad(vastus);
}

return (
    <div><br />

    <input ref={otsingRef} onChange={otsi} type="text" />

    <button onClick={otsi}>Otsi</button>
    <div>Minu hindade summa: {liidaKokku()} €</div>
    {/* <button onClick={liidaKokku}> uuenda hindade summat</button> */}

    <button onClick={reset}>Reset</button>
    <br />
      <button onClick={sorteeriKasvavalt}>Sorteeri Kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri Kahanevalt</button>
      <button onClick={sorteeriAZ}>Sorteeri AZ</button>
      <button onClick={sorteeriZA}>Sorteeri ZA</button>
      <br />
      <button onClick={filtreeriSuuremadkui20}>Filtr suuremad kui 20</button>
      <button onClick={filtreeriVaiksemadKui100}>Filtr vaiksemad kui 1oo</button>
      <br />

      <br />
      {hinnad.map((hind, index)=> 
        <Link to={"/hind/" + index}>
          <button>{hind.number}</button>
        </Link>
      )}
    </div>
  )
}

export default Hinnad