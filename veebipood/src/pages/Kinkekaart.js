import React, {useRef ,useState} from 'react'

function Kinkekaart() {
    const [summa, muudaSumma] = useState(20);
    const [kogus, muudaKogus] = useState(1);
    const emailRef = useRef();
    const [sonum, muudaSonum] = useState("");

    // function lisaOstuKorvi(){
    // }
    const lisaOstuKorvi=()=>{
      if (emailRef.current.value.includes("@")=== false) {
        muudaSonum("Email pole õige!!!");
      }else{
        muudaSonum("Kinkekaardid summas " + (summa * kogus) + " € lisatud")
      }
    }
 
  return (
    <div> 
        <button className={summa === 20 ? "summa-aktiivne" : undefined} onClick={() => muudaSumma(20)}>20</button>
        <button className={summa === 50 ? "summa-aktiivne" : undefined}  onClick={() => muudaSumma(50)}>50</button>
        <button className={summa === 100 ? "summa-aktiivne" : undefined} onClick={() => muudaSumma(100)}>100</button>
        <div>Kinkekaart {summa} €</div>

        <br></br>
{/* span haarab oma osa aga div võtab terve rea */}
        <button disabled={kogus === 1} onClick={()=> muudaKogus(kogus - 1)}>-</button>
        <span>{kogus}</span>
        <button onClick={()=> muudaKogus(kogus + 1)}>+</button>

        <br></br>
        <br></br>

        <div>Kokku: {summa * kogus}€</div>
        <div>{sonum}</div>
        <label>Email</label> <br></br>
        <input ref={emailRef} type="text" /><br />
        <button onClick={lisaOstuKorvi}>Lisa ostukorvi</button>
    </div>
  )
}

export default Kinkekaart